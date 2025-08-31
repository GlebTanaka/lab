# Networking — Linux

Record commands and notes for Linux networking.

## Core topics
- Interfaces and IP (ip addr, ip link, ifconfig)
- Routing (ip route, route)
- DNS and name resolution (resolv.conf, dig, nslookup)
- Connectivity checks (ping, traceroute, mtr)
- Sockets/ports (ss, netstat)
- Firewalls (iptables/nftables, ufw)
- Transfers (curl, wget, scp, rsync)

## Commands to practice
```bash
ip addr show
ip route show
ping -c 4 1.1.1.1
traceroute 1.1.1.1
ss -tulpen | head
dig example.com +short
curl -I https://example.com
```

## Notes
- Some tools require sudo (e.g., iptables).

## Progress
- [ ] Listed interfaces and routes
- [ ] Checked connectivity
- [ ] Queried DNS
