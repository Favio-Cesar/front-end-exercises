type AnimalType = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};
type DogType = AnimalType & {
  race: string;
  age: number;
};
const bird: AnimalType = {
  name: "Max",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};
const dog: DogType = {
  name: "Max",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
  race: "none",
  age: 5,
};
// en este caso, el interface es mas adecuado
// ya que estamos trabajando con objetos jerarquicos
interface AnimalInterface {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

/* 
  interface DogInterface extends AnimalInterface {
  race: string;
  age: number;
} */
const secondBird: AnimalInterface = {
  name: "Max",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};
const secondDog: DogType = {
  name: "Max",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
  race: "none",
  age: 5,
};
