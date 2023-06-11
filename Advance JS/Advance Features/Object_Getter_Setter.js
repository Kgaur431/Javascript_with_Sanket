const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {      // getter
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {  // setter
     [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log("Person", person);
console.log("person.fullName: ", person.fullName); // Output: John Doe            calling getter
person.fullName = "Kartik Gour"                                                // calling setter
console.log("person.fullName: ", person.fullName); // Output: Kartik Gour


// before set a particular value we need to some checks  
//  _varname :- start with _ is telling that this is private property. it is used for internal purposes 
//              means telling that don't try to access this _varname property directly


const person2 = {
  _username : 'Kartik Gour',
  age : 24,
  get username() {      // getter
    return this._username
  },
  set username(name) {  // setter
    if(name.length > 4)
    {
      this._username = name;
    }
  },
  get dob() {
    const date = new Date();
    return date.getFullYear() - this.age;
    },
}

console.log("person2: ", person2);
console.log("person2.username: ", person2.username); // Output: Kartik Gour            calling getter
person2.username = "Kartik"                                                         // calling setter
console.log("person2.username: ", person2.username); // Output: Kartik
console.log("person2.dob: ", person2.dob); // Output: 1995

// we are using person.username not person._username because we are using getter and setter so we can't access the _username directly