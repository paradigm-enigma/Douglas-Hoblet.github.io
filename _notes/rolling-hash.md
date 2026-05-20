---
title: Rolling hash
status: budding
course: "6.006"
tags: [algorithms, hashing, strings]
updated: 2026-03-01
related: [amortized-analysis, hash-function-design]
---

A hash function over strings that can be **updated in O(1)** as the window
slides by one character. The workhorse behind Rabin-Karp and many contest
string algorithms.

## Core recurrence

For window of length `m`, base `b`, modulus `p`:

\\[
H(s_{i+1..i+m}) = \left(b \cdot \left(H(s_{i..i+m-1}) - s_i \cdot b^{m-1}\right) + s_{i+m}\right) \mod p
\\]

Precompute `b^{m-1} mod p` once. Each slide is O(1).

## Design choices

- **Base.** Any value ≥ alphabet size. 31, 257, or a random per-run base.
- **Modulus.** A large prime. `2^{61} - 1` is popular for speed on 64-bit machines.
- **Double hashing.** Two independent `(base, mod)` pairs kills most adversarial collisions.

## Gotchas

1. Match on hash → **always** verify with direct comparison. Hashes are probabilistic.
2. Randomize the base at startup to defeat adversaries who know your prime.
3. Python's built-in `hash()` is salted but *not* rolling — roll your own.

## Where I've used it

- 6.006 pset 6 (profiling signature matching).
- [Competitive programming problem](https://codeforces.com/) archive I keep at
  [/garden/cp-patterns/](/garden/cp-patterns/).

---

*Last tended: 2026-03-01. Still want to add a section on polynomial hashing
over fields.*
