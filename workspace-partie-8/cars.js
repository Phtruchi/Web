//Creating a Car Constructor - The Car Constructor Function
let Car = function (x, y, htmlStr) {
    this.x = x;
    this.y = y;
    this.htmlStr = htmlStr;
    this.htmlEle = htmlToElement(this.htmlStr);
};


//Calling the Car Constructor
let tesla = new Car(0, 300, '<img src="img/tesla.png">');

function position(carsObject){
    return "Ma position x= " + carsObject.x + " y= " + carsObject.y;
}

appendIn("body",position(tesla));

Car.prototype.setStylesOn  = function (styleCSS){
    Object.assign(this.htmlEle.style, styleCSS);
}

Car.prototype.draw = function () {
    this.setStylesOn({position : "absolute", height :"100px", width :"200px", left : this.x + "px", top: this.y + "px"});
    document.querySelector("body").append(this.htmlEle);
};

tesla.draw();

let cars= new Car(0, 500, '<img src="img/cars.png">');
cars.draw();


//Adding a moveRight Method
Car.prototype.moveRight = function () {
    this.x += 200;
    this.htmlEle.style.left = this.x + "px";
};
cars.moveRight();
cars.moveRight();
cars.moveRight();

Car.prototype.moveLeft = function () {
    this.x -= 200;
    this.htmlEle.style.left = this.x + "px";
};
Car.prototype.moveUp = function () {
    this.y -= 200;
    this.htmlEle.style.top = this.y + "px";
};
Car.prototype.moveDown = function () {
    this.y += 200;
    this.htmlEle.style.top = this.y + "px";
};

cars.moveUp();
cars.moveLeft();
cars.moveDown();

// // Création d'un constructeur animal regroupant les propriétés de Car et de dog :
// let Animal = function (x, y, htmlStr,name,legs,isAwesome,race) {
//     this.x = x;
//     this.y = y;
//     this.htmlStr = htmlStr;
//     this.htmlEle = htmlToElement(this.htmlStr);
// 	this.name = name;
//     this.legs = legs;
//     this.isAwesome = isAwesome;
// 	this.race = race;
// };


// // On appelle le constructeur Animal pour le chat, le chien et le cheval :

// Animal.prototype.setStylesOn  = function (styleCSS){
//     Object.assign(this.htmlEle.style, styleCSS);
// }

// Animal.prototype.draw = function () {
//     this.setStylesOn({position : "absolute", height :"100px", width :"200px", left : this.x + "px", top: this.y + "px"});
//     document.querySelector("body").append(this.htmlEle);
// };

// let chat = new Animal(0,700, '<img src="img/chat.png">','Mittens',4,true,'Persan');
// let chien = new Animal(0,900, '<img src="img/chien.png">','Pancake',4,true,'Berger');
// let cheval = new Animal(0,1100, '<img src="img/horse.png">','Marie',4,true,'Pur sang');

// //let chat = new Car(0,800, '<img src="img/chat.png">');
// //et chien = new Car(0,1000, '<img src="img/chien.png">');
// //let cheval = new Car(0,1200, '<img src="img/horse.png">');

// // On affiche les images sur la page :

// chat.draw();
// chien.draw();
// cheval.draw();

// Ajoute les méthodes de déplacement pour les animaux

// Animal.prototype.moveRight = function () { // déplacement vers la droite
//     this.x += 200;
//     this.htmlEle.style.left = this.x + "px";
// };
// Animal.prototype.moveLeft = function () { // déplacement vers la gauche
//     this.x -= 200;
//     this.htmlEle.style.left = this.x + "px";
// };
// Animal.prototype.moveUp = function () { // déplacement vers le haut
//     this.y -= 200;
//     this.htmlEle.style.top = this.y + "px";
// };
// Animal.prototype.moveDown = function () { // déplacement vers le bas
//     this.y += 200;
//     this.htmlEle.style.top = this.y + "px";
// };

// // Essai de déplacement du chat : chat.moveRight(); chat.moveDown(); chat.moveDown(); ok !

// // Fonction qui va appliquer les méthodes de déplacement précédentes en fonction de la touche du clavier :

// function move(){
// 	var touche = event.keyCode;
// 	//var nom = String.fromCharCode(touche); 
//     //alert('Vous avez appuyé sur '+nom); //a permis de retrouver les codes des lettres
//     console.log(touche)
// 	if(touche==38){
// 		chat.moveUp();
// 	}
// 	if(touche==37){
// 		chat.moveLeft();
// 	}
// 	if(touche==39){
// 		chat.moveRight();
// 	}
// 	if(touche==40){
// 		chat.moveDown();
// 	}
// }

//chat.move() // ça marche !