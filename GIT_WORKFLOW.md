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

The script fetches the topic remotes and compares Git tree hashes. A difference
does not establish which side is ahead; review local and remote changes before
using its suggested subtree pull command. For prefixed topic branches it compares
the topic folder, not the entire branch root.

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

## Mathematics Track

- Monorepo prefix: `math/`
- Local topic branch: `math` (contains the `math/` directory)
- Remote: `math-remote`, pointing to `git@github.com:GlebTanaka/lab-math.git`
- Remote branch: `main` (contains the contents of `math/` at its root)
- First learning track: `math/konkrete-mathematik/`

The initial topic commit was published with `git subtree push`, then imported
into the monorepo with `git subtree add --prefix=math math-remote main --squash`.
The add operation is only for first-time integration; subsequent updates use pull.
The local `math` branch also has synchronization metadata established with
`git subtree split --prefix=math --rejoin`, allowing subtree pulls on that branch.

For work in this checkout, start with a clean working tree and use the topic branch:

```sh
git switch math
git subtree pull --prefix=math math-remote main --squash
# Edit files inside math/, then stage only your intended changes.
git add math/
git commit -m "Add mathematics exercise"
git subtree push --prefix=math math-remote main
git switch main
git subtree pull --prefix=math math-remote main --squash
git push origin main
```

Switching to an isolated topic branch removes the other tracked topic folders
from the working tree until you switch back to `main`.

On another machine, a standalone clone is often simpler:

```sh
git clone git@github.com:GlebTanaka/lab-math.git
```

Work and push normally inside that standalone clone. In the lab checkout, run
`bash ./setup-remotes.sh`, then pull its changes into `main` using the subtree
pull command above. Do not clone `lab-math` inside the monorepo's `math/` folder.

The prefixed local `math` branch is not automatically updated by changes from a
standalone clone. Before returning to it, compare it with `math-remote/main`.
Do not run a plain `git pull math-remote main` on the prefixed branch: the two
trees have different layouts. Use the subtree pull command on the initialized
`math` branch as shown above. Resolve any conflicts before pushing; never
force-push over independent work. Older topic branches may lack subtree-import
metadata and need a separate setup review before using subtree pull.

## Summary of Commands

| Action | Command |
| :--- | :--- |
| **Setup Remotes** | `./setup-remotes.sh` |
| **Check Subtree Status** | `./check-subtree-status.sh` |
| **Switch to Topic** | `git checkout <topic>` |
| **Push Changes** | `git subtree push --prefix=<topic> <topic>-remote main` |
| **Pull to Main** | `git subtree pull --prefix=<topic> <topic>-remote main --squash` |
