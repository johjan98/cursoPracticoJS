
const salariosCol = colombia.map(
  function (person){
    return person.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB){
    return salaryA - salaryB;
  }
);

function medianaSalarios (lista){
  const mitadLista = parseInt(lista.length / 2);

  if (lista.length % 2 == 0) {
    const elem1 = lista[mitadLista];
    const elem2 = lista[mitadLista - 1];

    return (elem1+elem2)/2;
  }else {
    return lista[mitadLista];
  }
};

const medianaGenerlCol = medianaSalarios(salariosColSorted);

//---------------------


const spliceInit = salariosColSorted.length * 0.9;
const spliceFinish = salariosColSorted.length - spliceInit;

const salariosColTop10 = salariosColSorted.splice(spliceInit, spliceFinish);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(medianaGenerlCol, medianaTop10Col, salariosColTop10);