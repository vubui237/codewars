function isOddHeavy(arr){
    console.log(arr);
      let even = [];
      let odd = [];
      let oddHeavy = true;
      arr.map((x)=> x%2===0 ? even.push(x) : odd.push(x))
      odd = odd.sort(function(a,b){ return a-b});
      even.map((x)=> x > odd[0] ? oddHeavy = false : 0)
      if(odd.length === 0) {
        return false;
      }
      return oddHeavy;
    }