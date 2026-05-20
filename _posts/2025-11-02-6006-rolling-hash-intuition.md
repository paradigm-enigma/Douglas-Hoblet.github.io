---
title: "Building intuition for rolling hashes (6.006)"
date: 2025-11-02
tags: [algorithms, "6.006", psets]
abstract: "Rolling hashes clicked for me only after I wrote them from scratch and deliberately broke them. Here's the version I wish 6.006 had shown me week 1."
---

We covered Rabin-Karp in lecture 8 of 6.006 this semester, and I walked out
feeling like I had memorized a formula instead of understanding an idea.
Here's what I wrote in my notebook that night after re-reading
[Erik's notes](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)
from a few angles.

## The problem

Find a pattern of length `m` in a text of length `n`. Naively, comparing the
pattern at every position is `O(nm)`. We'd love `O(n + m)`.

## The one idea

Compare **hashes** of substrings instead of the substrings themselves.
Hashing a fresh window each time is still `O(m)` per position, so that
bought us nothing. The trick: when the window slides by one character,
we don't recompute from scratch. We **update** the hash in `O(1)`.

```python
def rolling_hash(s, m, base=256, mod=10**9 + 7):
    h = 0
    for c in s[:m]:
        h = (h * base + ord(c)) % mod
    yield h
    power = pow(base, m - 1, mod)
    for i in range(m, len(s)):
        h = ((h - ord(s[i - m]) * power) * base + ord(s[i])) % mod
        yield h
```

Two things that stumped me for an embarrassingly long time:

1. **Why `base=256`?** Because we're hashing byte strings. Any base >= alphabet
   size works. 256 is just a reasonable default.
2. **Why modulo a prime?** To avoid collisions clustering. Any large prime
   works; `2**61 - 1` is a common pick for speed on 64-bit machines.

## The gotcha the pset will get you on

Rolling hashes are a **probabilistic** primitive. When two hashes match,
you still have to verify character-by-character. If you skip the verification
step because "collisions are rare", the autograder will find an adversarial
input that collides.

## Where this leads

Once you believe rolling hashes, a lot of problems get suddenly easier:
- **Longest duplicate substring** via binary search on length + hashing.
- **Rabin-Karp multi-pattern search** with a set of pattern hashes.
- The MIT [6.006 pset 6](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/assignments/)
  "profiling" question, which is basically this in a trench coat.

The evergreen version of this note lives in the garden:
[rolling-hash](/garden/rolling-hash/).
