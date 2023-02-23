---
slug: key-mission-cyberapocalypse-2021-ctf
title: Key Mission - Cyberapocalypse 2021 CTF
description: This is a writeup for the Key Mission challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Forensics.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Key Mission challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Forensics.

### Prompt

The secretary of earth defense has been kidnapped. We have sent our elite team on the enemy's base to find his location. Our team only managed to intercept this traffic. Your mission is to retrieve secretary's hidden location.

<!-- truncate -->

### Recon

We're supplied with a Wireshark `.pcap` file, which seems to be filled with packets coming from an USB interface.

```
No.	Time	Source	Destination	Protocol	Length	Info
1151	244.436586	3.2.1	host	USB	72	URB_INTERRUPT in
1152	244.436609	host	3.2.1	USB	64	URB_INTERRUPT in
```

We're particularly interested in the ones coming from Source `3.2.1`, since they hold additional data in the form of 8 more bytes at the end of the packet data:

```
0000   c0 46 bd 04 55 8c ff ff 43 01 81 02 03 00 2d 00   ÀF½.U.ÿÿC.....-.
0010   72 22 7f 60 00 00 00 00 d7 4c 0b 00 00 00 00 00   r".`....×L......
0020   08 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00   ................
0030   01 00 00 00 00 00 00 00 04 02 00 00 00 00 00 00   ................
0040   02 00 2d 00 00 00 00 00                           ..-.....
```

In particular, we will be interested in the bytes which are 8th and 6th counting from the end, in this case `02` and `2d` respectively.

### Analysis

From the name of the challenge, we can assume that we will be analysing a keyboard being used for typing. If we scroll around the packets in Wireshark, we will notice that the one byte which always changes is the 6th one from the end.

If we look up keyboard mappings, we will find [this cool documentation](https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf) online for Usage tables of Human interface devices, which holds information on which byte codes mean what. For example, we can find that our `2d` byte from above means the symbol `-` (hyphen) or underscore `_`.

This is where we come at a difficulty, because even though we have information that the shift key is supposedly sent as byte `E1`, this is not how it's used in our pcap file.

Initially I ignored this, and got a flag which didn't get accepted. It brought me to some frustration, but I kept digging until I found [this repo](https://github.com/TeamRocketIst/ctf-usb-keyboard-parser) on GitHub, in which the creator handled the _shift_ key in another way.

Namely, he took the `0x40`-th byte (or 8th counting from the end) from the packet data, and if it was a `02` or a `20`, that would mean that the (left or right) shift key is pressed.

At this point, we can just use that script, and get our flag, but I wanted to do it with my own script, which was 95% working at this point.

### Solution

Applying everything we learned, we can go ahead and

1. Take the mappings from the pdf documentation, and create a dictionary of hex -> key value pairs.
2. Write a script which loads the `pcap` file, using `scapy` for example.
3. Read the 6th and 8th bytes counting from the end of each packet data.
4. Use the 8th byte to detect `Shift` presses.
5. Use the 6th byte to determine the symbol being typed.
6. String it all together (we can also handle backspace by removing the last element from our string).

```python
#!/usr/bin/env python3

from scapy.all import *
import sys

mapping_shift = {
  0x02: '<Shift>',
  0x20: '<RShift>'
}

mapping = {
  0x00: ["", ""],
  0x01: ["ErrorRollOver", "ErrorRollOver"],
  0x02: ["POSTFail9", "POSTFail9"],
  0x03: ["ErrorUndefined", "ErrorUndefined"],
  0x04: ["a", "A"],
  0x05: ["b", "B"],
  0x06: ["c", "C"],
  0x07: ["d", "D"],
  0x08: ["e", "E"],
  0x09: ["f", "F"],
  0x0A: ["g", "G"],
  0x0B: ["h", "H"],
  0x0C: ["i", "I"],
  0x0D: ["j", "J"],
  0x0E: ["k", "K"],
  0x0F: ["l", "L"],
  0x10: ["m", "M"],
  0x11: ["n", "N"],
  0x12: ["o", "O"],
  0x13: ["p", "P"],
  0x14: ["q", "Q"],
  0x15: ["r", "R"],
  0x16: ["s", "S"],
  0x17: ["t", "T"],
  0x18: ["u", "U"],
  0x19: ["v", "V"],
  0x1A: ["w", "W"],
  0x1B: ["x", "X"],
  0x1C: ["y", "Y"],
  0x1D: ["z", "Z"],
  0x1E: ["1", "!"],
  0x1F: ["2", "@"],
  0x20: ["3", "#"],
  0x21: ["4", "$"],
  0x22: ["5", "%"],
  0x23: ["6", "^"],
  0x24: ["7", "&"],
  0x25: ["8", "*"],
  0x26: ["9", "("],
  0x27: ["0", ")"],
  0x28: ["Return", "Return"],
  0x29: ["ESCAPE", "ESCAPE"],
  0x2A: ["<BACKSPACE>", "<BACKSPACE>"],
  0x2B: ["Tab", "Tab"],
  0x2C: [" ", " "],
  # 0x2C: "Spacebar",
  0x2D: ["-", "_"],
  0x2E: ["=", "+"],
  0x2F: ["[", "{"],
  0x30: ["]", "}"],
  0x31: ["\\", "|"],
  0x32: ["Non-US"],
  0x33: [";", ":"],
  0x34: ["‘", "\""],
  0x35: ["Grave"],
  0x36: [",", "<"],
  0x37: [".", ">"],
  0x38: ["/", "?"]
  # [OMITTED REST OF CODES FOR BREVITY]
}

try:
  packets = rdpcap(sys.argv[1])
  print(packets)
except:
  print('needs a pcap file supplied')
  exit(-1)

result = ''
for packet in packets:
  shift_byte = packet[0].load[-8]
  shift_key = 0

  if shift_byte in mapping_shift:
    shift_key = 1

  normal_byte = packet[0].load[-6]
  stringed = mapping[normal_byte][shift_key]

  if stringed == mapping[0x2A][0]:
    # if backspace, remove one
    result = result[:-1]
  else:
    result += stringed

print(result)
```

And, with this we can get the message being sent by our secret agent:

```
python3 get_flag.py key_mission.pcap 
WARNING: PcapReader: unknown LL type [220]/[0xdc]. Using Raw packets
<key_mission.pcap: TCP:0 UDP:0 ICMP:0 Other:1192>
I am sending secretary‘s location over this totally encrypted channel to make sure no one else will be able to read it except of us. This information is confidential and must not be shared with anyone else. The secretary‘s hidden location is CHTB{a_plac3_fAr_fAr_away_fr0m_earth}
```

With the flag now in plain sight

```
CHTB{a_plac3_fAr_fAr_away_fr0m_earth}
```