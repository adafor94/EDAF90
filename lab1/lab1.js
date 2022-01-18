'use strict';
/**
 * Reflection question 1
 */

const imported = require("./inventory.js");
console.log(imported.inventory['Sallad']);


console.log('Object.keys():')
let names = Object.keys(imported.inventory);
names
.sort((a, b) => a.localeCompare(b, "sv", {sensitivity: 'case'}))
.forEach(name => console.log(name));

/**
 * Reflection question 2
 */

console.log('\n--- Assignment 1 ---------------------------------------')

function makeOptions(inventory, property) {            // How to use reduce instead? 
    return Object.keys(inventory)
        .filter(name => inventory[name][property])         // filter items that contains property
        .map(name => `<option value="${name}"> ${name}, ${inventory[name]['price']} kr </option>`)      // and make string
}

console.log(makeOptions(imported.inventory, 'foundation'));

console.log('\n--- Assignment 2 ---------------------------------------')


class Salad {
    constructor() {
        Object.defineProperty(this, 'uuid', {
            value : Salad.instanceCounter++,
            writable: false
        });
       // this.uuid = 'salad_' + Salad.instanceCounter++;
    }

    add(name, properties) {
        this[name] = properties;
        return this;
    }
    remove(name) {
        delete this[name];
    }
}

Salad.instanceCounter = 0

let myCaesarSalad = new Salad()
 .add('Sallad', imported.inventory['Sallad'])
.add('Kycklingfilé', imported.inventory['Kycklingfilé'])
.add('Bacon', imported.inventory['Bacon'])
.add('Krutonger', imported.inventory['Krutonger'])
.add('Parmesan', imported.inventory['Parmesan'])
.add('Ceasardressing', imported.inventory['Ceasardressing'])
.add('Gurka', imported.inventory['Gurka']);
console.log(JSON.stringify(myCaesarSalad) + '\n');
myCaesarSalad.remove('Gurka');
console.log(JSON.stringify(myCaesarSalad) + '\n');

console.log('\n--- Assignment 3 ---------------------------------------')

Salad.prototype.getPrice = function () {
    return Object.values(this)
        .reduce(((prev, current) => 
            prev + (typeof current === "object" && current.price)), 0)       // Loop all ingredients and sum price.  
}

Salad.prototype.count = function (property) {
    return Object.values(this)                                              // loop all ingredients
        .reduce(((prev, current) => 
            prev + (typeof current === "object" && property in current)), 0)       // if 'current' containts 'property' add 1. Bool converts to 0 or 1. 
}

console.log('En ceasarsallad kostar ' + myCaesarSalad.getPrice() + 'kr');
// En ceasarsallad kostar 45kr
console.log('En ceasarsallad har ' + myCaesarSalad.count('extra') + ' tillbehör');
// En ceasarsallad har 3 tillbehör

// reflection question 3

console.log('typeof Salad: ' + typeof Salad);
console.log('typeof Salad.prototype: ' + typeof Salad.prototype);
console.log('typeof Salad.prototype.prototype: ' + typeof Salad.prototype.prototype);
console.log('typeof myCaesarSalad: ' + typeof myCaesarSalad);
console.log('typeof myCaesarSalad.prototype: ' + typeof myCaesarSalad.prototype);
console.log('check 1: ' + (Salad.prototype === Object.getPrototypeOf(myCaesarSalad)));
console.log('check 2: ' + (Object.prototype === Object.getPrototypeOf(Salad.prototype)));

console.log('\n--- Assignment 4 ---------------------------------------')

class GourmetSalad extends Salad {
    constructor() {
        super();
    }
    add(name, properties, s = 1) {
        let copy = {...properties};
        copy['size'] = (this?.[name]?.size || 0) + s
        super.add(name, copy)
        return this;
    }

    getPrice() {
        return Object.values(this)
        .reduce(((prev, current) => 
            prev + (typeof current === "object" && current.price) * (current.size || 1)), 0)   
    }
}

let myGourmetSalad = new GourmetSalad()
.add('Sallad', imported.inventory['Sallad'], 0.5)
.add('Kycklingfilé', imported.inventory['Kycklingfilé'], 2)
.add('Bacon', imported.inventory['Bacon'], 0.5)
.add('Krutonger', imported.inventory['Krutonger'])
.add('Parmesan', imported.inventory['Parmesan'], 2)
.add('Ceasardressing', imported.inventory['Ceasardressing']);
console.log(JSON.stringify(myGourmetSalad) + '\n');

console.log('Min gourmetsallad med lite bacon kostar ' + myGourmetSalad.getPrice() + ' kr');
myGourmetSalad.add('Bacon', imported.inventory['Bacon'], 1)
console.log(JSON.stringify(myGourmetSalad) + '\n');

console.log('Med extra bacon kostar den ' + myGourmetSalad.getPrice() + ' kr');

console.log('\n--- Assignment 5 ---------------------------------------')

console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid + "\n");
//myGourmetSalad.uuid = 42;

/**
 * Reflection question 4
 * In the Class-object. Not in the Class.prototype. 
 */
/**
 * Reflection question 5
 * Yes. 
 */
/**
 * Reflection question 6
 * Yes, using #. #privatemethod() or #privatefield
 */
