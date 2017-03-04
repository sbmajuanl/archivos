function conversor(fahrenheit){

if(fahrenheit==undefined){
  return "Error";
}
return fahrenheit.map(function(elemento,c){
return Math.round((fahrenheit[c]-32)*(5/9));
});

}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.conversor = conversor;
}
