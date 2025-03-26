/* 1 la mayoria me parece bien, 
concadena los strings y las variables con las tildes invertidas para mejor visibilidad
2 tambien le puse early return y le cambie el nombre de la funcion.
 */
function SacarUserData(user) {
  if (
    (user.nombre === undefined) |
    (user.apellido === undefined) |
    (user.salary === undefined)
  ) {
    return new Error("Introduce un objeto con las propiedades necesarias");
  }
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

const user = {
  name: "Pedro",
  last: "Sánchez",
  salary: 1000,
};

console.log(SacarUserData(user));
