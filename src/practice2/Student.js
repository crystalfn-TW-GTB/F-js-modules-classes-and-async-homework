import Person from "./Person";

export default class Student extends Person {
  constructor(name, className) {
    super(name);
    this.name = name;
    this.className = className;
  }

  study = () => {
    super.move();
    // eslint-disable-next-line no-console
    console.log(`${this.name} is studying in ${this.className}`);
  };
}
