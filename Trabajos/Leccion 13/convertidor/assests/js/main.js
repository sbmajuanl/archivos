function convertirCelsius(){
  var dato = document.getElementById('farenheit').value;
  document.getElementById("celsius").value = (dato * (9 / 5) + 32);
}
function convertirFarenheit(){
  var dato = document.getElementById("celsius").value;
  document.getElementById("farenheit").value = (dato - 32) * (5/9);
}
