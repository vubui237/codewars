add = (x,y)=> y == 0 ? x : add(x^y, (x&y) << 1)
