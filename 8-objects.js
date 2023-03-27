/**
 * Objects
 *   An object is a collection of properties, and a property is an association 
 *   between a name (or key) and a value. A property's value can be a function,
 *   in which case the property is known as a method.
 * 
 *   An object is a standalone entity, with properties and type.
 *   
 */

/**
 * Object initializers
 *  Also caled object literals, allow you to define new objects.
 */
const property3 = 'apple';

const obj = {
    propertty1: 'value1',
    2: 'value2', //shorthand for "2": value2
    property3, //shorthand for property3: property3
    method1() {
        console.log("method called");
    },// shorthand for method1: function() { ... }

}

// Sample object with nest object and properties
const myCar = {
    color: 'red',
    wheels: 4,
    enginge: { // nested object 
        cylinders: 4,
        size: 2.2
    },
}

/**
 * Constructor functions
 *  Define the object type by writing a constructor function.
 *  Create an instance of the object with new key word
 */

function Car(make, model, year, color, passengers, convertible, mileage, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    this.owner = owner;


    this.start = function() {
        this.started = true;
    }

    this.stop = function() {
        this.started = false;
    }

    this.drive = function() {
        if (this.started) {
            console.log(this.make + ' ' + this.model + ' goes zoom zoom!');
        } else {
            console.log('Start the engine first.');
        }
    }
}

function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;

}

const rand = new Person('Rand McKinnon', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');

const myCar2 = new Car('Eagle', 'Talon TSi', 1993, 'red', 5, false, 12892, rand);
const yourCar = new Car('Nissan', '300ZX', 1992, 'black', 2, false, 21300, ken);

myCar2.start();
console.log(myCar2.owner.name);
myCar2.drive();

yourCar.start();
console.log(yourCar.owner.name);
yourCar.drive();

/**
 * you can added properties to an object after it has been created using dot notation. 
 * however this only affects that insntace of the object, not all instances of the object.
 *  
 */

myCar2.eletric = false;
console.log(myCar2.eletric); // Black
console.log(yourCar.eletric); // undefined


/**
 * Object.create
 *  Object.create() creates a new object with the specified prototype object and properties.
 */

const Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() { // Method which will display type of Animal
        console.log(this.type);
    }
}

const animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

/**
 * Accessing properties
 *   You can access object properties in two ways:
 *     objectName.propertyName
 *     objectName['propertyName']
 *  An object property name can be any JavaScript string or symbol, including an empty
 *  string. However, if the property name is not a valid JavaScript identifier, it must
 *  be enclosed in quotes (single or double).
 */

/**
 * Enumerating properties
 *   You can use a for...in loop to iterate over the enumerable properties of an object.
 *       This method traverses all of the enumerable string properties of an object as well
 *         as its prototype chain
 *    Object.keys() returns an array of a given object's own enumerable properties, in the 
 *    same order as that provided by a for...in loop.
 *       This method returns an array with only the enumerable own string property names 
 *      ("keys") in the object myObj, but not those in the prototype chain
 *    Object.getOwnPropertyNames() returns an array of all properties (enumerable or not)
 */

function showProps(obj, objName) {
    let result = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + '.' + i + ' = ' + obj[i] + ' ';
        }
    }
    return result;
}

console.log(showProps(myCar2, 'myCar2'));

function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];
  
    while (objectToInspect !== null) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
      objectToInspect = Object.getPrototypeOf(objectToInspect);
    }
  
    return result;
  }

console.log(listAllProperties(myCar2));

/**
 * Deleting properties
 *   You can delete a property from an object using the delete operator.
 *   The delete operator removes a property from an object; if no more references to the
 *   same property are held, it is eventually released automatically.
 *   The delete operator returns true if it succeeds in deleting a property, and false if
 *    it fails (for example, if the property does not exist).
 * 
 */

const myObj = {
    a: 1,
    b: 2,
    c: 3
};

console.log('a' in myObj); // true
delete myObj.a;
console.log('a' in myObj); // false


/**
 * Comparing objects
 *     Two distinct objects are never equal, even if they have the same properties. Only 
 *     comparing the same object reference with itself yields true.
 * 
 */

const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

console.log('comparing objects with didfferent references');

console.log(fruit == fruitbear); // return false
console.log(fruit === fruitbear); // return false

console.log('comparing objects with same references');
const fruitIsFruit = fruit;
console.log(fruitIsFruit == fruit); // return true