type Cat = Pick<AnimalInterface, "name" | "canSleep"> & { color: string };
const cat: Cat = {
  name: "michi",
  color: "orange",
  canSleep: true,
};
type Snake = Pick<AnimalInterface, "canEat" | "canDrink" | "canSleep">;
const snake: Snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};
//tambien existe Omit que hace todo lo contrario a Pick
