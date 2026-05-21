---
title: "Newton's laws — the version I wrote for 8.01 office hours"
status: budding
course: "8.01"
tags: [physics, mechanics]
updated: 2025-10-10
---

I TA 8.01 office hours this term. This is the three-minute version I give
freshmen who say "I understand the formulas but I can't set up the problem."

## The three laws, translated

1. **Things don't change velocity on their own.** If velocity is changing,
   something is pushing. Find it.
2. **\\(F = ma\\) is a bookkeeping equation.** Left side: sum of forces.
   Right side: mass times acceleration. Do the accounting, don't "solve" it.
3. **Every push has a push-back.** Action–reaction pairs act on *different*
   objects. A classic 8.01 exam trap.

## The pset workflow

Every mechanics pset in 8.01 is the same five steps:

1. **Isolate** an object. Draw a free-body diagram just for it.
2. **Label** every force with a source ("gravity from Earth", "normal from ramp").
   No mystery forces.
3. **Choose axes** aligned with the acceleration, not with gravity.
4. **Write \\(F = ma\\)** in each axis separately.
5. **Solve** the resulting linear system.

If you get stuck, you almost certainly forgot a force in step 2.

## Things freshmen say that are wrong

- "Centrifugal force pushes outward." — Not in an inertial frame. In the
  lab frame there's only the **centripetal** component of real forces,
  pointing inward.
- "There's no friction because the surface is smooth." — Check the problem.
  "Smooth" in 8.01 means "frictionless"; "rough" means "coefficient given".
- "Tension is the weight." — Only if the system is in equilibrium. In general,
  tension comes out of the F=ma bookkeeping.

---

*Still a seedling. Want to add: normal forces, pulleys, and the
one weird trick with inclined planes.*
