# Ejercicio 3, Acierta los console.log

¿Qué salida tendrán los siguientes `console.log`?

```js
// Comparaciones con booleanos
console.log(false + false); //0
console.log(false + true); //1
console.log(true + true); //2
```

Los valores true y false se convierten a 1 y 0, respectivamente, cuando se usan en operaciones matemáticas.

```js
// Comparaciones con arrays
console.log([] === []); //false
console.log([] + []); //""
console.log([1, 2] + [3, 4]); //"1,23,4"
console.log([1] + 1); //"11"
console.log([1] - 1); //0
```

[] === [] devuelve false porque los arrays son objetos y se comparan por referencia, no por valor.

[] + [] devuelve "" porque los arrays se convierten a cadenas vacías cuando se suman como strings.

[1, 2] + [3, 4] produce "1,23,4" porque ambos arrays se convierten en strings y luego se concatenan.

[1] + 1 resulta en "11" porque [1] se convierte en "1" y luego se concatena con 1.

[1] - 1 da 0 porque [1] se convierte a 1 y se resta 1.

```js
// Comparaciones con objetos
console.log({} + {}); // "[object Object][object Object]"
console.log({} === {}); // false
console.log([] === {}); //false
```

{} por sí solo se interpreta como un bloque vacío, pero en {} + {}, los objetos se convierten a cadenas, resultando en "[object Object][object Object]".

{} y {} son objetos diferentes en memoria, por lo que { } === { } es false.

[] === {} también es false porque son diferentes tipos de objetos.

```js
// Comparaciones especiales
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(null == 0); //false
console.log(null <= 0); //true
console.log(undefined == null); //true
```

null + 1 da 1 porque null se convierte a 0.

undefined + 1 da NaN porque undefined no se convierte en un número válido.

null == 0 es false porque null solo es igual a undefined, no a 0.

null <= 0 es true porque null se convierte a 0 en comparaciones numéricas.

undefined == null es true porque son considerados valores similares en igualdad no estricta.

```js
// Operaciones con NaN
console.log(NaN + 1); //NaN
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
```

NaN + 1 sigue siendo NaN porque cualquier operación con NaN da NaN.

NaN == NaN y NaN === NaN son false porque NaN nunca es igual a sí mismo según la especificación de JavaScript.
