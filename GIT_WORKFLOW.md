# Git Subtree Workflow Documentation

This repository uses a monorepo structure managed with `git subtree`. Each top-level directory (e.g., `java/`, `python/`, `dsa/`) is linked to an external repository.

## Architecture

- **Main Branch (`main`)**: The monorepo containing all sub-projects.
- **Topic Branches (`java`, `python`, etc.)**: Isolated branches for specific topics. Each branch contains only its respective directory (e.g., the `java` branch contains only the `java/` folder).
- **Topic Remotes**: External repositories for each topic (e.g., `lab-java.git`).

## Setup

Before starting, ensure all subtree remotes are configured. You can use the provided script:

```bash
./setup-remotes.sh
```

To check whether any subtree remote or local topic branch differs from the monorepo state, use the read-only status script:

```bash
./check-subtree-status.sh
```

The script fetches the topic remotes and compares Git tree hashes. If a topic changed on its separate remote, it prints the exact `git subtree pull` command needed to update `main`.

## Development Workflow

To work on a specific project (e.g., Java):

### 1. Switch to the Topic Branch
Isolate your work by switching to the topic branch.
```bash
git checkout java
```
In this branch, you will only see the `java/` directory.

### 2. Make Changes and Commit
Work inside the `java/` folder as usual.
```bash
# Make changes...
git add java/
git commit -m "Your descriptive commit message"
```

### 3. Push to the Topic Remote
Push your changes to the external repository using `git subtree push`. This splits the `java/` folder and pushes its contents to the root of the remote's `main` branch.
```bash
git subtree push --prefix=java java-remote main
```

### 4. Sync with the Monorepo (Main Branch)
After pushing to the external repo, you should also update the monorepo's `main` branch.
```bash
git checkout main
git subtree pull --prefix=java java-remote main --squash
```
Using `--squash` keeps the `main` branch history clean by consolidating the topic branch's commits into a single merge commit.

## Summary of Commands

| Action | Command |
| :--- | :--- |
| **Setup Remotes** | `./setup-remotes.sh` |
| **Check Subtree Status** | `./check-subtree-status.sh` |
| **Switch to Topic** | `git checkout <topic>` |
| **Push Changes** | `git subtree push --prefix=<topic> <topic>-remote main` |
| **Pull to Main** | `git subtree pull --prefix=<topic> <topic>-remote main --squash` |
