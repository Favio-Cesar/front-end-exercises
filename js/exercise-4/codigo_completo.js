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

console.log(usuario1.SacarNombreUsuario());
console.log(usuario1.SacarUserData());
console.log(usuario1.SacarSiEsExtranjero());

console.log(usuario2.SacarNombreUsuario());
console.log(usuario2.SacarUserData());
console.log(usuario2.SacarSiEsExtranjero());
