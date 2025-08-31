# Networking — PowerShell

Record commands and notes for Windows networking with PowerShell.

## Core topics
- IP and interfaces (Get-NetIPConfiguration, Get-NetAdapter)
- Routes (Get-NetRoute)
- DNS (Resolve-DnsName)
- Connectivity checks (Test-Connection, tracert)
- Ports (Get-NetTCPConnection)
- Firewall (Get-NetFirewallRule)
- Transfers (Invoke-WebRequest, Start-BitsTransfer)

## Commands to practice
```powershell
Get-NetAdapter | Where-Object Status -eq Up
Get-NetIPConfiguration
Get-NetRoute | Select-Object -First 10
Test-Connection 1.1.1.1 -Count 4
Resolve-DnsName example.com
Get-NetTCPConnection | Select-Object -First 10
Invoke-WebRequest -Method Head https://example.com
```

## Notes
- Some commands require elevated PowerShell.

## Progress
- [ ] Listed adapters and IP config
- [ ] Checked connectivity
- [ ] Queried DNS
