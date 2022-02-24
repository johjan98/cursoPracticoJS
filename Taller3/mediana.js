
const lista1 = [100,253,689,690,-12,20];

function calcularMediana(lista){
  lista.sort();
  console.log("Lista ordenada: " + lista);
  const mitadLista = lista.length/2;

  if(lista1.length % 2 === 0){
    const elem1 = lista[parseInt(mitadLista)];
    const elem2 = lista[parseInt(mitadLista)-1];

    return (elem1 + elem2)/2;
  }else {
    return lista[parseInt(mitadLista)];
  }
}

console.log(calcularMediana(lista1));