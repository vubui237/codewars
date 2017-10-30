function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let oldcar = startPriceOld;
    let newcar = startPriceNew;
    let money = 0;
    let loss = percentLossByMonth;
    let count  = 0;
    
    while((money+oldcar) < newcar) {
      if(count%2!==0) {
        loss+=0.5;
      }
         money+=savingperMonth;
      oldcar = oldcar - oldcar*loss*.01;
      newcar = newcar - newcar*loss*.01;
      count++
      console.log(oldcar,money,newcar)
    }
    return [count, Math.round(money+oldcar - newcar)];
    
  }