"use strict"

const els = {
    score: null, // Élément qui affiche le score
    reponse: null, // Élément qui affiche la réponse (mot à deviner)
    choix: null // Élément qui affiche les choix de lettres disponibles
  };
  
  const words = [
    "JAVASCRIPT", // Mot [0]
    "STYLESHEET", // Mot [1]
    "LANGUE" // Mot [2]
  ];
  
  let choix = []; // Tableau qui contient les lettres de l'alphabet
  let word = ""; // Mot à deviner
  let wordMapping = []; // Mapping des lettres du mot
  let choixMapping = []; // Mapping des lettres de l'alphabet
  let scoreCount = 0; // Nombre de tentatives actuelles
  let maxScore = 8; // Nombre maximum de tentatives autorisées
  
  const init = () => {
    // Récupère les éléments qui affichent le score, la réponse et les choix de lettres
    els.score = document.querySelector("#score");
    els.reponse = document.querySelector("#reponse");
    els.choix = document.querySelector("#choix");
  
    // Choisit un mot aléatoirement
    word = pickWord();
  
    // Crée la mapping des lettres du mot
    wordMapping = getWordMapping(word);
  
    // Génère le tableau des lettres de l'alphabet
    choix = generateChoix();
  
    // Crée la mapping des lettres de l'alphabet
    choixMapping = getChoixMapping(choix);
  
    // Affiche le mot à deviner et les choix de lettres disponibles
    displayWord(wordMapping);
    displayChoix(choixMapping);
  
    // Ajoute un écouteur d'événement sur l'élément qui affiche les choix de lettres
    els.choix.addEventListener("click", ({ target }) => {
      // Si l'élément cliqué est une liste HTML
      if (target.matches("li")) {
        // Vérifie si la lettre choisie est présente dans le mot à deviner
        checkLetter(target.innerHTML);
      }
    });
  };

  // Ajoute un écouteur d'événement sur l'objet document pour détecter les pressions de touche
document.addEventListener("keydown", ({ keyCode }) => {
    // Convertit le code de la touche en lettre
    const letter = String.fromCharCode(keyCode);
  
    // Si le code de la touche est compris entre 65 et 90 (codes ASCII de A à Z)
    if (keyCode >= 65 && keyCode <= 90) {
      // Vérifie si la lettre choisie est présente dans le mot à deviner
      checkLetter(letter);
    }
  });
  
  // Fonction qui vérifie si la lettre choisie est présente dans le mot à deviner
  const checkLetter = (letter) => {
    // Indique si la lettre choisie est présente dans le mot à deviner
    let isLetterInWord = false;
  
    // Parcours toutes les lettres du mot
    wordMapping.forEach((letterMapping) => {
      // Si la lettre du mot correspond à la lettre choisie
      if (letterMapping.letter === letter) {
        // Rend la lettre visible
        letterMapping.isVisible = true;
  
        // Indique que la lettre est présente dans le mot
        isLetterInWord = true;
      }
    });
  
    // Parcours toutes les lettres de l'alphabet
    choixMapping.forEach((letterMapping) => {
      // Si la lettre de l'alphabet correspond à la lettre choisie
      if (letterMapping.letter === letter) {
        // Indique que la lettre a déjà été choisie
        letterMapping.isChosen = true;
      }
    });
  
    // Si la lettre choisie est présente dans le mot
    if (isLetterInWord) {
      // Affiche le mot à deviner
      displayWord(wordMapping);
    } else {
      // Incrémente le nombre de tentatives
      scoreCount++;
  
      // Affiche le score
      displayScore();
    }
  
    // Si le nombre de tentatives atteint le maximum autorisé
    if (scoreCount === maxScore) {
      // Fin de la partie avec défaite
      endGame();
    }
  
    // Si toutes les lettres du mot ont été trouvées
    if (isAllLettersFound()) {
      // Fin de la partie avec victoire
      winGame();
    }
  };
  
  // Fonction qui vérifie si toutes les lettres du mot ont été trouvées
  const isAllLettersFound = () => {
    let allLettersFound = true;
  
    // Parcours toutes les lettres du mot
    wordMapping.forEach((letterMapping) => {
      // Si une lettre du mot n'est pas visible
      if (!letterMapping.isVisible) {
        // Toutes les lettres du mot ne sont pas encore trouvées
        allLettersFound = false;
      }
    });
  
    return allLettersFound;
  };
  
  // Fonction qui affiche le message de fin de partie en cas de défaite
  const endGame = () => {
    
    wordMapping.forEach(w => w.isVisible = true);
    
    displayWord(wordMapping);
  
    
    document.querySelector("body").style.backgroundColor = "red";
  
    // Display game over message
    els.choix.innerHTML = `<h1>Vous êtes mort !</h1>`;
  };
 // Fonction qui affiche le message de fin de partie en cas de victoire
const winGame = () => {
    // Change la couleur de fond du document en vert
    document.querySelector("body").style.backgroundColor = "green";
  
    // Affiche le message de victoire
    els.choix.innerHTML = `<h1>Vous avez gagné bravo !</h1>`;
  };
  
  // Ajoute un écouteur d'événement sur l'objet window pour détecter le chargement de la page
  window.addEventListener("load", () => {
    // Initialise le jeu
    init();
  });
  
  // Fonction qui retourne un entier aléatoire compris entre min et max
  const getRandomInt = (min, max) => {
    // Arrondit le minimum au nombre entier supérieur
    min = Math.ceil(min);
    // Arrondit le maximum au nombre entier inférieur
    max = Math.floor(max);
  
    // Retourne un entier aléatoire compris entre min et max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };