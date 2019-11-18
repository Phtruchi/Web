/**
 * Crééer 3 lignes dans le tableau dont l'identifiant est #tableContactBody
 * dont les prénom et noms sont hard-coder dans la fonction
 */
function buildTable() {
	let fName = document.getElementById("idFirstName").value;
	let lName = document.getElementById("idName").value;
	let email = document.getElementById("idEmail").value;
	let tel = document.getElementById("idTel").value;
	let pwd = document.getElementById("idPwd").value;
	let adr = document.getElementById("idAdr").value;
	if (fName.trim()=="" || lName.trim()=="" || email.trim()=="" || tel.trim()=="" || pwd.trim()=="" || adr.trim()=="") {
		alert("Au moins un champs est vide et je n'aime pas ça!(LOL).");
	}
	else {
	addLineToHTMLTable(fName, lName);
	genTab(fName, lName, email, tel, pwd, adr);
	document.getElementById("idFirstName").value="";
	document.getElementById("idName").value="";
	document.getElementById("idEmail").value="";
	document.getElementById("idTel").value="";
	document.getElementById("idPwd").value="";
	document.getElementById("idAdr").value="";
	}
}

function genTab(fnam, lnam, mail, ttel, pw, ad) {
	
		let tab = [fnam, lnam, mail, ttel, pw, ad];
		let tb = ["Prénom: ","Nom: ", "Email: ", "Téléphone: ", "Mot de passe: ", "Adresse: "];
		let body = document.getElementsByTagName("body")[0];

        // création des éléments <table> et <tbody>
        table     = document.createElement("table");
        tablebody = document.createElement("tbody");

        // création des cellules
        for(let j = 0; j < 2; j++) {
            // création d'un élément <tr>
            row = document.createElement("tr");

            for(let i = 0; i < 3; i++) {
                // création d'un élément <td>
                cell = document.createElement("td");
                // création d'un nœud texte
                texte = document.createTextNode(tb[i+j]+tab[i+j]);
                // ajoute le nœud texte créé à la cellule <td>
                cell.appendChild(texte);
				cell.style.color="navy";										// Premier CSS appliqué au tableau.
				cell.style.backgroundColor="Gold";								// Duexième CSS appliqué au tableau.
				cell.style.fontFamily="Times New Roman Times, serif";			// Troisième CSS appliqué au tableau.
				cell.style.border="1px solid black";							// Quatrième CSS appliqué au tableau.
				cell.style.padding="15px";										// Cinquième CSS appliqué au tableau.
				cell.style.fontSize="25px";										// Sixième CSS appliqué au tableau.
                // ajoute la cellule <td> à la ligne <tr>
                row.appendChild(cell);
            }
            // ajoute la ligne <tr> à l'élément <tbody>
            tablebody.appendChild(row);
			//tablebody.stt
        }

        // ajoute <tbody> à l'élément <table>
        table.appendChild(tablebody);
        // ajoute <table> à l'élément <body>
        body.appendChild(table);
  	
		
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

/* Contrôle de formulaire: N'autorise que la saisie des chiffres. */

function chiffres(event) {
// Code pour Compatibilité IE / Firefox
if(!event&&window.event) {
event=window.event;
}
// Code pour IE
if(event.keyCode < 48 || event.keyCode > 57 || event.keyCode  == 8 || event.keyCode == 127) {
event.returnValue = false;
event.cancelBubble = true;
}
// Code pour DOM
if(event.which < 48 || event.which > 57 || event.keyCode == 8 || event.keyCode == 127) {
event.preventDefault();
event.stopPropagation();
}
}




