# CLI Lab Cheatsheet

Quick reference for common Linux, Bash, and PowerShell commands you might use across topics.

## Navigation
- Linux: `pwd`, `ls -la`, `cd -`
- PowerShell: `Get-Location`, `Get-ChildItem -Force`, `Set-Location -`

## Files
- Linux: `touch`, `mkdir -p`, `cp -r`, `mv`, `rm -rf`
- PowerShell: `New-Item`, `Copy-Item -Recurse`, `Move-Item`, `Remove-Item -Recurse -Force`

## Search
- Linux: `grep -R "pattern" .`, `find . -type f -name "*.md"`
- PowerShell: `Select-String -Path . -Pattern "pattern" -AllMatches -List`, `Get-ChildItem -Recurse -Filter *.md`

## Networking
- Linux: `ip addr`, `ip route`, `ping -c 4 1.1.1.1`, `dig example.com +short`
- PowerShell: `Get-NetIPConfiguration`, `Test-Connection 1.1.1.1 -Count 4`, `Resolve-DnsName example.com`

## Processes/Services
- Linux: `ps aux | head`, `kill -SIGTERM <pid>`, `systemctl status <svc>`
- PowerShell: `Get-Process`, `Stop-Process -Name <proc>`, `Get-Service <svc> | Restart-Service`

## Permissions
- Linux: `ls -l`, `chmod u+x file`, `chown user:group file`
- PowerShell: `Get-Acl . | Format-List`, `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

## Bash scripting snippets
```bash
#!/usr/bin/env bash
set -euo pipefail
for f in *.md; do echo "MD: $f"; done
```

## PowerShell scripting snippets
```powershell
param([string]$Name = "World")
"Hello, $Name!"
Get-ChildItem *.md | % { "MD: $($_.Name)" }
```
