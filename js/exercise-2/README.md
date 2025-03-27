# Ejercicio 2, Hoisting

Que devuelve por consola cada uno de los siguientes `console.log`

---

```js
console.log(a); // undefined
var a = "hola";
```

Debido al hoisting, la declaración de var a se eleva al inicio del contexto de ejecución, pero su asignación no. Por lo tanto, cuando se ejecuta console.log(a), la variable a ya está declarada pero aún no tiene un valor asignado, por lo que devuelve undefined.

---

```js
console.log(b); // ReferenceError, is not defined (salta el debugger como si ni si quiera se hubiera escrito la variable.)
let b = "hola";
```

Las variables declaradas con let (y const) también se elevan, pero quedan en la "zona temporal muerta" hasta que se ejecuta su asignación. Intentar acceder a b antes de su inicialización produce un ReferenceError.

---

```js
console.log(c); //uncaught referenceError: cannot access value before initialization.
const c = "hola";
```

Al igual que let, las variables declaradas con const quedan en la "zona temporal muerta" hasta que se inicializan. Acceder a c antes de su asignación provoca un ReferenceError.

---

```js
sayHi(); //Hola desde sayHi!

function sayHi() {
  console.log("Hola desde sayHi!");
}
```

Las funciones declaradas con function son elevadas completamente, incluyendo su definición. Por eso, se puede llamar a sayHi() antes de su declaración sin errores.

---

```js
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye(); // Adios desde sayBye!
```

Este caso es similar al anterior: la función sayBye() se eleva completamente y se puede invocar antes o después de su declaración sin problemas.
