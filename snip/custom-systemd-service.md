---
slug: custom-systemd-service
title: How to create custom systemd services
description: Shebangs, or interpreter directives have been around since the '80s. They help select interpreters for the little scripts we write. But I realised I've never really looked into why am I writing this magic line of nonsense in the beginning of scripts. And of course, what are its limitations and/or weird associated behaviours we can make use of?
authors: kiroki
tags: [linux, devops]
---

## Description

Directly from [the systemd documentation](https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html)

> A unit configuration file whose name ends in ".service" encodes information about a process controlled and supervised by systemd.

Below is an example of how I'd set one up

## Go wild here


```systemd title="some.service"
[Unit]
Description=Some service template
After=network.target    # Means "start when network ready".
                        # Can be replaced with the name of some other service
                        # to wait for.
StartLimitIntervalSec=0

[Service]
Type=simple     # One of simple, exec, forking, oneshot, dbus, notify,
                # notify-reload, or idle.
Restart=always  # One of always, on-failure, on-success, on-abnormal,
                # on-watchdog, on-abort.
RestartSec=1    # Time to sleep before attempting a restart.
User=kblagoev   # User to run service under.
ExecStart=/usr/bin/env node /path/to/server.js # The actual command to run.

[Install]
WantedBy=multi-user.target
```

To make use of it:

```shell-session
$ cp <some.service> /etc/systemd/system/<some.service>
$ systemctl start <some.service>
$ systemctl enable <some.service> # This will ensure automatic start on boot
```

# Notes

### Restart limit

By default, `systemd` gives up restarting the service if it fails to start more than 5 times within 10 seconds. This is defined in the following variables

```systemd
[Unit]
StartLimitBurst=5
StartLimitIntervalSec=10
```

This is avoided by setting `StartLimitIntervalSec=0`. This will assure systemd attempts restarting forever. The idea is that, as long as `StartLimitIntervalSec` is less than `RestartSec * StartLimitBurst`, the service will be restarted indefinitely.

As an alternative, you can leave the default settings, and ask systemd to restart your service if the start limit is reached, using `StartLimitAction=reboot`.

### Limited automatic restart with a valid StartLimitIntervalSec

To have a service restart 3 times at 90 second intervals include the following lines in your systemd service file:

```systemd
[Unit]
StartLimitIntervalSec=400
StartLimitBurst=3
[Service]
Restart=always
RestartSec=90
```

