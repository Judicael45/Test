"use strict";

const displayChoix = (choixMapping) => {
  // Récupère la liste HTML qui se trouve dans l'élément choix
  const choixList = els.choix.querySelector("ul");

  // Crée une liste HTML en utilisant la mapping des choix
  const choixHTML = choixMapping.map((letterMapping) => {
    if (letterMapping.isChosen === false) {
      return `<li>${letterMapping.letter}</li>`;
    } else {
      return `<li class="disabled">${letterMapping.letter}</li>`;
    }
  });

  // Met à jour le contenu de la liste HTML avec la nouvelle liste HTML
  choixList.innerHTML = choixHTML.join("");
};

const displayScore = () => {
    // Récupère l'élément qui affiche le score
    const scoreElement = els.score;
  
    // Met à jour le contenu de l'élément avec l'image du score actuel
    scoreElement.innerHTML = `<img src="/img/00${scoreCount}.png" alt="pendu" />`;
  };

const displayWord = (wordMapping) => {
  // Récupère la liste HTML qui se trouve dans l'élément reponse
  const wordList = els.reponse.querySelector("ul");

  // Crée une liste HTML en utilisant la mapping des lettres du mot
  const worldHtml = wordMapping.map((letterMapping) => {
    if (letterMapping.isVisible === true) {
      return `<li>${letterMapping.letter}</li>`;
    } else {
      return `<li>_</li>`;
    }
  });

  // Met à jour le contenu de la liste HTML avec la nouvelle liste HTML
  wordList.innerHTML = worldHtml.join("");
};






function generateChoix() {
    // Crée un tableau vide qui va contenir les lettres de l'alphabet
    const choix = [];
  
    // Parcours tous les codes ASCII de A à Z (65 à 90 en ASCII)
    for (let index = 65; index <= 90; index++) {
      // Convertit le code ASCII en lettre et l'ajoute au tableau
      choix.push(String.fromCharCode(index));
    }
  
    // Renvoie le tableau des lettres
    return choix;
  }
  
  const getChoixMapping = (choix) => {
    // Crée une mapping pour chaque lettre du tableau de choix
    const choixMapping = choix.map((letter) => {
      return {
        letter, // Lettre
        isChosen: false, // Indique si la lettre a déjà été choisie ou non
      };
    });
  
    // Renvoie la mapping des lettres
    return choixMapping;
  };
  
  const getWordMapping = (word) => {
    // Convertit le mot en tableau de lettres
    const wordArr = word.split("");
  
    // Crée une mapping pour chaque lettre du mot
    const wordMapping = wordArr.map((letter, index) => {
      // Indique si la lettre doit être visible ou non
      let isVisible = false;
      if (index === 0 || index === wordArr.length - 1) {
        isVisible = true;
      }
  
      return {
        letter, // Lettre
        isVisible, // Indique si la lettre doit être affichée ou non
      };
    });
  
    // Renvoie la mapping des lettres
    return wordMapping;
  };
  
  const pickWord = () => {
    // Génère un entier aléatoire entre 0 et la longueur du tableau de mots - 1
    const randomIndex = getRandomInt(0, words.length - 1);
  
    // Renvoie le mot correspondant à l'index aléatoire généré
    return words[randomIndex];
  };