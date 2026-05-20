---
title: "SVD: the geometric intuition I wish I had in 18.06"
status: evergreen
course: "18.06"
tags: [linear-algebra, matrices]
updated: 2025-12-14
related: [pca, eigendecomposition]
uses_mathjax: true
---

Every matrix `A` is three things in sequence: **rotate, stretch, rotate**.

\\[
A = U \Sigma V^\top
\\]

- \\(V^\top\\): rotate the input so its "natural" axes align.
- \\(\Sigma\\): stretch each axis independently by a non-negative amount.
- \\(U\\): rotate into the output space.

That's the entire SVD. Everything else is corollaries.

## Why this decomposition exists

Because \\(A^\top A\\) is symmetric positive semi-definite, it has an
orthonormal eigenbasis (spectral theorem). Its eigenvectors are the columns
of \\(V\\); the square roots of its eigenvalues are the singular values
on the diagonal of \\(\Sigma\\); and \\(U\\) falls out of \\(AV = U\Sigma\\).

## What the pieces tell you

| Piece | What it encodes |
|---|---|
| Singular values | How much \\(A\\) stretches each principal direction |
| \\(V\\) columns | Input directions of pure stretching |
| \\(U\\) columns | Output directions of pure stretching |
| Rank of \\(A\\) | Number of non-zero singular values |

## Corollaries that feel magical

- **Best low-rank approximation** (Eckart-Young): keep the top-k singular
  triples and you minimize Frobenius error. This is the guts of PCA.
- **Pseudo-inverse** is free: \\(A^+ = V \Sigma^+ U^\top\\) where
  \\(\Sigma^+\\) inverts the non-zero singular values.
- **Condition number** is just \\(\sigma_{\max} / \sigma_{\min}\\).

## The 18.06 test-day tip

If a problem asks you about "the action of \\(A\\) on the unit sphere",
the answer is always: it's an ellipsoid whose semi-axis lengths are the
singular values and whose axes are the columns of \\(U\\).

---

*Prof. Strang's [18.06 videos](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
explain this better than I ever will; this note is mostly to keep the picture
in my head.*
