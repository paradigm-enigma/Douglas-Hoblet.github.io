---
title: Reading a research paper in an hour
status: evergreen
tags: [research, meta, urop]
updated: 2026-01-05
---

The method my UROP mentor taught me on day three. Adapted from
Keshav's "[How to Read a Paper](https://web.stanford.edu/class/cs224w/readings/keshav-paper-reading.pdf)".

## Three passes

### Pass 1 — 10 minutes: "should I care?"

Read only:
- Title, abstract, intro.
- Section headings.
- Conclusion.
- References list (skim).

Write a single sentence: **what problem does this paper claim to solve,
and for whom?** If you can't, either read it once more or drop it.

### Pass 2 — 30 minutes: "what did they do?"

Read the body, but:
- **Skip all proofs.** Circle the theorem statements.
- **Study every figure and table.** Figures are the paper's thesis in disguise.
- **Mark unfamiliar terms** instead of chasing them down.

At the end, you should be able to explain the method to a classmate at lunch.

### Pass 3 — only if it matters: "could I reproduce this?"

Re-implement the core idea in pseudocode.
Challenge every assumption.
This pass is the one that actually teaches you something, and it's the one
I used to skip.

## A trick I picked up

Keep a "paper log" — one line per paper, three columns:
**what I read**, **one sentence summary**, **does this matter for what I'm doing?**.
Mine's a git-tracked Markdown file; 400 entries in and it's the single
most useful document I own.
