---
title: "Snekoban solver with A* and pattern databases"
year: 2025
course: "6.1010"
summary: "Solves arbitrary Snekoban boards with A* search. Pattern-database heuristic makes it ~40× faster than uniform-cost on the lab's hardest test set."
stack: ["Python"]
repo: "https://github.com/your-github-username/snekoban"
demo: ""
---

## What it is

The final lab of 6.1010 asks you to solve [Snekoban](https://en.wikipedia.org/wiki/Sokoban),
a Sokoban variant. The baseline implementation uses BFS. This writeup covers the
A*-with-pattern-database version I ended up submitting.

## Why pattern databases

BFS works for small boards. On the staff's final test case (28 targets, ~10⁹ states),
BFS ran out of memory in 30 seconds. The bottleneck is the branching factor; a good
admissible heuristic prunes the search dramatically.

**Pattern database idea:** precompute, offline, the minimum number of pushes required
to solve sub-boards containing only a subset of the targets. At query time, sum the
lookups — still admissible, often much tighter than Manhattan distance.

## Implementation notes

- Serialized game state as a tuple of frozen sets so it's hashable and cheap to compare.
- Stored the pattern database as a dict keyed on canonical form.
- Used a binary heap with lazy deletion for the A* frontier.

## Results

| Heuristic | Avg. nodes expanded | Time (hardest test) |
|---|---|---|
| None (BFS) | 3.2M | 31.2 s |
| Manhattan | 980K | 9.1 s |
| Pattern DB | 78K | **0.8 s** |

## What I'd do differently

- Implement bidirectional search. Probably another 2–3× speedup.
- Parallelize the pattern-database precomputation; currently single-threaded.
