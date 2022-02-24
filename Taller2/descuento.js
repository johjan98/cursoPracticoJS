
function precioDescuento(P, D){
  const desc = (P*(100 - D))/100;

  return desc;
}

function calcularPrecio(){
  const cupones = ["Cupon_1", "Este es un cupón", "Otro cupón :3"];
  const price = document.getElementById("inputPrice").value;
  let discount = parseInt(document.getElementById("inputDiscount").value);
  const cup = document.getElementById("textoCupon").value;

  let valCupon = 0;

  switch (cup) {
    case cupones[0]:
      valCupon = 10;
      break;
    case cupones[1]:
      valCupon = 5;
      break;
    case cupones[2]:
      valCupon = 15;
      break;
    default:
      valCupon = 0;
      break;
  }

  discount += valCupon;
  const discountPrice = precioDescuento(price, discount);

  document.getElementById("resultPrice").innerText = "Precio con descuento: $" + discountPrice;
}