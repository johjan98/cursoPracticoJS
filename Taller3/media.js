
const lista1 = [100, 200, 300, 1000];

function calcularMedia(lista){
  
  /*let sumaTotal = 0;
  for(let i=0;i< lista.length; i++){
    sumaTotal += lista[i];
  }*/

  let sumaTotal = lista.reduce(
    function (valorAcumulado = 0, elementoNuevo){
      return valorAcumulado + elementoNuevo;
    }
  );
  
  sumaTotal /= lista.length;

  return sumaTotal;
}

console.log(calcularMedia(lista1));