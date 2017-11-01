function groupByCommas(x) {
    x = x.toString().split("")
    let baller = false;
    if(x.length%3 === 0) {
      baller = true;
    }
    let arr = [];
    let count = 0;
    if(x.length<=3) {
      return x.join("").toString();
    }
    for(let i = x.length-1; i>=0; i--) {
      count++;
      if(count===3) {
        arr.push(x[i])
        arr.push(',');
        count = 0;
      }
      else {
        arr.push(x[i]);
      }
    }
    if(baller === true) {
    return arr.reverse().splice(1,arr.length-1).join("");
    }
    return arr.reverse().join("").toString();
  }