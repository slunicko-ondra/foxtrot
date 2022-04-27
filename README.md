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

* Operating system: Windows 10 Home \<**TODO** to be added by each team member>
* RAM needed: 9 GB? <**TODO** to be added by the whole team; 5 GB by default>
* Free disk space needed: 80 GB? <**TODO** to be added by the whole team; 20 GB by default>

This sandbox was tested with these software versions:

* VirtualBox: 6.1.32 r149290 (Qt5.6.2) \<**TODO** to be added by each team member>
* Vagrant: 2.2.19 \<**TODO** to be added by each team member>
* Ansible: 2.10.8 \<**TODO** to be added by each team member>

## Usage

1. Clone this repository locally.
2. Run `vagrant up` in the directory with this repository to instantiate the sandbox.
3. Access Kali via VirtualBox console. Log in as `kali` with `kali` as password.
4. Enjoy.

## Credits

[Cybersecurity Laboratory](https://cybersec.fi.muni.cz)\
Faculty of Informatics\
Masaryk University

**Leading authors:** Filip Hujer, Ondřej Ježek, David Rusnák, Jakub Kiska

**Contributors/Consultants:** Jan Vykopal, Valdemar Švábenský
