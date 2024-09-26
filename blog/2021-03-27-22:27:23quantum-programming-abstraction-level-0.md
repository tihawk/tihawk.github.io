---
slug: quantum-programming-abstraction-level-0
title: "Quantum Programming by abstracting ourselves from Quantum Mechanics: Abstraction level 0"
description: Just as we know that in classical computers we manipulate logical zeroes and ones, we can get an idea of what we are dealing with in the lowest level of logic in a quantum computer.
authors: kiroki
tags: [Science, Physics, Computing, Quantum, Programming, Computer Science]
---

1. [Quantum Programming by abstracting ourselves from Quantum Mechanics: Abstraction level 0](/blog/quantum-programming-abstraction-level-0/) (this)
2. [Quantum Programming - Abstraction level 1: Logic Gates](/blog/quantum-programming-abstraction-level-1-logic-gates/)
3. [Quantum Programming - Abstraction level 2: State Machine and Algorithms](/blog/quantum-programming-abstraction-level-2-algorithms/)

The invention of the personal computer, and the further development of the [hundreds](https://en.wikipedia.org/wiki/List_of_programming_languages) of programming languages which utilise it has allowed us programmers to completely **abstract** ourselves from the world of electrons flowing through solid matter, and further from the low level programming of turning gates and transistors on and off to produce binary data.

<!-- truncate -->

And this seems to be the way we as a technological society operate. We like to build abstractions on top of abstractions, until we can communicate with our machines in an as humanly a way as we find easy, and still practical.

As solving problems on a quantum machine becomes more of a practical reality, we will be able to start using the terms _applied_ and _quantum mechanics_ in the same context. This would be a time, in which we would be able to abstract ourselves from the _how and why_ of quantum mechanics, and simply utilise its weirdness in real world applications.

But just as we know that in classical computers ultimately it all comes down to ones and zeroes being flipped around in a memory grid, we have to have an idea of what we are dealing with in the lowest level of logic in a quantum computer. What are our basic logical constructs allowing us to build and manipulate data, when it comes to quantum computing.

## Parallels to classical computers
### Qubits vs bits

We have to establish a logic timeline here. In classical computers we have certain steps with which we make a calculation. Let's concentrate on two in particular.

1. We manipulate a bit's value. We can either flip its value from $0$ to $1$ or from $1$ to $0$, or keep it as it is.
2. Now we can measure the bit's value. We will now observe whether it's a $1$ or a $0$.

We can also note that, after measuring it, the bit continues being whatever it was before we observed its value, the act of measuring did nothing to change that.

It stands to reason, that if we kept track of what's going on, we would already know whether the bit was a 1 or a 0 before even measuring it. As we will see in a second though,

> In the majority of cases, we will have no way of knowing a quantum bit's value before measuring it.

### Qubits

The qubits can also be in the state of 1 or 0, but they can also be in both states at the same time. And when they are in this so called superposition, the states of 0 and 1 are associated with a probability - that is if you take a qubit and measure it, it will choose whether to appear as a 0 or a 1 depending on that probability[^1].

This is important to note - a qubit can hold onto its superposition only as long as it's not being measured. The moment its value is being extracted, the wavefunction defining its probability collapses, and it randomly chooses to be a 0 or a 1 according to its probability before the collapse.

Another point to make here, is that we can manipulate the bits in such a way, that the probability is 100% for it being either 1 or a 0. This way, we can use a quantum computer basically the same way as we would use a classical one. But we would also lose one of the advantages of a quantum computer - utilising the quantum weirdness brought by superposition (and later entanglement).

### Clumping the qubits together

Let's consider now that we have many more than one bits in our memory bank. Let's say we have 3! Let's put their possible values of 1 and 0 in a table of all possible states of the system

| state | q2 | q1 | q0 |
|--|---|---|---|
|1 | 0 | 0 | 0 |
|2 | 0 | 0 | 1 |
|3 | 0 | 1 | 0 |
|4 | 0 | 1 | 1 |
|5 | 1 | 0 | 0 |
|6 | 1 | 0 | 1 |
|7 | 1 | 1 | 0 |
|8 | 1 | 1 | 1 |

We can now observe, that there are 8 states in this system of 3 bits. With 4 bits you get 16 states, with 8 - 256, and so on growing exponentially, such that the number of states is equal to 2 to the power of number of bits. In other words, for each bit added, the number of states doubles.

$$
n_{states} = 2^{m_{bits}}
$$

This is no different to holding information in a grid of bits. The difference comes when we try to access those states to manipulate or measure them. When a computer does operations on a state, it loads it into a register. In a single CPU inside a classical computer, a single state can be loaded into the register and manipulated. What's interesting is that the quantum register as such stores all $2^n$ possible states at the same time, and can simultaniously change all of them by changing a single qubit's probability distribution.

Let's expand a bit on that. Imagine the quantum register as a simple physical grid of qubits, each qubit containing information about its probability of collapsing into either a 1 or a 0. If we take the probabilities of all qubits, we can easily calculate the probability of each of the system states that we listed above appearing when we collapse the whole register. For example, assuming that all 3 qubits have a 50/50 chance of collapsing into a 1 or a 0, we would see that all states have equal probability as well, and we know that the probabilities should add up to 1:

|probability | q2 | q1 | q0 |
|------|---|---|---|
|12.5% | 0 | 0 | 0 |
|12.5% | 0 | 0 | 1 |
|12.5% | 0 | 1 | 0 |
|12.5% | 0 | 1 | 1 |
|12.5% | 1 | 0 | 0 |
|12.5% | 1 | 0 | 1 |
|12.5% | 1 | 1 | 0 |
|12.5% | 1 | 1 | 1 |

So we can redefine the information held inside a quantum register as the list of probabilities for every single state occurring when we observe the system. As this list is the same length as the list of all possible states, the quantum register holds information equal to $2^{\text{number of bits}}$. The catch of course is, that when we measure the system, it collapses to one of the states, and then we have information equal to the number of bits.

But before we measure the system,

> if we change the probability of just one qubit, we change the probability distribution of all states immediately.

Let's say that we change the probability of q2 to be such that it has a 100% chance of being a 0. Then we get

|probability | q2 | q1 | q0 |
|------|---|---|---|
|25% | 0 | 0 | 0 |
|25% | 0 | 0 | 1 |
|25% | 0 | 1 | 0 |
|25% | 0 | 1 | 1 |
|0% | 1 | 0 | 0 |
|0% | 1 | 0 | 1 |
|0% | 1 | 1 | 0 |
|0% | 1 | 1 | 1 |

In other words, all states in which q2 is 1 are impossible, and the other 4 states have equal probability.

The next issue is that when we collapse the system, we will get one of the above states. We still don't know what the probabilities are, we just know that one of the states are possible. But,

> if we collapse the system multiple times, after setting up the qubits the same way every time, we will get statstical information about the probability of each state occurring.

### Logic Gates

So, in order to change the probability of each state occurring, we need to manipulate the probability of each qubit. In a classical computer, in order to manipulate a bit we use [logic gates](https://en.wikipedia.org/wiki/Logic_gate)  such as NOT, SET1, SET0 and IDENTITY for single bits, and AND, OR, XOR, etc. for two bits.[^2]

In an analagous way, we have logical gates in the quantum world. Some of them are for operating on one qubit, some of them for two, and you can have ones operating on three. There are many logical gates that can be defined for qubits, and really as long as one obeys the mathematical constraints of QM, the possibilities are endless. But thankfully, [it's been proven](https://en.wikipedia.org/wiki/Solovay%E2%80%93Kitaev_theorem), that any operation on a quantum computer can be effectively reduced to a finite number of gates, so that we can define a small enough **instruction set** with which we can manipulate the qubits into any probability that we require.

## Quil - a Quantum Instruction Language

We have now reached our first level of abstraction in quantum programming - the instruction set. We can now basically define an [assembly-like](https://en.wikipedia.org/wiki/Assembly_language) language to write code in for quantum computers. Let's have a technical definition of this abstraction, before finishing this post. I want to concentrate on the actual gates in a separate post, as this will become too unwieldy otherwise.

### QAM - Quantum Abstract Machine

This is an abstract representation of a general-purpose quantum computing device (a quantum computer). Notably, QAM defines manipulation techniques for both classical and quantum states. This means that we will have both qubits to work with, and classical bits to store observation data in. As such QAM is specified by a list of elements:

* The number of qubits
* A number of classical bits (e.g. for storing the collapsed states of the qubits)
* A list of gates to manipulate the qubits with
* A sequence of instructions specifying the quantum instruction language
* An integer counter indicating the position of the next instruction to execute

With this, we are now free to define gates and assembly-like instructions, with which to manipulate the probabilities of single or multiple qubits, ultimately changing the probability distribution of the states of the qubit circuit. In the next post we get into defining the Bloch sphere, and a list of gates that operate on it - reaching [abstraction level 1](https://kblagoev.com/blog/quantum-programming-abstraction-level-1-logic-gates/).

[^1]: Mind you, there's nothing magical about that statement, it's just a fact of nature that we can't experience in the macroscopic world - any elementary particle left to its own accords will stay in a superposition of all of its possible states, until it's acted upon (observed), at which point its wavefunction which holds information about the probability of all its states collapses, and the particle chooses one of those possible states at random.
[^2]: Without going into much detail I want to point out some facts: 1. Classical computer gates are mostly irreversible, meaning that after the application of a gate, you can't figure out what the original input was. Quantum ones are all required to be reversible due to the physics of QM. 2. Quantum gates are represented by unitary matrices. Extremely useful. In fact I will probably write a second version of all of this, from the point of view of linear algebra, because it's so satisfying to look at.

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>
