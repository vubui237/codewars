order = (str) => {
    let kat = [];
    let numbers = [1,2,3,4,5,6,7,8,9]
    kit = str.split(" ").map((x)=> numbers.map((y)=> x.includes(y) ? kat[y-1] = x : false))
    return kat.join(" ");
  }