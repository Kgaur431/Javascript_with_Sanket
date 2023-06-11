const person = {
  name: 'John',
  age : 24,
  address:  {
    country: 'USA',
    city: 'San Francisco',
    zip: 12345
  },
  hobbies: ['Football', 'Volleyball', 'Cricket'],
  getYearOfBirth() {
    return new Date().getFullYear() - this.age;
  }
}


console.log("person: ", person.getYearOfBirth());