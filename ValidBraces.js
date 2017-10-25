function validBraces(braces){
    var par = 0;
    var brack = 0;
    var brace = 0;
    var a = braces;
      for(let i = 0; i<braces.length; i++) {
      if(braces[i] == "(") {
      par+=1;
      }
      if(braces[i] == ")") {
      par-=1;
      }
      if(braces[i] == "[") {
      brack+=1;
      }
      if(braces[i] == "]") {
      brack-=1;
      }
      if(braces[i] == "{") {
      brace+=1;
      }
      if(braces[i] == "}") {
      brace-=1;
      }
      if(brace == -1 || brack == -1 || par == -1) {
      return false;
      }
      }
      for(var i = 0; i<braces.length-1;i++) {
        if(a[i] + a[i+1] == "(]" || a[i] + a[i+1] == "(}" || a[i] + a[i+1] == "{)" || a[i] + a[i+1] == "{]" || a[i] + a[i+1] == "[)" || a[i] + a[i+1] == "[}") {
          return false;
        }
      }
      if(par == 0 && brace == 0 && brack == 0) {
        return true;
      }
      return false;
    }