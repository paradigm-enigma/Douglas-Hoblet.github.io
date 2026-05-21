---
title: Amortized analysis
status: evergreen
course: "6.006"
tags: [algorithms, analysis]
updated: 2026-01-20
related: [rolling-hash, dynamic-array]
uses_mathjax: true
---

Analysis technique for data structures where the **average cost per operation**
over a sequence is what matters, not the worst case of any single op.

Three common methods, each a different lens on the same truth.

## 1. Aggregate method

Bound the total cost of \\(n\\) operations, then divide by \\(n\\).
Works well when a few expensive ops are diluted by many cheap ones.

**Example.** Dynamic array doubling: \\(n\\) appends cost \\(O(n)\\) total, so
amortized \\(O(1)\\) per append.

## 2. Accounting method

Assign a **fake cost** (credit) to each operation. Cheap ops store credit;
expensive ops spend it. If the bank account stays non-negative, the fake
cost is a valid amortized bound.

## 3. Potential method

Define a **potential function** \\(\Phi\\) on the data structure's state.
Amortized cost = real cost + \\(\Delta\Phi\\). Sum telescopes.

## When I reach for which

- **Aggregate** for the intuition check.
- **Accounting** when there's a natural "save up for the expensive op" pattern.
- **Potential** for proofs and for data structures where state summarises
  future cost (splay trees, Fibonacci heaps).

## Classic traps

1. Amortized ≠ average-case. It's worst-case over a sequence.
2. You can't amortize a single operation. The whole sequence gets the bound.

---

See also: [rolling hash](/garden/rolling-hash/) (amortized from dividing
the m-per-window cost across n positions).
