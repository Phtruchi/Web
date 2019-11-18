// Fichier avec les animaux :

// Création d'un constructeur animal regroupant les propriétés de Car et de dog :
let Animal = function (x, y, htmlStr,name,legs,isAwesome,race) {
    this.x = x;
    this.y = y;
    this.htmlStr = htmlStr;
    this.htmlEle = htmlToElement(this.htmlStr);
	this.name = name;
    this.legs = legs;
    this.isAwesome = isAwesome;
	this.race = race;
};

// On appelle le constructeur Animal pour le chat, le chien et le cheval :

Animal.prototype.setStylesOn  = function (styleCSS){
    Object.assign(this.htmlEle.style, styleCSS);
}

Animal.prototype.draw = function () {
    this.setStylesOn({position : "absolute", height :"100px", width :"200px", left : this.x + "px", top: this.y + "px"});
    document.querySelector("body").append(this.htmlEle);
};

let chat = new Animal(0,700, '<img src="img/chat.png">','Mittens',4,true,'Persan');
let chien = new Animal(0,900, '<img src="img/chien.png">','Pancake',4,true,'Berger');
let cheval = new Animal(0,1100, '<img src="img/horse.png">','Marie',4,true,'Pur sang');

// On affiche les images sur la page :

chat.draw();
chien.draw();
cheval.draw();

// Méthodes permettant de déplacer les animaux :

Animal.prototype.moveRight = function () {
    this.x += 200;
    this.htmlEle.style.left = this.x + "px";
};
Animal.prototype.moveLeft = function () {
    this.x -= 200;
    this.htmlEle.style.left = this.x + "px";
};
Animal.prototype.moveUp = function () {
    this.y -= 200;
    this.htmlEle.style.top = this.y + "px";
};
Animal.prototype.moveDown = function () {
    this.y += 200;
    this.htmlEle.style.top = this.y + "px";
};

Animal.prototype.moveUpperRight = function () {
    this.x = window.innerWidth - 200;
    this.htmlEle.style.left = this.x + "px";
    this.y = 0;
    this.htmlEle.style.top = this.y + "px";
};

Animal.prototype.moveLowerRight = function () {
    this.x = window.innerWidth - 200;
    this.htmlEle.style.left = this.x + "px";
    this.y = window.innerHeight - 100;
    this.htmlEle.style.top = this.y + "px";
};

Animal.prototype.moveLowerLeft = function () {
    this.x = 0;
    this.htmlEle.style.left = this.x + "px";
    this.y = window.innerHeight - 100;
    this.htmlEle.style.top = this.y + "px";
};

Animal.prototype.moveWithKeyDown = function (keyDownEvent) {
    if(keyDownEvent.key =="ArrowUp"){
		this.moveUp();
	};
	if(keyDownEvent.key =="ArrowDown"){
		this.moveDown();
	};
	if(keyDownEvent.key =="ArrowRight"){
		this.moveRight();
	};
	if(keyDownEvent.key =="ArrowLeft"){
		this.moveLeft();
	};
}

chat.moveUpperRight()
chien.moveLowerLeft()
cheval.moveLowerRight()

document.body.onkeydown = (event) => chat.moveWithKeyDown(event)


//chat.moveRight() ;
//chien.moveRight() ;
//chien.moveRight() ;
//chien.moveRight() ;
//cheval.moveRight() ;



// function move(e){
//     //console.log(e)
	    
// 	if(e.key =="ArrowUp"){
// 		chat.moveUp();
// 	}
// 	if(e.key =="ArrowDown"){
// 		chat.moveDown();
// 	}
// 	if(e.key =="ArrowRight"){
// 		chat.moveRight();
// 	}
// 	if(e.key =="ArrowLeft"){
// 		chat.moveLeft();
// 	}
// }


//document.body.onkeydown = (keyDownEvent) => move(keyDownEvent) 

// Déplacement d'un animal au clavier : pour l'instant cela ne marche pas

// var rightPressed = false;
// var leftPressed = false;

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler(e) {
//     if(e.keyCode == 39) {
//         rightPressed = true;
//     }
//     else if(e.keyCode == 37) {
//         leftPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     if(e.keyCode == 39) {
//         rightPressed = false;
//     }
//     else if(e.keyCode == 37) {
//         leftPressed = false;
//     }
// }

// if(rightPressed == true) {
//     chat.moveRight2() ;
// }
// else if(leftPressed == true) {
//     chat.moveLeft2() ;
// }

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

// Essai de déplacement du chat : chat.moveRight(); chat.moveDown(); chat.moveDown(); ok !

// Fonction qui va appliquer les méthodes de déplacement précédentes en fonction de la touche du clavier :

// function move(){
//     console.log(event)
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

