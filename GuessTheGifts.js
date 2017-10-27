guessGifts = (wish, have) => {
    let kitkats = [];
    for(let i = 0; i<wish.length; i++) {
      for(let j = 0; j<have.length; j++) {
        if(wish[i].size === have[j].size && wish[i].clatters === have[j].clatters && wish[i].weight === have[j].weight) {
        kitkats.push(wish[i].name)
        }
      }
    }
    for(let k = 0; k<kitkats.length-1; k++) {
      if(kitkats[k] === kitkats[k+1]) {
        kitkats.splice(k,1)
      }
    }
    return kitkats;
  }