# Ejercicio 2, Hoisting

Que devuelve por consola cada uno de los siguientes `console.log`

---

```js
console.log(a); // undefined
var a = "hola";
```

---

```js
console.log(b); // ReferenceError, is not defined (salta el debugger como si ni si quiera se hubiera escrito la variable.)
let b = "hola";
```

---

```js
console.log(c); //uncaught referenceError: cannot access value before initialization.
const c = "hola";
```

---

```js
sayHi(); //Hola desde sayHi!

function sayHi() {
  console.log("Hola desde sayHi!");
}
```

---

```js
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye(); // Adios desde sayBye!
```
