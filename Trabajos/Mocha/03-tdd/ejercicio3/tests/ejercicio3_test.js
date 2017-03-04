
var assert = require('assert');
var calcular= require('../ejercicio3.js')

describe('idioma', function () {
  it("Mostrar el idioma en Ingles",function () {
    assert.equal(calcular.idioma("Hola Mundo","Ingles"),"Hello World")
  })
  it("Mostrar el idioma en Alemán", function(){
    assert.equal(calcular.idioma("Hola Mundo","Alemán"),"Hallo Welt")
  })
  it("Mostrar el idioma en español si no hay idioma",function(){
    assert.equal(calcular.idioma("Hola Mundo"),"Hola Mundo")
  })
  it("Si no hay ningun idioma  debe retornar Error",function () {
    assert.equal(calcular.idioma(),"Error")
  })
})
