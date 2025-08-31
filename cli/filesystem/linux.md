# Filesystem — Linux

Use this page to jot down commands, examples, and notes as you learn Linux filesystem CLI.

## Core topics
- Paths and navigation (pwd, cd, ls)
- Inspecting files (cat, less, head, tail)
- Creating/changing files (touch, mkdir, rm, rmdir)
- Copying/moving (cp, mv)
- Permissions/ownership overview (ls -l, chmod, chown)
- Finding things (find, locate, which)
- Disk usage (du, df)

## Commands to practice
```bash
pwd
ls -la
cd /tmp && pwd && cd -
mkdir -p demo/subdir && ls -R demo
cp -r demo demo_copy && mv demo_copy demo_mv && rm -rf demo_mv
head -n 5 /etc/passwd | nl
find . -type f -name "*.md"
```

## Notes
- Add examples you find useful here.

## Progress
- [ ] Completed basic navigation
- [ ] Practiced file creation/removal
- [ ] Reviewed permissions basics
