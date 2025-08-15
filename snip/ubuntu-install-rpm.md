---
slug: ubuntu-install-rpm
title: ubuntu-install-rpm
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# ubuntu-install-rpm

Date created: 2024-10-06

# Description

Ubuntu supports `.deb` packages for installation. This allows to convert `.rpm`
packages into `.deb`, and install them on Ubuntu.

# Go wild here

```shell-session
sudo add-apt-repository universe #Add the Universe Repository
sudo apt-get update
sudo apt-get install alien  #Install Alien package
sudo alien <name of package>.rpm   #Convert .rpm package to .deb
sudo dpkg -i <name of package>.deb #Install the Converted Package
```

Or directly install `.rpm` with alien:

```shell-session
sudo alien -i <name of package>.rpm    #Install RPM Package Directly Onto the System on Ubuntu
```

