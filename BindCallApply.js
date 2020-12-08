// functios  -> special Object

const person = {
  firstName: "Jatin",
  lastName: "Developer",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

function registerUser(country, lang) {
  // madditional functionality
  this.getName();
  console.log(`my country is${country} and my language is ${lang}`);
}
// bind
const register = registerUser.bind(person);

register();

// or
// call
registerUser.call(person, "indai", "english");

// apply

registerUser.apply(person, [" india", "english"]);
//  both will give same output
