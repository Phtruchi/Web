/**
* Modifier titre h1 du document dont l'identifiant est "mainTitle" en concaténant le texte suivant :
* "<br>La modification du <u>titre</u> a été changé par Javascript!"
*
*/


function changeTitle() {
    //Récupérez l'élement <h1> de la page à l'aide de l'API du DOM
    let h1_modif = document.getElementById("mainTitle") ;
    //Modifier le contenu HTML de la balise <h1> en concatenant son contenu courant avec la string suivante : "<br>La modification du <u>titre</u> a été changé par Javascript!"
    h1_modif.innerHTML = "<br>La modification du <u>titre</u> a été changée par Javascript!" ;
}

/**
* Deuxième fonction qui ajoute un nouveau paragraphe contenant un nombre aléatoire compris entre 0 et 100
*/

function ajoutParagraphe() {
	// Création d'un nombre aléatoire compris entre 1 et 100 :
	let numRand = Math.floor(Math.random() * 101) ;
	// On transforme le nombre aléatoire en chaîne de caractères pour l'ajouter au nouveau paragraphe:
	let numRandString = document.createTextNode(numRand.toString());
	// Création d'un nouveau paragraphe :
	let newPara = document.createElement("p") ;
	// Ajout du nombre aléatoire dans le nouveau paragraphe :
	newPara.appendChild(numRandString) ;
	// Repérage du pied de page pour insérer le nouveau paragraphe avant :
	let pied_Page = document.getElementById('piedPage') ;
	// Ajout du nouveau paragraphe juste avant le pied de page :
	document.body.insertBefore(newPara, pied_Page) ;
}