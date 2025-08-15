---
slug: systemd-custom-service-template
title: systemd-custom-service-template
description: TODO Add description here
authors: kiroki
tags: [linux,devops]
---

# systemd-custom-service-template

Date created: 2024-10-10

# Resources and links

[https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html](https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html)

# Go wild here

```systemd title="some.service"
[Unit]
Description=Some service template
After=network.target    # Means "start when network ready".
                        # Can be replaced with the name of some other service to wait for.
StartLimitIntervalSec=0

[Service]
Type=simple     # One of simple, exec, forking, oneshot, dbus, notify, notify-reload, or idle.
Restart=always  # One of always, on-failure, on-success, on-abnormal, on-watchdog, on-abort.
RestartSec=1    # Time to sleep before attempting a restart.
User=kblagoev   # User to run service under.
ExecStart=/usr/bin/env php /path/to/server.php # The actual command to run.

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

## Restart limit

By default, `systemd` gives up restarting the service if it fails to start more
than 5 times within 10 seconds. This is defined in the following variables

```shell-session
[Unit]
StartLimitBurst=5
StartLimitIntervalSec=10
```

This is avoided by setting `StartLimitIntervalSec=0`. This will assure systemd
attempts restarting forever. The idea is that, as long as
`StartLimitIntervalSec` is less than `RestartSec * StartLimitBurst`, the service
will be restarted indefinitely.

As an alternative, you can leave the default settings, and ask systemd to
restart your service if the start limit is reached, using
`StartLimitAction=reboot`.

## Limited automatic restart with a valid StartLimitIntervalSec

[https://serverfault.com/questions/736624/systemd-service-automatic-restart-after-startlimitinterval](https://serverfault.com/questions/736624/systemd-service-automatic-restart-after-startlimitinterval)

To have a service restart 3 times at 90 second intervals include the following
lines in your systemd service file:

```shell-session
[Unit]
StartLimitIntervalSec=400
StartLimitBurst=3
[Service]
Restart=always
RestartSec=90
```
