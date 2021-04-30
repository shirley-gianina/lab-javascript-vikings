
// Soldier

class Soldier {
    constructor(health,strength) {
      this.health = health;
      this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage
    }

}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return`${this.name} has received ${damage} points of damage`;
        } else {
            return`${this.name} has died in act of combat`;
        }
    }


    battleCry() {
        return `Odin Owns You All!`;
    }
}


  // // Saxon

class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return`A Saxon has received ${damage} points of damage`;
        } else {
            return`A Saxon has died in combat`;
        }
    }
}


// // War

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    getRandom(array) {
        // devuelve un exlemento aleatorio de una lista
        return array[Math.floor(Math.random() * array.length)];
    }

    vikingAttack() {
        const viking = this.getRandom(this.vikingArmy)
        const saxon = this.getRandom(this.saxonArmy)
        const result = saxon.receiveDamage(viking.strength)
        this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0)
        return result
    }

    saxonAttack() {
        const saxon = this.getRandom(this.saxonArmy)
        const viking = this.getRandom(this.vikingArmy)
        const result = viking.receiveDamage(saxon.strength)
        this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0)
        return result
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return`Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return`Saxons have fought for their lives and survived another day...`;
        } else if(this.saxonArmy.length ===  this.vikingArmy.length) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

