class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  get persons() {
    return this._persons;
  }

  set persons(persons) {
    this._persons = persons;
  }

  //adding get and set makes it standard and assigns persons to _persons
  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
// _persons directly also works,but user also has to know that.
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}] // initally 2 diff obj was created. persons here and _persons in class.
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
