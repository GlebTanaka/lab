# Users & Permissions — PowerShell

Notes on user and permission management on Windows with PowerShell.

## Core topics
- Local users and groups (Get-LocalUser, New-LocalUser, Get-LocalGroup)
- Membership (Add-LocalGroupMember, Remove-LocalGroupMember)
- NTFS permissions (Get-Acl, Set-Acl)
- Execution policy (Get-ExecutionPolicy, Set-ExecutionPolicy)

## Commands to practice
```powershell
whoami
Get-LocalUser | Select-Object -First 5
Get-LocalGroup | Select-Object -First 5
Get-Acl . | Format-List
# Example (requires admin and caution):
# New-LocalUser -Name demo -NoPassword; Add-LocalGroupMember -Group Users -Member demo; Remove-LocalUser demo
```

## Notes
- Many commands require elevated PowerShell.

## Progress
- [ ] Listed users and groups
- [ ] Reviewed NTFS ACLs
- [ ] Adjusted execution policy (understood implications)
