//A simple object
let dog = {
	sound : "Woof woof", // On ajoute le sound pour pouvoir utiliser la fonction speak avec l'objet dog
    name: "Pancake",
    legs: 4,
    isAwesome: true
};

//adding methodes to objects
dog.bark = function(){
    return "Woof woof! My name is " + this.name + "!";
}


//Sharing a Method Between Multiple Objects
let speak = function (animal) {
    return animal.sound + "! My name is " + animal.name + "!" ;
};

//Create another object

// Les trois nouveaux objets : cat, pig et horse

let cat = {
	sound: "Miaow",
	name: "Mittens"
}

let pig = {
	sound: "Oink",
	name: "Charlie"
}

let horse = {
	sound: "Neigh",
	name: "Marie"
}

dog.speak=speak;
cat.speak=speak;
pig.speak=speak;
horse.speak=speak;

appendIn("body",dog.speak());
appendIn("body",cat.speak()); // Miaow! My name is Mittens!
appendIn("body",pig.speak());
appendIn("body",horse.speak());


// appendIn("body",dog.bark());
// appendIn("body",speak(dog)); // On utilise la fonction speak() avec l'objet dog
// appendIn("body",speak(cat)); // Miaow! My name is Mittens!
// appendIn("body",speak(pig)); // Oink! My name is Charlie!
// appendIn("body",speak(horse)); // Neigh! My name is Marie!

