# Konkrete Mathematik

A personal follow-along workspace for Edmund Weitz's
*Konkrete Mathematik (nicht nur) fuer Informatiker*.

## References

- [Author's companion site, second edition](https://weitz.de/KMFI/)
- [First-edition companion site](https://weitz.de/KMFI1/)

Book edition: to be recorded before starting. Use the matching companion site
for page references, videos, and errata.

## Progress

- [x] Create the learning workspace and subtree repository.
- [ ] Record the edition being used.
- [ ] Set up a Python environment.
- [ ] Begin the first chapter and record questions and exercise attempts.

## Structure

- `chapters/`: chapter notes, runnable examples, and personal exercise attempts.
- `tests/`: automated checks for implemented algorithms as they are added.
- `pyproject.toml`: track-specific Python requirements and dependencies.

Create chapter folders as needed, for example `chapters/01-python/`.
Within a chapter, use `notes.md`, `examples.py`, and `exercises.py` where useful;
notebooks are optional for interactive plots. There are no completed exercises
or executable examples yet.

## Environment

Use Python 3.11 or newer. From this directory:

```sh
python3 -m venv .venv
source .venv/bin/activate
```

On Windows PowerShell, activate with `.venv\Scripts\Activate.ps1` instead.
No third-party dependencies are required initially. Record any dependencies
in `pyproject.toml` when a chapter needs them; keep the virtual environment out
of Git.
