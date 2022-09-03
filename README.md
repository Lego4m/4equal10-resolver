# 4=10 Solver

A simple solver for the puzzles of [4=10](https://play.google.com/store/apps/details?id=app.fourequalsten.fourequalsten_app).

## The math behind the algorithm

The game gives us four fixed numbers, the possibility to use three of four basic operations (+ - * /) and two parenthesis. Putting it on math we arrived at the following results:

* **24** unique possibilities of numbers combinations: $4 * 3 * 2 * 1$;
* **64** possibilities of operations combinations: $4^3$;
* **6** possibilities of parenthesis uses.
* * $X + X - X * X$;
* * $(X + X) - X * X$;
* * $X + (X - X) * X$;
* * $X + X - (X * X)$.
* * $(X + X - X) * X$;
* * $X + (X - X * X)$;

In total the algorithm creates **9.216** combinations and compare which of them equals to 10.

It's good to remember that if you choose repeated numbers, the possible combinations decreases.

## But... The purpose of the game is not to be a puzzle?

Yes. I'm giving the answers away (even though in the game has the possibility of seeing one answer per day), but this project made me think about it for two days and i'm glad that i successfully applied math to the algorithms.

## Ok, ok. Where can i access the solver?

The solver can be accessed [here](https://lego4m.github.io/4=10-solver).
