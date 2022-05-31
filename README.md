# StopThePropaganda

## Sandbox topology

This sandbox consists of five networked hosts in a LAN:

* attacker - Kali Linux 2020 with GUI at IP `192.168.1.30`,
* server - headless Ubuntu 18.04 Server running Telnet at IP `192.168.1.4`.
* server2 - headless Ubuntu 18.04 Server running Telnet at IP `192.168.1.6`.
* server3 - headless Ubuntu 18.04 Server running Telnet at IP `192.168.1.3`.
* user - headless Ubuntu 18.04 Server running Telnet at IP `192.168.1.19`.

## System requirements

This sandbox was tested with these system configurations:

* Operating system: Windows 10 Home, Ubuntu 20.04.4 LTS
* RAM needed: 9 GB
* Free disk space needed: 28 GB

This sandbox was tested with these software versions:

* VirtualBox: 6.1.32 r149290 (Qt5.6.2)
* Vagrant: 2.2.19 
* Ansible: 2.9.6, 2.10.8 

## Usage

1. Clone this repository locally. Install Vagrant, VirtualBox and Anisble.
2. Run `vagrant up` in the directory with this repository to instantiate the sandbox.
3. Access an attacker machine (Kali) via VirtualBox console. Log in as `kali` with `kali` as password.
4. In game_desing.md you'll find tasks, hits and solution. In props directory you'll find physical props used at hacking day in form of pictures.
5. Enjoy.

## Credits

[Cybersecurity Laboratory](https://cybersec.fi.muni.cz)\
Faculty of Informatics\
Masaryk University

**Leading authors:** Filip Hujer, Ondřej Ježek, David Rusnák, Jakub Kiska

**Contributors/Consultants:** Jan Vykopal, Valdemar Švábenský
