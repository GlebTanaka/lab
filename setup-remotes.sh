#!/usr/bin/env bash
set -euo pipefail

# Script to re-add git subtree remotes for the lab monorepo
# This is useful when setting up the repo fresh on a new machine.
#
# Compatible with bash 3.2+ (macOS) and bash 4+ (Linux).
# Uses simple "name=url" pairs instead of associative arrays.

# Mapping of remote name to its repository URL
# Format: "remote-name=repository-url"
# Note: Remotes are named <topic>-remote to match existing subtree commands.
REMOTES="
azure-remote=git@github.com:GlebTanaka/lab-azure.git
cli-remote=git@github.com:GlebTanaka/lab-cli.git
concurrency-remote=git@github.com:GlebTanaka/lab-concurrency.git
cpp-remote=git@github.com:GlebTanaka/lab-cpp.git
dsa-remote=git@github.com:GlebTanaka/lab-dsa.git
go-remote=git@github.com:GlebTanaka/lab-go.git
java-remote=git@github.com:GlebTanaka/lab-java.git
javascript-remote=git@github.com:GlebTanaka/lab-javascript.git
python-remote=git@github.com:GlebTanaka/lab-python.git
rust-remote=git@github.com:GlebTanaka/lab-rust.git
sql-remote=git@github.com:GlebTanaka/lab-sql.git
xml-remote=git@github.com:GlebTanaka/lab-xml.git
"

echo "Setting up subtree remotes..."

for ENTRY in $REMOTES; do
    NAME="${ENTRY%%=*}"
    URL="${ENTRY#*=}"

    if git remote | grep -q "^$NAME$"; then
        echo "Remote '$NAME' already exists. Skipping."
    else
        echo "Adding remote '$NAME' -> $URL"
        if git remote add "$NAME" "$URL"; then
            echo "Added remote '$NAME' -> $URL"
        else
            echo "ERROR: Failed to add remote '$NAME'" >&2
        fi
    fi
done

echo "----------------------------------------"
echo "Done. Current remotes:"
git remote -v
