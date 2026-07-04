# Project Guidelines - Git Subtree Workflow

This project uses a monorepo structure with `git subtree`. When working with this repository, always follow these rules:

## Architecture
- **Main Branch (`main`)**: The monorepo containing all sub-projects in top-level directories.
- **Topic Branches**: Isolated branches for specific topics (e.g., `java`, `python`, `dsa`). Each contains only its respective directory.
- **Topic Remotes**: External repositories for each topic (e.g., `git@github.com:GlebTanaka/lab-java.git`).

## Operational Rules
1. **No Direct Merges to Main for Topics**: Changes to sub-projects should be made in their respective topic branches first.
2. **Subtree Push**: After committing changes in a topic branch, use `git subtree push` to sync with the topic remote.
   - Command: `git subtree push --prefix=<topic> <topic>-remote main`
3. **Subtree Pull (Squashed)**: To integrate topic changes into the `main` branch, use `git subtree pull` with the `--squash` flag.
   - Command: `git subtree pull --prefix=<topic> <topic>-remote main --squash`
4. **Setup Remotes**: If remotes are missing, use the `./setup-remotes.sh` script.

## Agent Context
- The `GIT_WORKFLOW.md` file in the root provides detailed documentation for human users.
- This `GUIDELINES.md` file serves as a quick reference and set of instructions for JetBrains AI agents to ensure they follow the correct workflow.
