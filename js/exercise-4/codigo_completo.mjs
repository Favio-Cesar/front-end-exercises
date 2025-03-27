export class User {
  constructor(firstName, lastName, salary, age, nationality) {
    if (typeof salary !== "number" || typeof age !== "number") {
      throw new Error("Salary and age must be numbers");
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.age = age;
    this.nationality = nationality;
  }

  checkIfForeign() {
    if (this.nationality !== "Spain" && this.age === 30) {
      return "Eligible for government aid";
    }
    return "Not eligible for government aid";
  }

  getUserData() {
    if (!this.firstName || !this.lastName || this.salary === undefined) {
      throw new Error("Please provide an object with the required properties");
    }
    const annualSalary = this.salary * 12;
    const fullName = `${this.firstName} ${this.lastName}`;

    return `My name is ${fullName} and I earn ${annualSalary}€ per year`;
  }

  getUserFullName() {
    if (!this.firstName || !this.lastName) {
      throw new Error("Please provide an object with the required properties");
    }
    return `My name is ${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Pedro", "Sanchez", 2000, 24, "Spain");
const user2 = new User("John", "Doe", 400, 30, "Morocco");

try {
  console.log(user1.getUserFullName());
  console.log(user1.getUserData());
  console.log(user1.checkIfForeign());

  console.log(user2.getUserFullName());
  console.log(user2.getUserData());
  console.log(user2.checkIfForeign());
} catch (error) {
  console.error(error.message);
}
