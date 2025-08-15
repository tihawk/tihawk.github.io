---
slug: boot-sector
title: boot sector
description: TODO Add description here
authors: kiroki
tags: [lowlevel,assembly]
---


# boot sector

The first 512 bytes of a bootable drive, which the BIOS can read into memory and
execute immediately after a [[power-on self-test|POST]] check.

Things to note about the boot sector:

- At this time, the CPU will operate in [[16-bit-real-mode]]. In NASM assembly,
  this can be signified with `[bits 16]`.

- The BIOS will load the boot sector onto RAM with offset `0x7C00`. This can be
  signified in NASM assembly as `[ORG 0x7c00]`.

- The boot sector must end on the magic number `0xaa55`.

# Example Boot Sector in NASM assembly

```asm
[bits 16]                   ; Work in 16-bit mode
[ORG 0x7C00]                ; Set memory offset for where BIOS will load this

loop:
    jmp loop                ; Endless loop

times 510-($-$$) db 0       ; Fill remainder of boot sector with zeroes
dw 0xAA55                   ; End with magic number
```
