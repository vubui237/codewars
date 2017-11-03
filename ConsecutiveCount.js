getConsectiveItems = (a,b) => {
  let kit;
  let sCount = 0;
  let nCount = 0;
  if(typeof a === 'number') {
    kit = a.toString().split("");
  }
  if(typeof a === 'string') {
    kit = a.split("");
  }
  if(typeof b === 'number') {
    b.toString();
  }
  for(let i = 0; i<kit.length; i++) {
    if(kit[i] == b) {
      sCount+=1;
    }
    if(sCount > nCount) {
      nCount = sCount;
    }
    if(kit[i] != b) {
      sCount = 0;
    }
  }
  return nCount;
}
