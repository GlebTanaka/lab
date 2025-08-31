# Filesystem — PowerShell

Use this page to record commands and notes as you learn filesystem tasks in PowerShell.

## Core topics
- Providers and drives (Get-PSDrive)
- Navigation (Set-Location, Get-ChildItem)
- Files/dirs (New-Item, Remove-Item, Copy-Item, Move-Item)
- Content (Get-Content, Set-Content, Add-Content)
- Attributes/permissions basics
- Searching (Get-ChildItem -Recurse, Select-String)
- Disk usage (Get-Item, Measure-Object)

## Commands to practice
```powershell
Get-Location
Get-ChildItem -Force
Set-Location $env:TEMP; Get-Location; Set-Location -
New-Item -ItemType Directory demo/subdir -Force; Get-ChildItem -Recurse demo
Copy-Item -Recurse demo demo_copy; Move-Item demo_copy demo_mv; Remove-Item -Recurse -Force demo_mv
Get-Content $PROFILE | Select-Object -First 5 | %{ "{0}: $_" -f ($global:i++); $null } | Out-Host
Get-ChildItem -Recurse -Filter *.md
```

## Notes
- Add examples you find useful here.

## Progress
- [ ] Completed basic navigation
- [ ] Practiced file creation/removal
- [ ] Reviewed permissions basics
