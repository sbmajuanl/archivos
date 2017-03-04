function idioma(palabra,efa) {
  if(efa== undefined && palabra==undefined){
    return "Error";}
  else if (efa==undefined){
      return palabra
  }

  switch (efa) {
    case "Ingles":
          palabra="Hello World";
          break;
    case "Alemán":
          palabra= "Hallo Welt";
          break;
    default:
          palabra="Hola Mundo!";
  }
  return palabra;
}

if(typeof exports !== 'undefined') {
    exports.idioma = idioma;
}
