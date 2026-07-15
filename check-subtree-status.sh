#!/usr/bin/env bash
set -euo pipefail

# Read-only status check for the lab monorepo subtree workflow.
# It compares each topic remote with:
#   1. the matching subtree folder on main, and
#   2. the matching local orphan/topic branch, if it exists.

TOPICS="
azure
cli
concurrency
cpp
dsa
go
java
javascript
python
rust
sql
xml
"

echo "Checking subtree status..."
echo "This script is read-only: it fetches remotes and compares Git tree hashes."
echo ""

if ! git show-ref --verify --quiet "refs/heads/main"; then
    echo "ERROR: local main branch is missing." >&2
    exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
    echo "WARNING: working tree is not clean. The check will continue, but review local changes before syncing."
    echo ""
fi

for TOPIC in $TOPICS; do
    REMOTE="$TOPIC-remote"

    echo "----------------------------------------"
    echo "Checking $TOPIC"

    if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
        echo "$TOPIC: MISSING REMOTE - run ./setup-remotes.sh"
        continue
    fi

    if ! git fetch "$REMOTE" main >/dev/null 2>&1; then
        echo "$TOPIC: FETCH FAILED - could not fetch $REMOTE/main"
        continue
    fi

    if ! git cat-file -e "$REMOTE/main^{tree}" 2>/dev/null; then
        echo "$TOPIC: REMOTE MAIN MISSING - $REMOTE/main is not available"
        continue
    fi

    REMOTE_TREE=$(git rev-parse "$REMOTE/main^{tree}")

    if git cat-file -e "main:$TOPIC" 2>/dev/null; then
        MAIN_TREE=$(git rev-parse "main:$TOPIC")
        if [ "$MAIN_TREE" = "$REMOTE_TREE" ]; then
            echo "$TOPIC: OK - main subtree matches $REMOTE/main"
        else
            echo "$TOPIC: CHANGED - main subtree differs from $REMOTE/main"
            echo "  To update main: git checkout main && git subtree pull --prefix=$TOPIC $REMOTE main --squash"
        fi
    else
        echo "$TOPIC: MISSING ON MAIN - folder '$TOPIC' does not exist on main"
    fi

    if git show-ref --verify --quiet "refs/heads/$TOPIC"; then
        LOCAL_TOPIC_TREE=$(git rev-parse "$TOPIC^{tree}")
        if [ "$LOCAL_TOPIC_TREE" = "$REMOTE_TREE" ]; then
            echo "$TOPIC: OK - local topic branch matches $REMOTE/main"
        else
            echo "$TOPIC: CHANGED - local topic branch differs from $REMOTE/main"
            echo "  To update branch: git checkout $TOPIC && git pull $REMOTE main"
        fi
    else
        echo "$TOPIC: MISSING LOCAL BRANCH - local branch '$TOPIC' does not exist"
    fi
done

echo "----------------------------------------"
echo "Done."