whoEatsWho = (str) => {
    // console.log(str);
      let a = str.split(',')
      let final = [str];
      let eat = [['antelope','grass'], ['big-fish', 'little-fish'], ['bug', 'leaves'],['bear','big-fish'],['bear','bug'],['bear','chicken'],['bear','cow'],['bear','leaves'],['bear','sheep'],['chicken','bug'],['cow','grass'],['fox','chicken'],['fox','sheep'],['giraffe','leaves'],['lion','antelope'],['lion','cow'],['panda','leaves'],['sheep','grass']]
      for(let i = 0; i<a.length; i++) {
        for(let j = 0; j<eat.length; j++) {
            if(a[i] === eat[j][0] && a[i-1] === eat[j][1]) {
              a.splice(i-1,1);
              final.push(eat[j][0] + ' eats ' + eat[j][1])
              i = 0;
              j = 0;
            }
        }
        for(let k = 0; k<eat.length; k++) {
            if(a[i] === eat[k][0] && a[i+1] === eat[k][1]) {
                  a.splice(i+1,1)
                  final.push(eat[k][0] + ' eats ' + eat[k][1])
                  i = 0;
                  k = 0;
            }
        }
      }
      final.push(a.join(','));
      return final;
    }