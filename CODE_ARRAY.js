function ordenaArray(array) {
  var n = array.length;
  for (var i = 0; i < n-1; i++) {
    for (var j = 0; j < n-i-1; j++) {
      if (array[j] > array[j+1]) {
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

var numeros = prompt("Digite uma lista de números separados por vírgula:");

numeros = numeros.split(",");
numeros = numeros.map(function(x){ return parseInt(x); });

var numerosOrdenados = ordenaArray(numeros);

alert("Os números ordenados são: " + numerosOrdenados.join(", "));
