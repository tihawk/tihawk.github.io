---
slug: bios-read-char-from-keyboard
title: bios-read-char-from-keyboard
description: TODO Add description here
authors: kiroki
tags: [lowlevel,assembly]
---


# bios-read-char-from-keyboard

# A simple routine to read char from keyboard using BIOS interrupt

```asm
; Function to read a character from the keyboard using BIOS interrupt 0x16
; Returns -> AL holds the read character
getch:
    mov ah, 0x00
    int 0x16
    ret
```

# Example usage

```asm
[BITS 16]
[ORG 0x7C00] ; BIOS loads the boot sector here

; Main loop
main:
    mov si, buffer ; Initialize pointer to the buffer
input_loop:
    ; Read a character from the keyboard
    call getch  ; The read character will be stored as a byte in the al register
    sub al, '0' ; Convert ASCII to numerical value
    cmp al, 7
    ja halt     ; If input is greater than '7', jump to halt CPU

    mov byte [si], al   ; Store numerical value into the buffer
    inc si              ; Move to the next byte in the program array
    jmp input_loop

%include "src/getch.asm"

halt:
    jmp halt

; Reserve the remaining space on the boot sector for the program we input
buffer: times 510-($-$$) db 0
; Boot sector magic number
dw 0xAA55
```
