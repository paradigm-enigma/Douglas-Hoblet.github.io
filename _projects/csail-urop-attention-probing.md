---
title: "Probing attention heads for syntactic structure"
year: 2026
course: "UROP @ CSAIL"
summary: "First-semester UROP: trained linear probes on mid-layer attention heads of a small transformer to detect dependency-parse edges. Presented preliminary results at a lab meeting."
stack: ["Python", "PyTorch", "spaCy"]
repo: ""
---

## Context

UROP in Prof. Y's interpretability group. The lab studies how much syntactic
information individual components of a transformer "know" — a question older
than transformers themselves but freshly interesting now that we can probe
a 6B-parameter model on a laptop GPU.

## What I did

- Extracted per-head attention patterns from GPT-2-small on a 5k-sentence dev set.
- Trained linear probes to predict whether a head's attention from token \\(i\\)
  to token \\(j\\) corresponds to a gold dependency-parse edge.
- Compared probe accuracy across layers, heads, and relation types.

## Preliminary finding

A handful of heads in layers 5–7 achieve >78% accuracy on specific relation
types (nsubj, amod) — well above the majority-class baseline of 12%.
Other heads are essentially random. Consistent with prior work
(Clark et al. 2019) but cleaner than I expected on a 2024-era training run.

## What I learned

More than any single technical result: **how to keep a research notebook**,
**how to structure a weekly 1:1**, and **how to say "I don't know yet" instead
of BS'ing in a group meeting**. See also my post:
[Five things I wish I knew before my first UROP]({{ '/urop-first-semester-lessons/' | relative_url }}).

## Next steps

- Control for probe capacity (current probe is linear; even random features
  can hit ~30% with enough parameters).
- Extend to longer-range relations.
- Write this up for a workshop by end of spring.
