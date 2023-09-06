function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

let favoriteNumber = 42;

/*const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
}; */

var instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
  return {
    species, // animal species
    [verb]() {
      // string used to name function for the sounds
      return noise; // string printed when the function for sounds is called
    },
  };
}
