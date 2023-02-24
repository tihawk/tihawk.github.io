---
slug: quantum-programming-abstraction-level-2-algorithms
title: "Quantum Programming - Abstraction level 2: State Machine and Algorithms"
description: After we get an intuition about phase kickback, we start getting into actual Computer Science, through building a State Machine, and recreating an actual Quantum Algorithm.
authors: kiroki
tags: [Science, Physics, Computing, Quantum, Programming, Computer Science]
toc_min_heading_level: 2
toc_max_heading_level: 4
---

1. [Quantum Programming by abstracting ourselves from Quantum Mechanics: Abstraction level 0](/blog/quantum-programming-abstraction-level-0/)
2. [Quantum Programming - Abstraction level 1: Logic Gates](/blog/quantum-programming-abstraction-level-1-logic-gates/)
3. [Quantum Programming - Abstraction level 2: State Machine and Algorithms](/blog/quantum-programming-abstraction-level-2-algorithms/) (this)

We have been on quite the adventure so far. Let's recap our progress.

* We've shown that by encoding information onto n qubits in superposition, we can manipulate the whole system of 2n states by only changing the state of one qubit.
* We represented the state of each qubit as a simple 2D vector.
* We've established that we can change the state of a single qubit (or two) by applying different logic gates to it, similarly to a classical logic gate.
* We can now visualise the superposed state of the qubit (indeed of the whole system) on the Bloch sphere.
* We know how to entangle two qubits, so that their states are correlated.

Now the time has come to start putting it all together. Wouldn't it be nice to actually string some gates together, and see what happens? 

Well, in order to see what happens, we might want to be able to visualise the flow of our qubits' states, so we can see how each gate manipulates each qubit at each step.

## Unit circle State machine

<!-- truncate -->

If you remember, I spent quite a bit of time in the last post trying to simplify the Bloch sphere into a circle. To some of you, it might have seemed a meaningless exercise; after all a sphere isn't that much more complicated to visualise than a circle. But, here's where it becomes somewhat more meaningful. I present to you the _unit cicle state machine_:

![Unit circle state machine](/content/images/2021/04/unit-circle.svg)

Now we can place all of our states from the "Bloch circle" into a unit circle of... well, states. I think that in this particular case a circle is much more manageable than a sphere, especially since you may note that we have twice as many states as in the Bloch circle. For example, we now have not only a (1 0) state, but also (-1 0).

 _These are the states we described previously as having different **phase**_. Or in fact, even more of them, since if you remember, in the Bloch circle we already had the state $[1/\sqrt{2} \quad -1/\sqrt{2}]$, which was the same as  $[1/\sqrt{2} \quad 1/\sqrt{2}]$, but with a different phase.

These states which are differentiated by only a phase will still have the same probabily distribution. And as long as we talk only about singular qubits, they are **equivalent to one another**. But as we will see soon, the phase becomes very important once we have more than 1 qubits in our system.

With that aside, let's concentrate on our new powerful tool. With it, we can easily describe **how each gate acts on each state**. For example, let's map the X-Gate and the Hadamard Gate onto their respective circles:

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2021/03/unit-circle-x-gate.svg" class="kg-image" alt loading="lazy" width="800" height="800"/><figcaption>Possible state changes by applying the X gate.</figcaption></figure>

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2021/03/unit-circle-h-gate.svg" class="kg-image" alt loading="lazy" width="800" height="800"/><figcaption>Possible state changes by applying the Hadamard gate.</figcaption></figure>

As our quantum gates are reversible by definition, we can go backwards and fowrads in the circle, without ever losing information about the previous state.

## The Quantum Circuit

Now we have the tools and knowledge necessary to start putting gates together. The collection of the qubits in our register, plus the combination of the gates we apply to them we can call a **quantum circuit**.

By defining our state machine, we can visualise the programatic flow of our system. We can start by creating a simple quantum circuit of 1 qubit and a few gates applied to it.

![Programmatic flow](/content/images/2021/04/unit-circle-stringing-gates-1.svg)

So with our state machine we were able to determine that, after applying the gates to the qubit, it will turn into a $\ket{0}$ with probability $(-1)^2=1$. But what is it with that minus sign?

As we discussed before, $[-1 \quad 0]$ and $[1 \quad 0]$ are states that differ by a certain **phase** with respect to each-other. Since we have only one qubit in our system, we can say that these two states differ by a **global phase**. That type of phase has no significance in our system.

But if there are multiple qubits in our system, and they have different phases w.r.t. each-other, then we say that it's their **relative phase**[^1] which is different[^2].

> Relative phase is actually a property of the system, i.e. systems with different relative phase are physically different systems.

### Phase kickback

Remember what we said about applying the **CNOT** gate to a pair of qubits whose probability distribution is 50/50? We figured out, that instead of the control bit changing the target bit, the target bit flipped the control bit.

|input $\ket{control,target}$ | output $\ket{control,target}$ |
|--|--|
|$\ket{++}$ | $\ket{++}$ |
|<span style={{color: 'red'}}>$\ket{+-}$</span> | <span style={{color: 'red'}}>$\ket{--}$</span> |
|$\ket{-+}$ | $\ket{-+}$ |
|<span style={{color: 'red'}}>$\ket{--}$</span> | <span style={{color: 'red'}}>$\ket{+-}$</span> |

But ultimately that change didn't alter the probability of those qubits. Both of them still have 50% probability of collapsing to either 1 or 0. What changed was their _relative phase_. 

In fact what happened is, that **the phase of the target bit got applied to the already existing phase of the control bit**. We can easily see the logic of this by simply following the signs of the states in the table above.

When the target bit had a phase of "+", it did nothing to change the phase of the control bit, since

$$
(\text{control phase}\times\text{target phase}) =  +1\times+1 = +1
$$

and

$$
-1 \times +1 = -1 \text{,}
$$

so the phase remained unchanged (see black rows). But once the target bit had a phase of "-", its effects became noticable (see red rows), e.g.

$$
-1 \times -1 = +1 \text{.}
$$

> This application of the phase from the target bit onto the phase of the control bit is what we call phase kickback.

Although not an algorithm, phase kickback is an important tool in quantum computing. It allows us for example to keep track of the phase of another qubit, to copy the phase so to speak. This mechanism of copying the phase of one qubit onto another is often used in different algorithms.

So, let's visualise this phase kickback in our state machine.

<figure class="kg-card kg-image-card kg-width-wide kg-card-hascaption"><img src="/content/images/2021/04/unit-circle-phase-kickback.svg" class="kg-image" alt loading="lazy" width="2000" height="1100"/><figcaption>The CNOT applies the mixed-state relative phase of the target bit onto the pure-state relative phase of the control bit, ultimately copying the phase from q1 onto q0. After applying final Hadamard gates, the system proceeds to collapse onto the definite state 11.</figcaption></figure>

Let's break this up, and explain our intent. 

* At first we applied a X-Gate to the target bit _q1_.

The idea here is that by applying the Hadamard gate onto a qubit of state 1, we will put it into superposition _with a negative phase_.

* In contrast, our control _q0_ bit got transfered to superposition from the 0 state, hence giving it positive phase.

This was the preparation for our experiment. The next step is the bulk of our work.

* By applying the CNOT gate on our control and target bits, we did what we set out to do - apply the phase of the target bit _q1_ onto the control bit's phase.

And since the phase of _q0_ was plus, the effect ultimately was to simply copy the phase from _q1_ to _q0_. This is exactly what happens on the second row of our table above.

|input $\ket{control,target}$ | output $\ket{control,target}$|
|--|--|
|$ \ket{+-}$ | $\ket{--}$ |

* Then we applied the Hadamard gate on both qubits again, transfering them from their 50/50 probability back to a definite state (remember, gates are reversible, so Hadamard had the opposite effect now).

And that's it, we have demonstrated the critical property of quantum computing named _phase kickback_.

## Algorithms

Algorithms are constructs which have a certain goal. They exist to solve a problem, often in a field outside of computer science itself. In fact, algorithms are often developed before machines capable of running them even exist.

Algorithms are often the first real step in computing, in which we can really abstract ourselves from physical reality, and start applying a more programatic mindset.

Furthermore, this is a level of abstraction, in which we can define black boxes, and in those boxes processes can happen without us caring about the details, and we can only see the result of the function (and maybe the input).

As such, in quantum programming there exist highly contrived problems, which can be solved using our qubits. I will show you an over-used such example, which incidentally, we have been naturally building to. Let's talk about

### Deutsch's Algorithm

This, like I said, is truly an entry level algorithm. It's usually the first one shown in any book or course on the subject, and one might think it's simply because it's easy to show. In reality though, it has two main characteristics which make it important to know regardless of its simplicity or how contrived it is:

* It shows that even using _reversible_ gates, we can still apply _irreversible_ functions to our qubits. This way we strenghten the connection between quantum and classical computing.
* It's the simplest algorithm, which can undeniably show that there exist problems for which quantum computing is intrinsically faster than classical computing - where faster is defined as needing less steps to complete.

But even though those things are true, I don't want to concentrate on them right now. Our goal is simply to connect the pieces we've collected so far into a single stream, and apply it to an easy to grasp problem.

#### The problem

There is a function $f$ which takes as input 0 or 1, and gives as output 0 or 1.

So this function has 4 possible configurations:

* Both 0 and 1 as input are mapped to 1 as output
* Both 0 and 1 as input are mapped to 0 as output
* The input is unchanged, so 0 to 0 and 1 to 1
* The input is flipped, so 0 to 1 and 1 to 0

![Configurations](/content/images/2021/04/constant-balanced.svg)

We will call the first 2 functions "constant" (i.e. it doesn't matter what we input, the output is the same), and the second 2 "balanced".

> The problem therefore is: if we put this function in a **black box**, determine which of the two variants - constant or balanced, is inside the black box.

#### Recreating the function with gates

Let's program! Yeah, we now we have simple logical requirements, that we have to represent using a language we learned. Isn't this exciting?

Anyway, we have an immediate problem to deal with. Note, that the constant functions are irreversible. We can't know the input from the output. As I said, I don't intent to explain the reasoning behind this, but:

> If we normaly need to pass one bit into any of the 4 functions, we will need 2 qubits to do the same with reversible gates only. That is, in addition to the input of the function, we need to pass an empty (zero) qubit onto which to write the output of the function.  We will call this empty bit the **spare**.

With that in mind, lets recreate the four function configurations.

![function configurations](/content/images/2021/04/four-functions-2.svg)

#### The algorithm

Well, I reckon let's first define it as if we knew what was going on, after which we just go step by step using our unit circle state machine, and see what happens. I claim, that the algorithm below will spit out $\ket{11}$ if the **black box** contains a constant function (from the list above), and if it is a balanced function, the output will be $\ket{01}$.

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2021/04/algorithm-1.svg" class="kg-image" alt loading="lazy" width="800" height="200"/><figcaption>The Deutsch algorithm. BB stands for "black box", where our function gets executed. M stands for measurement - that's where we collapse the wavefunction of our system of qubits.</figcaption></figure>

#### Preprocessing

First, we take a look at the initial preparation of the qubits, the negation and the Hadamard initialisation

![preprocessing](/content/images/2021/04/preprocessing-1.svg)

Nothing surprising so far. So now let's see how each of the black box functions changes the output.

#### Constant 0

We defined our constant-0 function as doing nothing. So we do nothing, after which we apply the second Hadamard gate and collapse the wavefunction with a measurement gate.

![constant zero](/content/images/2021/04/constant-0-1.svg)

And the result is indeed $\ket{11}$. Great! We got one. Onto the next one.

#### Constant 1

We defined constant-1 as flipping the spare bit. Once again, we apply the Hadamard gate after that, before measuring the system.

![cosntant one](/content/images/2021/04/constant-1.svg)

And we once again get  $\ket{11}$! (Remember, $-1^2=1$ probability of getting a 1) Awesome, halfway there.

#### Identity

This is where we apply our knowledge of phase kickback. The CNOT gate acts exactly like we defined in our example in the section above. See how our knowledge accumulates?

![identity](/content/images/2021/04/identity-1.svg)

And the result is indeed, as we predicted, $\ket{01}$.

#### Negation

Last one! Is it going to be the dealbreaker? I hope not. Remember, all that is different from the identity, is that we have an X-Gate acting on the Spare bit after the CNOT has done its phase kickback magic.

![negation](/content/images/2021/04/negation.svg)

So rather unsurprisingly, it worked! It is indeed $\ket{01}$, as we would expect from a balanced function!

We were able to identify any and all of the 4 functions with a single pass!

Incidentally, a classical computer would need 2 passes for any of these functions to identify it as either a constant or a balanced function. Try proving it yourself, it takes an if-else statement to do it.

So, with this we've seen our very first quantum computing algorithm at work! And with the tools and knowledge we've developed, this is only the beginning!

Algorithms are indeed the first big leap towards higher levels of abstraction. My hopes are, that with the tools we shown here, you have developed a level of intuition to think about the existing algorithms, and the curiosity to try them out.

Who knows, with time you might get so entrenched in the idea, that you stumble upon an unexplored corner of the field of quantum programming, and create something of your own.

Meanwhile I intent to continue with my exploration of the world of quantum programming, and hopefully write something more on the subject as I go along.

Thanks for reading!

[^1]: In contrast to global phase, which is the case when all qubits in the system have the same phase, such that it can be factored out from the observation calculation. Systems with a global phase are physically identical, while systems with relative phase are not. They might still be measured the same way in most cases, but this is simply because measurement in quantum computers usually takes place along the same axis, independent of phase.

[^2]: In Quantum Information, it can be said that this relative phase carries information about the **coherence** of the system.

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>