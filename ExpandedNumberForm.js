expandedForm = (n) => {
    console.log(n)
      let x = n.toString().split("").length;
      let y = [];
      let z = 1 + '0'.repeat(x-1);
      let kitkats = "";
      while(n>=z) {
        y.push((Math.floor(n / z) * z))
        n -= (Math.floor(n / z) * z)
        x = n.toString().split("").length;
        z = 1 + '0'.repeat(x-1);
      }
      for(let i = 0; i<y.length-1; i++) {
        kitkats+=y[i] + " + "
      }
      kitkats+=y[y.length-1]
      return kitkats;
    }