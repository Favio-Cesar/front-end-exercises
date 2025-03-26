/* 1 Cambie el nombre de la funcion ya que devuelve un string, no es un condicional.
2 encambio el if encapsulado de otro if es horrible.
3 he intentado aplicar el early return 

 */
function SacarSiEsExtranjero(user) {
  if ((user.nationality == "España") | (user.age != "30")) {
    return "No es apto para la ayuda del gobierno";
  }

  return "No es apto para la ayuda del gobierno";
}

const user = {
  age: 30,
  nationality: "Morocco",
};

console.log(esExtrangero(user));
