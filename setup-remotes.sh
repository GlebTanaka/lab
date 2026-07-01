#!/bin/bash

# Script to re-add git subtree remotes for the lab monorepo
# This is useful when setting up the repo fresh on a new machine.

# Mapping of remote name to its repository URL
# Note: Remotes are named <topic>-remote to match existing subtree commands.
declare -A REMOTES=(
    ["azure-remote"]="git@github.com:GlebTanaka/lab-azure.git"             # Prefix: azure
    ["cli-remote"]="git@github.com:GlebTanaka/lab-cli.git"                 # Prefix: cli
    ["concurrency-remote"]="git@github.com:GlebTanaka/lab-concurrency.git" # Prefix: concurrency
    ["cpp-remote"]="git@github.com:GlebTanaka/lab-cpp.git"                 # Prefix: cpp
    ["dsa-remote"]="git@github.com:GlebTanaka/lab-dsa.git"                 # Prefix: dsa
    ["go-remote"]="git@github.com:GlebTanaka/lab-go.git"                   # Prefix: go
    ["java-remote"]="git@github.com:GlebTanaka/lab-java.git"               # Prefix: java
    ["javascript-remote"]="git@github.com:GlebTanaka/lab-javascript.git"   # Prefix: javascript
    ["python-remote"]="git@github.com:GlebTanaka/lab-python.git"           # Prefix: python
    ["rust-remote"]="git@github.com:GlebTanaka/lab-rust.git"               # Prefix: rust
    ["sql-remote"]="git@github.com:GlebTanaka/lab-sql.git"                 # Prefix: SQL
    ["xml-remote"]="git@github.com:GlebTanaka/lab-xml.git"                 # Prefix: xml
)

echo "Setting up subtree remotes..."

for NAME in "${!REMOTES[@]}"; do
    URL="${REMOTES[$NAME]}"
    
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
