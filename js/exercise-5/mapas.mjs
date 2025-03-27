import { User } from "../exercise-4/codigo_completo.mjs"; // Importando la clase desde otro archivo

// Creating user instances
const user1 = new User("Pedro", "Sanchez", 2000, 24, "Spain");
const user2 = new User("John", "Doe", 400, 30, "Morocco");

/* 1. Create a Map */
const myMap = new Map();

/* 2. Add key-value pairs */
myMap.set("debtor", user1);
myMap.set("stingy", user1);
myMap.set("generous", user2);
myMap.set("function", findAnimal);
myMap.set("color", "red");

/* 3. Print the entire Map */
console.log(myMap);
consoleSeparator();

/* 4. Print the key `debtor` */
console.log(myMap.get("debtor"));
consoleSeparator();

/* 5. Check if the key `hello` exists */
if (myMap.has("hello")) {
  console.log("There is a key named 'hello'");
} else {
  console.log("There is no key named 'hello'");
}
consoleSeparator();

/* 6. Print the total size of the Map */
console.log(`The total size of the Map is ${myMap.size}`);
consoleSeparator();

/* 7. Iterate over the Map with forEach */
myMap.forEach((value, key) => {
  console.log(`${key}:`, value);
});
consoleSeparator();

/* 8. Remove the `stingy` key from the Map */
myMap.delete("stingy");
console.log(myMap);
consoleSeparator();

/* 9. Clear the Map completely */
myMap.clear();
console.log(
  `This is the Map after clearing: ${myMap.size === 0 ? "Empty" : myMap}`
);
consoleSeparator();

// Supporting functions
function findAnimal() {
  return "Example function";
}

function consoleSeparator() {
  console.log(
    "\n/////////////////////////////////////////////////////////////\n"
  );
}
