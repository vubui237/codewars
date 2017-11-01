domainName = (s) => {
    let z = "";
    let x = s.replace(/https:|\/|http:|www./gi, "")
    for(let i = 0; i<x.length; i++) {
      if(x[i] === ".") {
        return z;
      }
      z+=x[i]
    }
  }