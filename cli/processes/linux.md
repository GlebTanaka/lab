# Processes — Linux

Track learning about managing processes on Linux.

## Core topics
- Listing processes (ps, top, htop)
- Process tree (pstree)
- Signals (kill, pkill, killall)
- Foreground/background (fg, bg, jobs, &)
- Monitoring (top, vmstat, iostat, free)
- Service managers (systemctl, service)

## Commands to practice
```bash
ps aux | head
ps -ef | grep bash
pstree -p | head
sleep 60 & jobs; fg %1
kill -SIGTERM <pid>
kill -9 <pid>
systemctl status sshd
```

## Notes
- Use with caution when sending signals to processes.

## Progress
- [ ] Listed and filtered processes
- [ ] Practiced background/foreground
- [ ] Sent signals safely
