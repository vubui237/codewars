Array.prototype.customConcat = function(kat) {
    let katIndex = this.length;
    let newArray = this;
    if(Array.isArray(kat)) {
      kat.map((x,i)=>newArray[i+katIndex] = x);
      return newArray;
    }
    else {
      newArray[this.length] = kat;
      return newArray;
    } 
  }