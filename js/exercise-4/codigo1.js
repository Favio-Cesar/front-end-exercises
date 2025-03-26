/* 
    1 Las declaraciones de las funciones y variables pienso que esta mejor 
    posicionarlas en el principio.
    
    2 En este primer codigo he borrado los atributos de edad y profesion ya 
    que redundan para lo que se va a usar. 

    3 Implementé early return para que no haga nada desde el principio si 
    se pasa informacion que no va a procesar bien.
*/
function SacarNombreUsuario(user) {
  if ((user.nombre === undefined) | (user.apellido === undefined)) {
    return new Error("Introduce un objeto con las propiedades necesarias");
  }
  const nombreCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombreCompleto;
}

var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
};

var usuarioInvalido = {
  nombre: "Pedrou",
  apellidaishon: "sanchezing",
};

const nombreUsuario = SacarNombreUsuario(usuario);
const nombreUsuarioInvalido = SacarNombreUsuario(usuarioInvalido);

console.log(nombreUsuario);

console.log(nombreUsuarioInvalido);
