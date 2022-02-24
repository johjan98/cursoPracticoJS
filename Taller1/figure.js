
function perimetroCuadrado(){
  const longLado = document.getElementById("ladoCuadrado").value;
  const perim = longLado*4;

  alert(perim);
}

function areaCuadrado(){
  const longLado = document.getElementById("ladoCuadrado").value;
  const area = longLado**2;

  alert(area);
}

function perimetroTriangulo(){
  const longLados = document.getElementById("lados").value;
  const longBase = document.getElementById("base").value;

  const perim = parseInt(longLados) + parseInt(longLados) + parseInt(longBase);

  alert(perim);
}

function areaTriangulo(){
  const base = document.getElementById("base").value;
  const altura = document.getElementById("altura").value;

  const area = base * altura / 2;

  alert(area);
}

function perimetroCirculo(){
  const radio = document.getElementById("radio").value;

  const perim = Math.PI * radio * 2;

  alert(perim);
}

function areaCirculo(){
  const radio = document.getElementById("radio").value;

  const area = Math.PI * (radio**2);

  alert(area);
}