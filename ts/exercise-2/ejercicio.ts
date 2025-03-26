interface AnimalInterface {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}
type Race = "Husky" | "Labrador" | "Chucho";

interface DogInterface extends AnimalInterface {
  race: Race;
  age: number;
}
const thirdBird: DogInterface = {
  name: "Max",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
  race: "Husky",
  age: 2,
};
