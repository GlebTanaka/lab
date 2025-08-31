# Users & Permissions — Linux

Notes on user management and permissions in Linux.

## Core topics
- Users and groups (useradd, usermod, userdel, groupadd)
- Passwords and accounts (passwd, chage)
- Ownership and permissions (chown, chmod, umask)
- Sudoers (visudo)
- ACLs (getfacl, setfacl)

## Commands to practice
```bash
id
whoami
getent passwd | head
sudo useradd demo && sudo passwd -l demo && sudo userdel demo
umask
ls -l
chmod u+x script.sh
chown $USER:$USER file.txt
```

## Notes
- Many commands require sudo/root.

## Progress
- [ ] Reviewed users and groups
- [ ] Practiced chmod/chown
- [ ] Looked at ACLs
