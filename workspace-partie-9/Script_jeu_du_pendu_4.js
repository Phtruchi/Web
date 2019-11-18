// Pour faire se programme, je me suis inspiré d'un code trouvé sur le net :  https://openclassrooms.com/forum/sujet/pendu-javascript ; j'ai changé la manière de
// définir l'aléatoire en utilisant la fonction random() ; j'ai ajouté une fonction permettant de choisir un niveau de difficulté qui définit le nombre d'erreurs
// pouvant être comises. J'ai aussi ajouté un décompte pour que le joueur puisse savoir combien de coups il lui reste.
// Pour constituer la liste des mots, je me suis servi d'une ressources trouvée sur le net : 
// https://openclassrooms.com/forum/sujet/titre-a-modifier-ressource-pour-le-pendu-33934 

// Liste des variables :

let tabMots = ["ANGLE","ARMOIRE","BANC","BUREAU","CABINET","CARREAU","CHAISE","CLASSE","CLEF","COIN","COULOIR","DOSSIER","EAU","ECOLE","ENTRER","ESCALIER",
"ETAGERE","EXTERIEUR","FENETRE","INTERIEUR","LAVABO","LIT","MARCHE","MATELAS","MATERNELLE","MEUBLE","MOUSSE","MUR","PELUCHE","PLACARD","PLAFOND","PORTE",
"POUBELLE","RADIATEUR","RAMPE","RIDEAU","ROBINET","SALLE","SALON","SERRURE","SERVIETTE","SIEGE","SIESTE","SILENCE","SOL","SOMMEIL","SONNETTE","SORTIE","TABLE",
"TABLEAU","TABOURET","TAPIS","TIROIR","TOILETTE","VITRE","ALLER","AMENER","APPORTER","APPUYER","ATTENDRE","BAILLER","COUCHER","DORMIR","ECLAIRER","EMMENER",
"EMPORTER","ENTRER","FERMER","FRAPPER","INSTALLER","LEVER","OUVRIR","PRESSER","RECHAUFFER","RESTER","SONNER","SORTIR","VENIR","ABSENT","ASSIS","BAS","HAUT",
"PRESENT","GAUCHE","DROITE","DEBOUT","DEDANS","DEHORS","FACE","LOIN","PRES","TARD","TOT","APRES","AVANT","CONTRE","DANS","DE","DERRIERE","DEVANT","DU","SOUS",
"SUR","CRAYON","STYLO","FEUTRE","MINE","GOMME","DESSIN","COLORIAGE","RAYURE","PEINTURE","PINCEAU","COULEUR","CRAIE","PAPIER","FEUILLE","CAHIER","CARNET",
"CARTON","CISEAUX","DECOUPAGE","PLIAGE","PLI","COLLE","AFFAIRE","BOITE","CASIER","CAISSE","TROUSSE","CARTABLE","JEU","JOUET","PION","DOMINO","PUZZLE",
"CUBE","PERLE","CHOSE","FORME","CARRE","ROND","PATE","MODELER","TAMPON","LIVRE","HISTOIRE","BIBLIOTHEQUE","IMAGE","ALBUM","TITRE","CONTE","DICTIONNAIRE",
"MAGAZINE","CATALOGUE","PAGE","LIGNE","MOT","ENVELOPPE","ETIQUETTE","CARTE","APPEL","AFFICHE","ALPHABET","APPAREIL","CAMESCOPE","CASSETTE","CHAINE","CHANSON",
"CHIFFRE","CONTRAIRE","DIFFERENCE","DOIGT","ECRAN","ECRITURE","FILM","FOIS","FOI","IDEE","INSTRUMENT","INTRUS","LETTRE","LISTE","MAGNETOSCOPE","MAIN","MICRO",
"MODELE","MUSIQUE","NOM","NOMBRE","ORCHESTRE","ORDINATEUR","PHOTO","POINT","POSTER","POUCE","PRENOM","QUESTION","RADIO","SENS","TAMBOUR","TELECOMMANDE",
"TELEPHONE","TELEVISION","TRAIT","TROMPETTE","VOIX","XYLOPHONE","ZERO","CHANTER","CHERCHER","CHOISIR","CHUCHOTER","COLLER","COLORIER","COMMENCER","COMPARER",
"COMPTER","CONSTRUIRE","CONTINUER","COPIER","COUPER","DECHIRER","DECOLLER","DECORER","DECOUPER","DEMOLIR","DESSINER","DIRE","DISCUTER","ECOUTER","ECRIRE",
"EFFACER","ENTENDRE","ENTOURER","ENVOYER","FAIRE","FINIR","FOUILLER","GOUTER","IMITER","LAISSER","LIRE","METTRE","MONTRER","OUVRIR","PARLER","PEINDRE",
"PLIER","POSER","PRENDRE","PREPARER","RANGER","RECITER","RECOMMENCER","REGARDER","REMETTRE","REPETER","REPONDRE","SENTIR","SOULIGNER","TAILLER","TENIR",
"TERMINER","TOUCHER","TRAVAILLER","TRIER","AMI","ATTENTION","CAMARADE","COLERE","COPAIN","COQUIN","DAME","DIRECTEUR","DIRECTRICE","DROIT","EFFORT","ELEVE",
"ENFANT","FATIGUE","FAUTE","FILLE","GARCON","GARDIEN","MADAME","MAITRE","MAITRESSE","MENSONGE","ORDRE","PERSONNE","RETARD","JOUEUR","SOURIRE","TRAVAIL",
"AIDER","DEFENDRE","DESOBEIR","DISTRIBUER","ECHANGER","EXPLIQUER","GRONDER","OBEIR","OBLIGER","PARTAGER","PRETER","PRIVER","PROMETTRE","PROGRES",
"PROGRESSER","PUNIR","QUITTER","RACONTER","EXPLIQUER","REFUSER","SEPARER","BLOND"] ; // liste contenant les mots à deviner

let nbMots = tabMots.length ; // nombre de mots à deviner possibles
let motDevine ; // mot à deviner
let tailleMot ; // taille du mot à deviner
let tabMotDevine = [] ; // On déclare un tableau vide que l'on remplira au fur et à mesure
let bonChoix = false ; // On initialise le choix
let nbErreurMax = 5 ; // Variable donnant le nombre maximum d'erreurs
let nbLettresTrouvees = 0 ; // Variable servant à compter le nombre de lettres trouvées
let fin = false ;  // variable servant à définir si la fonction touche() est finie
let finChoix = false ; // variable servant à définir que la fonction de choix du niveau est terminée

// Choisir un mot aléatoirement et définir sa taille :

motDevine = tabMots[Math.floor(Math.random()*nbMots)] ; 
tailleMot = motDevine.length ;
		
                
// Permet de changer la couleur des touches du clavier

function changeCouleur(element,couleur){
    element.style.backgroundColor=couleur;
}

// Permet de définir le niveau de difficulté

function difficulte(element) {
	if(element.style.backgroundColor=="black"  ||finChoix) return; // Lorsqu'une touche a déjà été cliquée, on ne peut plus revenir (pour éviter de cliquer plusieurs
	// fois sur la touche et de remettre le compteur d'erreurs à zéro).
	let niveau=element.innerHTML;
	if (niveau=="Facile") {
		nbErreurMax = 10
	}
	if (niveau=="Normal") {
		nbErreurMax = 8
	}
	if (niveau=="Difficile") {
		nbErreurMax = 5
	}
	console.log("nbErreurMax = "+nbErreurMax)
	changeCouleur(element,"black"); // On change la couleur deu niveau lorsqu'il a été sélectionné
	let message_erreur = document.getElementById("erreurs")
	message_erreur.innerHTML = "Tu as le droit à "+nbErreurMax+" erreurs." // Affiche le nombre d'erreurs possibles
	finChoix = true; // On met fin à true pour dire que la première fonction est terminée, elle ne sera plus utilisable 
}
                
// Gère tous les traitements à faire lorsqu'on appuie sur une touche du clavier

function touche(element){
                    
    // Si la couleur de fond est noire, c'est qu'on a déjà essayé - on quitte la fonction
    if(element.style.backgroundColor=="black" ||fin) return;
                    
    // On récupère la lettre du clavier et on met la touche en noir (pour signaler qu'elle a déjà été choisie)
    let lettre=element.innerHTML;
	console.log("lettre ="+lettre); // Me sert à vérifier que la lettre est bien sélectionnée en affichant la valeur de la variable dans la console
    changeCouleur(element,"black"); // On change la couleur de la lettre lorsqu'elle a été sélectionnée
                    
    // On met la variable trouve à false;
    let trouve=false;
                    
    // On parcours chaque lettre du mot, on cherche si on trouve la lettre séléectionnée au clavier
    for(let i=0; i<tailleMot; i++) {
                        
		// Si c'est le cas :
		if(tabMotDevine[i].innerHTML==lettre) {
			tabMotDevine[i].style.visibility='visible';    // On affiche la lettre
			trouve=true; // On a trouvé une bonne solution
			nbLettresTrouvees++; // On augmente le nombre de lettres trouvées
			console.log("Nombre de lettres trouvées = "+nbLettresTrouvees) // On affiche la variable dans la console pour vérifier que le code fonctionne
		}
                        
	}
                    
    // Si la lettre n'est pas présente, trouvé vaut toujours false :
    if(trouve == false){
        nbErreurMax = nbErreurMax-1; // On diminue le nombre maximum d'erreurs encore possible
		console.log("nbErreurMax = "+nbErreurMax) // Sert à vérifier dans la console que le nombre d'erreurs diminue et que le jeu s'arrête lorsqu'il est à 0
		
		// On affiche le décompte des erreurs possibles :
		let message_erreur = document.getElementById("erreurs")
		message_erreur.innerHTML = "Attention, tu n'as plus le droit qu'à "+nbErreurMax+" erreurs !" // On change le message à destination du joueur
                        
        // Si on épuisé le nombre d'erreurs possibles :
        if(nbErreurMax==0){
            alert("Game over !"); // La partie est perdue
            for(let i=0; i<tailleMot; i++) tabMotDevine[i].style.visibility='visible'; // on affiche la solution
                fin=true; //  on fini le jeu
            }
        }
		
		if(nbLettresTrouvees==tailleMot){
            alert("Bravo ! Tu as gagné !");
            fin=true; // Le mot est trouvé, la partie s'achève 
        }
}