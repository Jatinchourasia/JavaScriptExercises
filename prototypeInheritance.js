function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getinfo = function () {
  console.log(
    ` name : ${this.name}, health : ${this.life}, level : ${this.level}`
  );
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked !!!`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked`);
};

// here we are inheriting all the properties of enemy constructor here

function Dragon(life, name, level, color, spell) {
  // to access all the properties of enemy here we use call
  Enemy.call(this, life, name, level);
  // here "this" will refer to the Dragon object
  // for rest of the property define here
  this.color = color;
  this.spell = spell;
}

Dragon.prototype = Object.create(Enemy.prototype);

Dragon.prototype.fire = function () {
  console.log("fireeeeeee");
};
// inherit the functions of enemy

const newDragon = new Dragon(100, "dracula", 30, "red", "fireBreath");

console.log(newDragon);

newDragon.getinfo();
newDragon.fire();
newDragon.attack();
newDragon.block();
