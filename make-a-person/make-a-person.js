export class Person {
  constructor(fullName) {
    this.fullName = fullName;
  }

  getFirstName() {
    return this.fullName.split(' ')[0];
  }

  getLastName() {
    return this.fullName.split(' ')[1];
  }

  getFullName() {
    return this.fullName;
  }

  setFirstName(firstN) {
    this.fullName = `${firstN} ${this.fullName.split(' ')[1]}`;
    return this.fullName;
  }

  setLastName(lastN) {
    this.fullName = `${this.fullName.split(' ')[0]} ${lastN}`;
    return this.fullName;
  }

  setFullName(fullN) {
    this.fullName = fullN;
    return this.fullName;
  }
}
