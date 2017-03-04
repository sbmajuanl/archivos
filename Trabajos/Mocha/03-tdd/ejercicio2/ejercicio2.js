var assert = require('assert');
var calcular = require('../ejercicio2.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('conversor', function(){


  it('should raise an error if the array param is missing', function(){
    assert.equal(calcular.conversor(undefined),"Error")
  })

})
