function generateHashtag (str) {
    if(!str) {
        return false;
      }
      let kat = str.split(' ').map((x,i)=>x.split('').map((x,i)=> i === 0 ? x.toUpperCase() : x).join('')).join('');
      if(kat.length > 138) {
        return false;
      }
      return '#' + kat;
    }