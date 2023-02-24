---
slug: on-approximating-irrational-numbers-as-fractions-algorithms
title: On approximating irrational numbers as fractions (algorithms)
description: Rational numbers are easy. But they are far outnumbered by irrationals. These beasts of infinitely-long decimal expansions take the vast majority of the infinity of real numbers. But we can't compute their exact values, so we use the next best thing - an approximation.
authors: kiroki
tags: [Coding, Maths]
---

Rational numbers are easy. They include the integers, with which you can count up and down the number line, as well as fractions - written as the division of two integers or as a finitely-long decimal expansion.

But there aren't that many rational numbers on the real number line, as there are irrationals. These beasts of infinitely-long decimal expansions take the vast majority of the infinity of real numbers. They can't be written as a fraction, and they can't be written exactly as a decimal expansion (it would be infinitely long).

<!-- truncate -->

But the irrational numbers are far from being exotic beings or a small curiosity within mathematics. We use them in everyday life. The example that is on everyone's lips is $\pi$, but there are many others that are very often used, like $e$ and $\sqrt{2}$ to name a couple.

In order to be able to address these numbers, we've devised names for a few of them, like the above. We can address them, but in calculations we have to use their value. But we can't hope to ever compute the exact values of these numbers, so we use the next best thing - an approximation accurate within an agreed upon error.

Of course the magnitude of the error matters for different scenarios, like for example if you do your physics homework you might be OK with $\pi=3.14$, but that might not be enough for calculating [the fundamental physical constants, or how to stabilise your spacecraft](https://blogs.scientificamerican.com/observations/how-much-pi-do-you-need/). Although, probably in no practical scenario would you agree that [$\pi=3.2$](https://en.wikipedia.org/wiki/Indiana_Pi_Bill).

"OK", you rightfully say - "but what if I need to remember $\pi$ to 60+ significant digits for writing my own maths library in my favourite programming language? That seems like a pain!" And you would be right (contrived example is contrived). It is a pain, even if [people seem to do it for fun](https://www.livescience.com/50134-pi-day-memory-experts.html). That's where fractional approximations come in. You could remember either $3.142$ or $\frac{22}{7}$. Or you could remember  $3.141593$ or $\frac{355}{113}$. As you go up in accuracy, fractions become more and more practical.

So, ideally, you nod in agreement, and start thinking more about it. After a while you might start having doubts whether every irrational can be approximated practically enough by a fraction. After all $\frac{31415}{10000}=3.1415$, but that's not particularly easy or practical to use or remember. What if the majority of irrationals can only be approximated like that.

Well, thankfully there exists a theorem by [Dirichlet](http://www-history.mcs.st-and.ac.uk/Biographies/Dirichlet.html) which states that for every irrational number, there exist infinitely many fractions that approximate the number evermore closely. Specifically, the error of each fraction is no more than 1 divided by the square of the denominator. So the fraction $\frac{22}{7}$, for example, approximates $\pi$ to within $\frac{1}{7^2}$, or $\frac{1}{49}$. Dirichlet proved that there is an infinite number of fractions that draw closer and closer to $\pi$ as the denominator of the fraction increases.

Fine. But how are we supposed to find these fractions that are so good at approximating a given irrational number? Also, ideally it wouldn't involve the pain that is [calculating continued fraction expansions](https://blogs.scientificamerican.com/roots-of-unity/don-8217-t-recite-digits-to-celebrate-pi-recite-its-continued-fraction-instead/). Well thankfully we have this [brilliant collection of theorems and algorithms](https://arxiv.org/ftp/arxiv/papers/1807/1807.06284.pdf) provided by Jean-Louis Sikorav.

This paper provides us with useful theorems and algorithms for calculating fractional approximations by using the concept of the distance between an irrational number and its nearest integer. It's a very straightforward method, the caveat of which is that we need to a priori have a decent decimal-expanded approximation of the irrational number we're trying to approximate. Which isn't really a problem actually. What we're trying to do is to find a fractional approximation, so supposedly we know what we're trying to approximate.

By providing us with three different algorithms for finding the same thing, the paper allows us to find the best approximation by confirming it with three methods, and the relationship between their best results.

Here we will have a look at the first algorithm, and leave the rest as an exercise for now. This algorithm will give us the Best Rational Approximation of an Irrational Number of the 1-st kind (BRAIN I).

> 1) Let $N$ be a strictly positive integer. The following algorithm determine  BRAIN I$(\alpha,k_0)$, where $k_0$ is the largest integer such that $q_{k_0} \leq N$ among the irreducible fractions $\frac{[q_k\alpha]}{q_k}$ minimizing $\frac{||q_k\alpha||}{q_k}$ with $1\leq q_k\leq N$:

where:

 * $[\alpha]$ known as the Gauss square bracket is the nearest integer to    $\alpha$, which is acquired in Javascript by `Math.round()`.
 
 * $||\alpha||$ is the distance between $\alpha$ and the nearest integer,    such that $||\alpha|| = |\alpha - [\alpha]|$, or `Math.abs(Math.round(a) - a)`.

> - For each integer $q,1\leq q\leq N$, compute $[q_k\alpha]$ and $\frac{||q_k\alpha||}{q_k}$ . Sort the $N$ terms $\frac{||q_k\alpha||}{q_k}$  in ascending order and among the fraction(s) minimizing $\frac{||q_k\alpha||}{q_k}$  , retain the one having the smallest denominator $q_{k_0}$ : BRAIN I$ ( \alpha , k_0 ) = \frac{[ q_{k_0}\alpha ]}{q_{k_0}}$. In other words:

```js
function gcd (x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        const t = y;
        y = x % y;
        x = t;
    }
    return x;
}

const qs = []
for (let i = 1; i <= 1000; i++) {
    qs.push(i)
}
const table = []

for (const q of qs) {
    const obj = {}
    obj.q = q
    obj.gaussQPi = Math.round(q * Math.PI)
    obj.distQPiOverQ = Math.abs(q * Math.PI - obj.gaussQPi) / q
    obj.gcd = gcd(obj.gaussQPi, q)
    obj.enumerator = obj.gaussQPi / obj.gcd
    obj.denominator = q / obj.gcd
    table.push(obj)
}
    
table.sort((a, b) => a.distQPiOverQ - b.distQPiOverQ)
```

> The determination of $\frac{||N\alpha||}{N}$ requires the knowledge of an approximation of $\alpha$ with an accuracy of about $\frac{1}{N}$ , and therefore with a number of digits proportional to $\log N$. This in turn implies that computation of the product $N\alpha$ grows with the square of $\log N$ and that the time needed to run the complete algorithm is proportional to $N(\log N)^2$ . Indeed, in order to use this algorithm, we need to already know our irrational number to a satisfactory level of accuracy. For this experiment we used the  Math.PI value in Javascript, which is more than accurate enough for our purposes. In fact, we would get the same answers for the value of $3.142$. Here are the top 10 results we get, sorted in descending accuracy. The fractions are reduced to their irreducible versions.

|   q   |	[q𝛼]    |	\|\|q𝛼\|\|/q     |	fraction      |
|-------|-----------|---------------|---------------|
|   565 |   1775    |	2.66764e-7  |   355 / 113   |
|   113 |   355	    |   2.66764e-7  |   355 / 113   |
|   226 |   710	    |   2.66764e-7  |   355 / 113   |
|   452 |   1420    |	2.66764e-7  |   355 / 113   |
|   904 |   2840    |	2.66764e-7  |   355 / 113   |
|   791 |   2485    |	2.66764e-7  |   355 / 113   |
|   339 |   1065    |	2.66764e-7  |   355 / 113   |
|   678 |   2130    |	2.66764e-7  |   355 / 113   |
|   897 |   2818    |	9.59896e-6  |   2818 / 897  |
|   911 |   2862    |	9.98088e-6  |   2862 / 911  |

And indeed, the most accurate fraction of $355/113$ is well a known relatively accurate approximation of $\pi$ such that $\pi \approx \boldsymbol{3.141592}92...$.

This is a very elegant and simple way to find a fractional approximation given an irrational number. The remaining two algorithms are very similar, such that they use the same variables, but treat them differently. The concept is the same, so I will leave them for now, and you can check them out in the above mentioned paper, which you can find [here](https://arxiv.org/ftp/arxiv/papers/1807/1807.06284.pdf).

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>