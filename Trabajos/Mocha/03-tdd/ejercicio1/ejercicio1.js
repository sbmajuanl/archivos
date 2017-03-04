function arreglos (a,b) {
  var ab=[];

  if(a==undefined ||  b==undefined){
    return "Error";
  }
  for(var i=0;i<a.length;i++){
    ab.push(a[i]+b[i]);
  }
  return ab;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.arreglos = arreglos;
}
