---
slug: bios-read-from-disk
title: bios-read-from-disk
description: TODO Add description here
authors: kiroki
tags: [lowlevel,assembly]
---

# bios-read-from-disk

Date created: 2024-09-24

# Resources and links

[[os-development-lectures-pdf]]

# Example routine for reading from disk

```asm
; load DH sectors to ES:BX from drive DL
disk_load:
    push dx         ; Store DX on stack so later we can recall
                    ; how many sectors were request to be read ,
                    ; even if it is altered in the meantime
    mov ah, 0x02    ; BIOS read sector function
    mov al, dh      ; Read DH sectors
    mov ch, 0x00    ; Select cylinder 0
    mov dh, 0x00    ; Select head 0
    mov cl, 0x02    ; Start reading from second sector ( i.e.
                    ; after the boot sector )
    int 0x13        ; BIOS interrupt
    jc disk_error   ; Jump if error ( i.e. carry flag set )
    pop dx          ; Restore DX from the stack
    cmp dh, al      ; if AL ( sectors read ) != DH ( sectors expected )
    jne disk_error  ; display error message
    ret

disk_error:
    mov bx, DISK_ERROR_MSG
    call print_string
    jmp $

; Variables
DISK_ERROR_MSG db "Disk read error !", 0
```

# Example usage

```asm
[ORG 0x7c00]

mov [BOOT_DRIVE], dl    ; BIOS stores our boot drive in DL, so it's best to
                        ; remember this for later

mov bp, 0x8000         ; Set stack safely out of the way
mov sp, bp

mov bx, 0x9000          ; Load 5 sectors to 0 x0000 (ES ):0 x9000 (BX)
mov dh, 5               ;   from the boot disk
mov dl, [BOOT_DRIVE]
call disk_load

mov ax, [0x9000]
call print_hex_word

mov ax, [0x9000 + 512]
call print_hex_word

jmp $

%include "src/disk_load.asm"
%include "src/print_hex_word.asm"

BOOT_DRIVE: db 0;

times 510-($-$$) db 0
dw 0xAA55

times 256 dw 0xdada     ; We read this and the next sectors from this disk.
times 256 dw 0xface
```
