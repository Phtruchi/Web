/**
 * Crééer 3 lignes dans le tableau dont l'identifiant est #tableContactBody
 * dont les prénom et noms sont hard-coder dans la fonction
 */
function buildTable() {
	let fName = document.getElementById("idFirstName").value;
	let lName = document.getElementById("idName").value;
	if (fName.trim()=="" || lName.trim()==""){
		alert("Le champs Nom ou Prénom est vide.");
	}
	else {
	addLineToHTMLTable(fName, lName);
	document.getElementById("idFirstName").value="";
	document.getElementById("idName").value="";
	}
}

/**
 * Ajoute une ligne dans le tableau dont l'identifiant est #tableContactBody
 * @param firstName prénom de la personne
 * @param lastName nom de la personne
 */
function addLineToHTMLTable(firstName, lastName) {
    //Obtenir le body de la table #tableContactBody en utilisant le selector API
	let mybody = document.getElementById('tableContactBody');
    //Ajouter une nouvelle ligne à la fin du tableau
	let newline = mybody.insertRow(-1);
    //Ajouter une nouvelle cellule dans cette nouvelle ligne
	let firstcell=newline.insertCell(0);	
    //Modifier le contenu HTML de la cellule avec le prénom de la personne
	firstcell.innerHTML = firstName;
    //Ajouter une autre cellule dans cette nouvelle ligne
	let secondcell=newline.insertCell(1);
    //Modifier le contenu HTML de la cellule avec le nom de la personne
	secondcell.innerHTML =lastName;
}

