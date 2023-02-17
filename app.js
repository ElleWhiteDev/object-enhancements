let createInstructor = (firstName, lastName) => {
    firstName,
    lastName
}

const favoriteNumber = 42;

let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

const instructor2 = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

let animalObj = (species, verb, noise) => {
    return {
        species,
        [verb](){
        return noise;
        }
    }
}