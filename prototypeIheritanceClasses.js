//  function way

// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };

// class way

class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }

  //   no need to write prototype it will do for us
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

// const turtle = new Enemy(23, "squidward", 10);

// console.log(turtle);

// turtle.getInfo();

class Dragon extends Enemy {
  constructor(life, name, level, color, spell) {
    super(life, name, level);
    // this super will inerit the proprerty of Enemy
    this.color = color;
    this.spell = spell;
  }
}

const Darn = new Dragon(100, "DArn", 20, "red", "DragonBreeth");

console.log(Darn);
Darn.getInfo();
