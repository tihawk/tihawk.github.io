---
slug: using-stow-for-managing dotfiles
title: How I manage configuration files on my Linux machine using dotfiles and stow
description: Maintaining your dotfiles can be actually really simple, once you set it up in a good way. After a few attempts, I landed on stow, and I ain't going back!
authors: kiroki
tags: [Coding, Configuration, Productivity, Linux]
---

## Motivation

I've been trying to maintain a _dotfiles_ repository for a few years now. There, I keep configurations for all kinds of different tools and applications I keep on my development machines. It's great for maintainability and versioning, but maintaining and keeping the _dotfiles_ up to date can be a tedious task. But I've quite accidentally found a good and easy way to do it!

The three major options I've considered are:
- Setting up a home directory as a `--bare` git repository.
- [Symlinking](https://en.wikipedia.org/wiki/Symbolic_link) every configuration manually
- [_Stow_](https://linux.die.net/man/8/stow)

The first option of the runt, is of course - from a storytelling point, the first one to discard.

Setting up your entire home directory as a repository, you have to be careful with exactly what to track, and what not. Basically, you'd need a `.gitignore` file that you'd have to constantly update with everything _but_ the things you want to keep track of. It's very prone to accidentally adding something you don't want tracked, and forgetting to include it in the `.gitignore`. Plus, a giant git repo in my home directory isn't really to my taste.

Manual symlinking does solve those problems, but it can be quite complicated to automate and keep track of. _Stow_ is an abstraction on top of symlinks, that allows us to automate symlink management, and turn it into _package management_. Let's see how to set up your _dotfiles_ repo, in order to make use of _stow_.

## Setup

Before using _stow_, my config files were laid out in a very simple way. Basically, everything that was in the `$HOME/.config/` directory, was just copied into `$HOME/code/dotfiles/.config/`. Other configs that were just files or directories inside the `$HOME` directory, I just copied into the repo root `$HOME/code/dotfiles/` - for example from `$HOME/.bashrc` to `$HOME/code/dotfiles/.bashrc`.

```code title="~/code/dotfiles"
.
|-- .bashrc
|-- .config
|   |-- gtk-3.0
|   |   `-- [... files]
|   |-- i3
|   |   `-- [... files]
|   |-- nvim
|   |   |-- after
|   |   |   |-- ftplugin
|   |   |   |   `-- [... files]
|   |   |   `-- plugin
|   |   |       `-- [... files]
|   |   |-- init.lua
|   |   |-- lua
|   |   |   `-- kiroki
|   |   |       `-- [... files]
|   |   `-- plugin
|   |       `-- [... files]
|   `-- terminator
|       `-- [... files]
|-- i3blocks
|   `-- [... files]
`-- .local
    `-- share
        `-- fonts
            `-- [... files]
```

### How _stow_ likes it

_Stow_ works more like (or exactly like) a package manager. We have to think of each configuration we manage as a package. So, instead of having a bunch of configurations under the `.config` directory, like `$HOME/code/dotfiles/.config/i3` and `$HOME/code/dotfiles/.config/nvim`, we can split these into separate directories, in this example `$HOME/code/dotfiles/i3/.config/i3` and `$HOME/code/dotfiles/nvim/.config/nvim`.

We can name them however though, so it could be `$HOME/code/dotfiles/foo/.config/i3` for our i3 config.

And technically, if we want to be not-so-clever, we can just do something like `$HOME/code/dotfiles/my-dot-config-directory/.config/<everything like i3 and nvim>`. But the power of _stow_ is that we can stow and unstow each config like a package. This technically means, that we can also version our configs. For example, we could have one version of i3 for Arch under `$HOME/code/dotfiles/i3-arch/.config/i3`, and one for Ubuntu under `$HOME/code/dotfiles/i3-ubuntu/.config/i3`. Because of these reasons, I recommend this package structure.

For another example, the `.bashrc` file is typically right in the `$HOME` directory, so we can "package" it simply as `$HOME/code/dotfiles/bash/.bashrc`. I know, I know - who uses bash anymore... well, I do apparently :)

:::tip
_Stow_ is technically a *package manager*. To make full use of it, we can turn _every_ configuration we contain in our _dotfiles_ into a package, by placing it in its own directory.
:::

### How it is now

After we migrate to using _stow_, our repo structure now looks like this:

```code title="~/code/dotfiles"
.
|-- bash
|   `-- .bashrc
|-- fonts
|   `-- .local
|       `-- share
|           `-- fonts
|               `-- [... files]
|-- gtk-3.0
|   `-- .config
|       `-- gtk-3.0
|           `-- [... files]
|-- i3
|   `-- .config
|       `-- i3
|           `-- [... files]
|-- i3blocks
|   `-- i3blocks
|       `-- [... files]
|-- nvim
|   `-- .config
|       `-- nvim
|           |-- after
|           |   |-- ftplugin
|           |   |   `-- [... files]
|           |   `-- plugin
|           |       `-- [... files]
|           |-- init.lua
|           |-- lua
|           |   `-- kiroki
|           |       `-- [... files]
|           `-- plugin
|               `-- [... files]
|-- stow_config.sh
`-- terminator
    `-- .config
        `-- terminator
            `-- [... files]

```

## Usage

### Stowing

Well, great. So far, we've basically just moved some directories around. So, what now?

Well, now we can just run _stow_ for each of these newly created packages. The way that _stow_ works, is that it takes the directory inside of the "package" directory, and creates a symlink to it in the parent of the current working directory.

So, for example, if we now _cd_ into `$HOME/code/dotfiles/`, we can run `stow i3`. What this will do is, it will create a symlink to `$HOME/code/dotfiles/i3/.config/i3` in `$HOME/code/.config/`. That will look something like this:

```bash
lrwxrwxrwx  1 kblagoev kblagoev   30 Oct  6 23:14 i3 -> ../code/dotfiles/i3/.config/i3/
```

"But wait!", I hear you say. "Isn't this `i3` directory, or symlink, or whatever, supposed to be in our `$HOME` directory? What is it doing in `$HOME/code/`?".

You're absolutely right. Let's fix this. _Stow_ has a flag `-t`, or `--target`, with which we can specify the root of the package management. This target is by default the parent of the _pwd_, and that's why by running _stow_ inside of `$HOME/code/dotfiles/`, the symlinking occurred under `$HOME/code/` (and resulted in our symlink being `$HOME/code/.config/i3`. It can be a bit confusing to keep track of this, but yeah). So, instead, we want to target the `$HOME` directory. That's why we should run `stow -t $HOME i3` instead.

:::tip
If we don't place our _dotfiles_ repository in the `$HOME` directory, we have to target it when we use _stow_ by utilising the `-t` flag, e.g. `stow -t $HOME i3`.
:::

### Unstowing

Removing a config is super simple with _stow_ as well. Following our example with i3, we can simply run `stow -D -t $HOME i3`. The `-D` flag deletes the symlink, and our config is gone from the `$HOME/.config/` directory. And only that config!

## Additional note on Usage

There is a flag `--dotfiles`, which allows to rename hidden directories, such as `.whatever-the-name-is` to `dot-whatever-the-name-is`, and for them to be pre-processed by _stow_ by replacing `dot-` with `.`. This is useful, so there aren't hidden files and directories in the repo. Quite useful for easier searching that respects hidden files.

This is great and all, but in the latest version of _stow_ on Ubuntu there's a bug with that. The bug is fixed in the newest release of _stow_, but I will wait for it to get updated in _apt_, before migrating to that setting - just for availability reasons.

But if you're going to install the latest version of _stow_, do keep that option in your mind. It's pretty neat.

And lastly, for my own convenience, I've written a bash script which can stow and unstow all the packages inside my repo with one command. I've opted into having a manually updated list of the packages, just because I keep some other junk in the _dotfiles_ repo, but this can be changed. I will paste the script here, if you'd like to use it yourself (or a modified version of it).

```bash title="stow_config.sh"
#!/bin/bash

# Define an array of package names
packages=(
  "bash"
  "gtk-3.0"
  "i3"
  "i3blocks"
  "terminator"
  "nvim"
  "fonts"
)

# Check if the first argument is "remove" to use the -D flag
stow_flag="-t"
if [ "$1" == "remove" ]; then
  stow_flag="-D -t"
fi

# Loop through each package and run stow or unstow with -D
for package in "${packages[@]}"; do
  if [ "$1" == "remove" ]; then
    echo "Unstowing $package..."
  else
    echo "Stowing $package..."
  fi

  stow $stow_flag "$HOME" "$package"

  if [ $? -eq 0 ]; then
    if [ "$1" == "remove" ]; then
      echo "$package unstowed successfully."
    else
      echo "$package stowed successfully."
    fi
  else
    if [ "$1" == "remove" ]; then
      echo "Error unstowing $package."
    else
      echo "Error stowing $package."
    fi
  fi
done

echo "All done!"


```

Running `./stow_config.sh` will stow, and running `./stow_config.sh remove` will unstow the listed packages.

That's it! glhf

