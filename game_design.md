# StopThePropaganda

You are a member of a technically proficient group of people fighting the disinformation scene. You gathered information from your secret source about the disinformation web magazine ‘Hladné Správy.’ From the information, you found out that this magazine has obtained documents containing a load of false information and one unnamed country's government provided these documents. On top of that, this country reportedly paid the magazine to release the information all over the internet as true articles, and that is why we need to stop them and hand the documents to the authorities. We found out the exact location of the magazine's offices, and your task is to go there and get access to those incriminating documents in their network. Go there when the offices are empty and try not to get exposed. The best way would be to get to the chief editor's computer, but he takes it home with him. However, his secretary probably doesn't. Start there, and good luck.


## Level 1: Get access 

**Objective**:

The player should get access to secretary computer using SSH.

---
---

**Task assignment**:

As you probably know, most of the attacks start with gathering some information about the victim and does not have to happen online. If you have access to the victim’s trash cans or their table where they sit, there may be some valuable pieces of information.

When this is not possible, social media or blogging websites are also options where you can find hobbies or other compromising info on the victim. But I have a feeling you do not need this type of information.

When you came to the offices, the building was locked and the only possible entrance you found was the window right next to the chief editors' secretary table. You cannot physically access her computer, but it looks like it is turned on. Once you gather some information, you can start with getting the remote access to the computer of the secretary. Maybe access through the terminal will be sufficient, but you will definitely need login (username) and password. And from the previous reconnaissance, I think her computers IP address ends with'.168.1.19'. After successful connection use acquired login as the flag.
 
**Hints**:

Hint 1 (What tool to use?): Use the command-line  **ssh**. Type `ssh --help` for more info.

Hint 2 (What login to use?): Use the first and last name of the secretary (in lowercase and with a dot as a separator) as login.

Hint 3 (Where to find the password?): Look through the window in the office.

**Solution**:

```
ssh valeria.ivanovna@192.168.1.19

valeria.ivanovna@192.168.1.19 password: tomasko1232002
```

**Flag value**:

`valeria.ivanovna`

---
---

**Estimated duration**:

7 minutes

**Learning outcomes**:

That reconnaissance is important part of hacking, and you don't always have to use computer to discover useful information. And also basic knowledge about ssh command.

## Level 2: Find that file

**Objective**:

Find the secret file in the file system. It's a text file in Trash folder.

---
---

**Task assignment**:

Valeria received an email with secret information in the attachment. When you receive secret instructions, after reading you should probably delete them, right? However, is deleted file lost forever? Try to find it. The flag is the location of the secret folder inside the deleted attachment (don't forget the '/').

**Hints**:

Hint 1 (Where to look): Deleted files are moved to Trash folder. Users typically have a hidden .local/ folder in their home directory, and inside it, you can find the Trash folder somewhere.

Hint 2 (Which file?): Filename is attachment1.txt

**Solution**:

```
cd /home/valeria/.local/share/Trash/files/
ls
cat attachment1.txt
```

**Flag value**:

`/articles/secret/`

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

You already got into the computer of Ms. Valeria and found some useful information about files stored on some server (it's a good idea to note or remember them. So now you can get back to your machine and continue with this task.

Your task is to find the machine with a running web server. Use some scanning tool and look for specific services running on specific ports.

As a flag, submit the version of service running on the web server.

**Hints**:

Hint 1 (What to look for?): Web servers usually run on port 80, try looking for that.

Hint 2 (What tool to use?): Use the command-line tool **nmap**. Check --help 

Hint 3 (What range to use?): **nmap**  needs to specify what host/network to scan. You can find information about you network with **ifconfig**. And have you heard about CIDR Notation? It can save you some time if you use subnet mask /24 as it does not scan all adreses.

Hint 4 (What else?): Try to find a right option to run nmap with, that enables detection of services versions.



**Solution**:

```
kali@attacker:~#  ifconfig
    eth0:...
        ...
    eth1:...
        inet 192.168.1.30 netmask 255.255.255.0
    ...

kali@attacker:~#  nmap -sV 192.168.1.30/24
    ...
    Nmap scan report for user (192.168.1.30)
    ...
    80/tcp open http Apache httpd 2.4.50

```

**Flag value**
`2.4.50`

---
---

**Estimated duration**:

10 minutes

**Learning outcomes** 
The player learns how to scan the network to discover its structure and various running services.


## Level 4: Exploit the server

**Objective**:

Use the exploit to get access to the servers filesystem and find the secret file in the folder from task 2. 

---
---

**Task assignment**:

You already got the IP address and the name of the service. Fortunately for you, the Apache servers tend to be vulnerable. After all, this is not your first time dealing with such a server. This means that you got a script ready to be used. It is located in your Downloads folder. Unfortunately, it was quite a long time ago, so you need to refresh your memory a bit. The important thing is that you do remember the name of the vulnerability. On the internet, you can find the vulnerability under the name [CVE-2021-42013]. Using the script (which implements the vulnerability), try to gain access to the files on the remote server. You should find the secret file (name of which you discovered from the deleted file on Valeria's computer). The flag itself is the last word in the file (consisting of two parts connected with -).

**Hints**:

Hint 1 (Where is the Downloads folder?): /home/kali/Downloads

Hint 2 (How to find the right information?): To read a file, use basic commands like "cd", "ls" and "cat". You can run the script multiple times to find the right information.


**Solution**:

```
python3 cve-2021-42013.py -u http://192.168.1.4 -s "cd /articles/secret && cat new_information"
```


**Flag value**:

`Gagarin-mk1`

---
---

**Estimated duration**:

15 minutes

**Learning outcomes**:

Learn about vulnerabilities (CVE) and that you can exploit them easily.

---
---

## The End
You found that file. Great! It's obviously a fake. Authorities can ban the website with this evidence, so this hoax will never be published. Thank you.

---
---

## License
This work by team Foxtrot is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0).

