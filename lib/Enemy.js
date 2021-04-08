const Character = require('./Character');
const Potion = require('./Potion');

class Enemy extends Character {
//function Enemy(name, weapon) {
    constructor(name, weapon) {

        super(name);

        // this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

        // this.health = Math.floor(Math.random() * 10 + 85);
        // this.strength = Math.floor(Math.random() * 5 + 5);
        // this.agility = Math.floor(Math.random() * 5 + 5);
    }

    // Enemy = Object.create(Character);

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };

}

module.exports = Enemy;