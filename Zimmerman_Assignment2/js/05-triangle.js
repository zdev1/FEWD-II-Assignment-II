/*eslint-env browser*/

function makeLine(length) {
var line = "";
    for (var j = 1; j <= length; j++) {
    line += "# ";
    }
    return line + "\n";
}

 function buildTriangle(length) {
 var space = "";   
  
  for(i=1;i<=length;i){

  space += makeLine(length--);
  }

  return space.split("").reverse().slice(1).join(""); 
  
}
console.log(buildTriangle(7));