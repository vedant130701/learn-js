// this.firstName = "Jane" this matches with imp point
const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        // fullName: () => { return this.firstName + ' ' + this.lastName }
        // using arrow operation, we get undefined undefined as scope not set
        fullName: function() { return this.firstName + ' ' + this.lastName }
        // using function operation, we get Grace Hopper as in scope

        // imp point if we define this.firstName and this.lastName from before, define scope outside, then we can use arrow. i.e defined
    }
}

let x = o.person.fullName();
console.log(x);
  
