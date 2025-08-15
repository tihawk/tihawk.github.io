---
slug: vim-remap-commands-lua
title: vim-remap-commands-lua
description: TODO Add description here
authors: kiroki
tags: [vim,lua]
---

# vim-remap-commands-lua

Date created: 2024-09-27

# Remap nvim commands in lua

```lua
vim.cmd('command NewCommandMap ExistingCommand')
```

User-defined commands need to start with a capital letter.
