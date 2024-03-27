# Algorithme de reconciliation

-   tableaux
    -   prev [a, b, c, d, e, f, g]
    -   next [c, d, f, g, e, h, i]
    -   map next reversed index

# Analyse

<< in | >> out

a != c & a >> next (delete) p=1 n=0
b != c & b >> next (delete) p=2 n=0
c == c & c << next (static) p=3 n=1 (ignore)
d == d & d << next (static) p=4 n=2 (ignore)
v
prev [a, b, c, d, e, f, g]
v
next [c, d, g, f, e, h, i]

e != g & e << next (move 5) move > index p=5 n=2 (avoir un hidden index pour calculer la différence)
v
prev [a, b, c, d, e, f, g]
v
next [c, d, g, f, e, h, i]

f != g & f << next (move 6) move > index p=6 n=2
v--max = create all
prev [a, b, c, d, e, f, g]
v v
next [c, d, g, X, X, h, i]

g == g & c << next (static) p=3 n=1 (ignore)
