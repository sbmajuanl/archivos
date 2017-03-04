var assert = require('assert');
var calcular = require('../ejercicio1.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('arreglos', function(){

  it('should return the sum of 2 array', function(){
    assert.deepEqual(calcular.arreglos ([2,3,4],[2,4,5]),[4,7,9])
  })

  it('should raise an error if the array param is missing', function(){
    assert.equal(calcular.arreglos(undefined,[2,4,5]),"Error")
  })

  it('should raise an error if the array param is missing', function(){
    assert.equal(calcular.arreglos(undefined,undefined),"Error")
  })

})
