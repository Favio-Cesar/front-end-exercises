class Usuario {
  constructor(nombre, apellido, salary, age, nationality) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.salary = salary;
    this.age = age;
    this.nationality = nationality;
  }
  SacarSiEsExtranjero() {
    if ((this.nationality == "España") | (this.age != "30")) {
      return "No es apto para la ayuda del gobierno";
    }

    return "No es apto para la ayuda del gobierno";
  }
  SacarUserData() {
    if (
      (this.nombre === undefined) |
      (this.apellido === undefined) |
      (this.salary === undefined)
    ) {
      return new Error("Introduce un objeto con las propiedades necesarias");
    }
    const annualSalary = this.salary * 12;
    const fullName = `${this.name} ${this.last}`;

    return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
  }
  SacarNombreUsuario() {
    if ((this.nombre === undefined) | (this.apellido === undefined)) {
      return new Error("Introduce un objeto con las propiedades necesarias");
    }
    const nombreCompleto = "Me llamo " + this.nombre + " " + this.apellido;

    return nombreCompleto;
  }
}
usuario1 = new Usuario("Pedro", "Sanchez", "2000", "24", "España");
usuario2 = new Usuario("un", "extranjero", "400", "30", "Morroco");

function findAnimal() {}
const myMap = new Map();
myMap.set("moroso", usuario1);
myMap.set("agarrado", usuario1);
myMap.set("generoso", usuario2);
myMap.set("funcion", findAnimal);
myMap.set("color", "rojo");
/* 3. **Muestra por consola todo el map** */
console.log(myMap);
/* 4. **Muestra por consola el key `moroso`***/
console.log(myMap.get("moroso"));
/* 5. **Comprueba si existe la key `hola`***/
if (myMap.get("hola")) {
  console.log("hay una llave HOLA");
} else {
  console.log("no hay una llave hola");
}
/* 6. **Muestra por consola el tamaño total del map** */
console.log(`El tamaño total del map es${myMap.entries().length()}`);
/* 7. **Recorre el map con un forEach** */
myMap.forEach((entry) => {
  console.log(entry);
});

/* 8. **Elimina el elemento `agarrado` del map** */

/* 9. **Limpia el mapa por completo**  */
