// constructor fnction
//  here we learn about constructor and pototype
function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

// here we are creating object of a function
const todo = new Todo("jatin", true);

console.log(todo);
console.log(Todo);

// we can also add function to it
function TodoM(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
}

const vodo = new TodoM("jatin", true);

console.log(vodo);
vodo.getTodoName();

// by doing so we are attaching these methods to every objects but problem is if we have too much mathd and we generate so many object so there
// will be problem in storing data i.e. the memory problem
// which is going to give a bug
// prototype

function TodoP(name, completed) {
  this.name = name;
  this.completed = completed;
}

TodoP.prototype.getName = function () {
  console.log(this.name);
};

const newobj = new TodoP("asshu", false);

console.log(newobj);
newobj.getName();

//  same thing in array

console.log("chaecking same thing in array");

const arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6);
console.log(arr);
//  in array these functions are woking i.e. push,pop,shift etc.. because htey are added in protype of array
//  all those methods comes from a place called prootype
//  its a good practice to attach your methods to prototype instead of attaching in constructor
