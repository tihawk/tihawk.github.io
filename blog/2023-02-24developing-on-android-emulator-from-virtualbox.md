---
slug: developing-on-android-emulator-from-virtualbox
title: How to connect to an Android Emulator from VirtualBox
description: Developing from a VM is great, but there's a problem when you have to run an emulator inside of it. My solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.
authors: kiroki
tags: [Coding, Programming, VMs, Android]
---

## Motivation

If you're like me, you try and keep all of your coding-based clutter on a virtual machine. Which usually works great. You can maintain a clean OS, separate work from pleasure, and quickly return to a snapshot if something goes terribly wrong. But when I tried doing development for Android from a virtual machine, I quickly arrived at an unexpected hurdle.

If you try and run [Android Studio](https://developer.android.com/studio)'s emulators, you'll quickly be reminded that you can't simply run a virtual machine inside a virtual machine. You technically can, if you enable _Nested VT-x/AMD-V_, but even if you succeed navigating the hell of starting an AVD android emulator from inside your VM, you'd be met by the huge performance hit of running nested virtualisation.

You can instead consider running either the [Genymotion emulator](https://www.genymotion.com/) or [Xamarin Android Player](https://xamarin.com/android-player), which both use Oracle's [VirtualBox](https://www.virtualbox.org/) to run their emulators. But instead of running them inside your VM (and being met with the issue of nested virtualisation), you can run these emulators on your host OS. Since both of these use VirtualBox, **you can take full use of the networking aspect of VMs to connect your development VM to your Android emulator VM!**

:::note
Hence, my solution is to have two separate virtual machines running in VirtualBox on the host OS, and let them communicate using networking.
:::

## Setup

I'm assuming you've already 
1. Downloaded and installed VirtualBox
2. Set up a development VM inside of VirtualBox
3. Connected your dev VM to the outside world using either _NAT_ or **Bridged** networking (I personally use bridged, since it helps me to easier access any web dev instances running in the VM)

### Creating a virtual device

Alrighty, now we can download and install either [Genymotion emulator](https://www.genymotion.com/) or [Xamarin Android Player](https://xamarin.com/android-player) on your host OS.

After you've done that, you can start up your software, and set up a virtual device (phone) by following the instructions.

![created virtual device](/content/images/2023/02/genymotion-devices.png)

Now we need to do some configuration work inside VirtualBox.

### Configuring the virtual mobile device

If you open up VirtualBox, you'll see that the newly created virtual mobile device is listed in the list of machines.

![list virtual devices](/content/images/2023/02/virtualbox-list.png)

We need to edit the network settings for the mobile device. It will need two adapters. One is to connect to the network of the development machine (NAT or Bridged). In my case the machines are in a bridged network, which makes it easier to access from the host OS, as well as between each-other.

:::tip
For some development platforms like React-Native, it's important that both the dev machine and mobile device are on the same network to allow easy debugging.
:::

![mobile bridged adapter](/content/images/2023/02/virtualbox-network-1.png)

The other, arguably more important adapter to add/enable is the **Host-only Adapter**. This is the one [adb](https://developer.android.com/studio/command-line/adb) will connect over.

![mobile host-only adapter](/content/images/2023/02/virtualbox-network-2.png)

**Make note of the adapter _name_ here!**

VirtualBox has the habit of creating multiple host-only adapters, so this name is very important to make note of.

### Configuring the development VM

Now that we have set the mobile device settings up, we need to mirror them in the develpment VM. If you've used NAT for the mobile device, redo the settings in the development one. If you've put it into a bridged network, do the same to the dev VM.

After this, we need to add a _Host-only Adapter_ to the dev VM. Did you take note of the Adapter name from the mobile machine? This is where you use it!

![dev machine host-only adapter](/content/images/2023/02/virtualbox-network-3.png)

### Starting up the machines

Normally, you just start them from their respective applications. Start the mobile machine from Xamarin or Genymotion, and start your dev VM from VirtualBox.

But I've found that if I start the mobile machine from Genymotion, it tends to reset the Host-only Adapter name, add a new one, and fail to start. So, if this happens to you, this is what I do:

1. Start the mobile machine from VirtualBox. A command-line terminal will pop up, and will start loading.
2. When it appears that the terminal isn't doing anything anymore, you can safely start the mobile device from Genymotion.

![mobile device ready to be started from genymotion](/content/images/2023/02/genymotion-starting.png)

This is how my terminal looks when it stops loading. At this stage, I start the device from Genymotion as normal.

If you haven't already, you can now start your development VM as well.

### Connecting to the mobile device

In this scenario, we are going to use `adb` to connect to the mobile device from the dev VM. All we need is the IP that the device is running on. Both Genymotion and Xamarin provide some way to see the IP.

![genymotion shows ip](/content/images/2023/02/adb-ip-1.png)

But if you're having trouble to find it, you can go to VirtualBox, and see the IP from the terminal we saw earlier.

![virtualbox shows ip](/content/images/2023/02/adb-ip-2.png)

So, now we can easily connect from our dev VM using the command-line tool `adb`

```bash
kblagoev@deva:~/Android/Sdk/platform-tools$ ./adb connect 192.168.68.101
* daemon not running; starting now at tcp:5037
* daemon started successfully
connected to 192.168.68.101:5555
kblagoev@deva:~/Android/Sdk/platform-tools$ 
```

## Success!

And since I've used a bridged network, I can also easily do network connections between the two devices, which can be quite useful in some cases. So I recommend it, unless you have your own way of doing it.

Now you can develop! Have fun!
