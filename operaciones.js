function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function dividision(a, b) {
  if (b == 0) {
    return "No se puede dividir entre cero";
  } else {
    return a / b;
  }
}

exports.suma = suma;
/*
console.log(suma(5,4));
console.log(resta(5,4));
console.log(multiplicacion(5,4));
console.log(dividision(5,0));
*/
