# Project Map

This repository is a personal programming lab organized by topic.
It is both:

- a learning workspace with notes, exercises, and small projects
- a subtree-based monorepo where most top-level folders are mirrored to separate topic repositories

The result is a repo with two kinds of structure at once:

- content structure: topic folders like `python/`, `java/`, `dsa/`, `SQL/`
- Git workflow structure: topic remotes, topic branches, and subtree sync scripts

## Repo-Level Workflow

The subtree workflow is documented in [`GIT_WORKFLOW.md`](GIT_WORKFLOW.md).

Useful root scripts:

- `setup-remotes.sh`: configures subtree remotes
- `check-subtree-status.sh`: read-only status check for subtree remotes and local topic branches

Run `bash ./check-subtree-status.sh` for current synchronization status.
Local topic branches are optional and may differ between machines. The checker
maps topic identifiers to actual folder names, including `sql:SQL`, and compares
the topic folder on prefixed branches rather than their entire root tree.

## Top-Level Layout

### Core learning areas

- `python/`: Python topic examples and mini-lessons
- `javascript/`: JavaScript learning tracks, currently strongest in ECMAScript
- `java/`: Java learning area with Java 25 examples and a Spring SOAP project
- `cpp/`: C++ roadmap with placeholder subfolders for staged learning
- `dsa/`: Data structures and algorithms across multiple languages
- `math/`: Mathematics, starting with Edmund Weitz's Konkrete Mathematik
- `SQL/`: SQL learning repo plus project-based work
- `cli/`: Linux and PowerShell notes by topic
- `xml/`: XML notes and folder structure for basics, XPath, XSD, XSLT, and Java

### Secondary or early-stage areas

- `azure/`: contains a .NET solution (`GlebApp`)
- `go/`: currently minimal
- `rust/`: currently minimal
- `concurrency/`: currently minimal at the top level

### Tooling and metadata

- `.idea/`: IDE workspace files
- `.junie/`: agent/tooling metadata
- `GIT_WORKFLOW.md`: subtree workflow documentation
- `PROJECT_MAP.md`: this overview

## Topic-by-Topic Notes

### `python/`

One of the clearest and most complete topic areas.

Current themes include:

- tuples
- duck typing
- structural pattern matching
- LEGB scope rules
- thread safety
- instance/class/static methods

This folder behaves like a curated set of runnable concept examples rather than a single project.

### `javascript/`

This area is structured as tracks:

- `ecmascript/`
- `async/`
- `dom/`
- `nodejs/`

Right now, `ecmascript/` has the most visible content. Several other folders still act as placeholders, which suggests the intended curriculum is ahead of the current implementation.

### `java/`

This area currently has two distinct subtracks:

- `java-25-examples/`: focused language-feature examples
- `spring-soap-currency-converter/`: a Maven-based project scaffold

This folder mixes reference-style example material with project-style work.

### `cpp/`

`cpp/` is organized around a learning roadmap:

- `basics/`
- `oop/`
- `stl/`
- `advanced/`
- `projects/`

The roadmap is well defined in the README, while much of the folder content is still placeholder-based.

### `dsa/`

This is one of the richest parts of the repo.

It includes:

- `csharp/`: multiple `.csx` implementations and tests
- `java/`: `.jsh`-based DSA exercises and notes
- `python/`: Python DSA workspace with `pyproject.toml`, `uv.lock`, and starter structure

The DSA area feels more implementation-heavy than note-heavy.

### `SQL/`

This folder currently contains two different modes of learning:

- `sql-learning/`: engine-oriented learning and setup work
- `projects/flight/`: a portfolio-style SQL project with CSV inputs and staged database work

Important naming note:

- the folder is `SQL/` in this repo
- the subtree status script maps the topic identifier `sql` to `SQL/`

### `math/`

A subject-focused learning area, independently published as
[`GlebTanaka/lab-math`](https://github.com/GlebTanaka/lab-math).

- `konkrete-mathematik/`: follow-along workspace for Edmund Weitz's book
- chapter notes, personal exercise attempts, and Python experiments
- a track-specific `pyproject.toml` and space for algorithm tests

The initial scaffold contains no completed exercises. Python is the exploration
tool; mathematics is the subject. See [math/README.md](math/README.md).

### `cli/`

A practical reference area split by operating-system context:

- filesystem
- networking
- processes
- users and permissions

Each topic is documented separately for Linux and PowerShell where relevant.

### `xml/`

This area has a clean conceptual split:

- `basics/`
- `xpath/`
- `xslt/`
- `xsd/`
- `comparison/`
- `java/`

It looks designed as a structured study path for XML-related technologies.

### `azure/`

Unlike some placeholder sections, this folder contains a concrete .NET application:

- `azure/GlebApp/GlebApp.sln`
- `azure/GlebApp/GlebApp/Program.cs`

This makes it more project-oriented than several of the other early-stage topic folders.

## Structural Patterns Across the Repo

A few recurring patterns show up throughout the repository:

- some topic folders are documentation-first
- some are exercise-first with runnable files
- some are project-first with real app scaffolding
- some are roadmap-first and still mostly placeholders

That mix is normal for a long-running personal lab, but it also means folder maturity varies a lot.

## Notable Quirks

### Folder casing

Use the tracked folder names consistently across machines: `xml/` and `SQL/`.
The explicit mapping in the status script handles the uppercase SQL prefix.

### Mixed maturity

Some READMEs are polished learning guides.
Others still contain subtree workflow placeholders like "change from orphan branch."
That suggests some topic repos have already transitioned into real content, while others are still being initialized.

## Suggested Use Of This Repo

A good way to think about this repository is:

- the root repo is the learning dashboard
- each top-level topic is its own learning lane
- subtree remotes let those lanes stay independently publishable or portable

When adding new work, it will probably stay easiest to keep each topic folder in one of these modes:

- concept notes
- runnable examples
- mini-projects
- externalized subtree-managed topic repo

That keeps the repo flexible without losing the mental model.
