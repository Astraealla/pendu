//tableau de mots
let words = [
    "MERCI",
    "RIGOLO",
    "TRAIN",
    "HEURE",
    "JEU",
    "BOUTEILLE",
    "CAHIER",
    "CRAYON",
    "NUL",
    "TABLE",
    "ORDINATEUR",
    "SAC",
    "TASSE"
];


// fonction pour afficher les mots de façon random

let bt = document.getElementById("newparty"); //récupérer le bouton Nouvelle Partie
let wrd = document.getElementById("screen"); // récupérer l'écran

function displayText()
{
    let random = generateRandomNumber(words.length); // générer les mots du tableau de façon random
    wrd.textContent = words[random]; //afficher les mots random sur l'écran
}

function generateRandomNumber(max)
{
    return Math.floor(Math.random() * max);
}

bt.addEventListener("click", displayText); //au clic, afficher le mot random sur l'écran
console.log(generateRandomNumber);

// Générer des _ selon la longueur des mots

let underScore = [];
function createUnderScore(){
    for (let i = 0; i < words.length; i++){
        // let random = generateRandomNumber(words.length);
        // wrd.textContent = words[random];
        underScore.push("_");
    }
    return underScore;
}

console.log(createUnderScore());
wrd.textContent = createUnderScore();
bt.addEventListener("click", createUnderScore);


// Les lettres choisies par le joueur

let letters = document.getElementById("letter").value; //récupérer le champ de texte
console.log(letters);
let submit = document.getElementById("btn"); // récupérer le bouton Envoyer

function displayLetter(){
    
    wrd.textContent = letters;
}

submit.addEventListener("click", displayLetter);

// si bonnes lettres


// si mauvaises lettres



















// for( let i =0; i < bt.length; i++)
// {
//    
//     bt[i].addEventListener("click", afficherText);
//     console.log(afficherText);
// }


// |
// |
// v
//Bien essayé
// function transformWords()
// {
//     wrd.textContent = "_";
// }

// function displayNewWord()
// {
//     let wrd = document.getElementById("screen");
//     let random = generateRandomNumber(words.length);
//     wrd.textContent = words[random];

//     console.log(wrd);
// }

// let bt = document.getElementsByClassName("bt");
// bt.addEventListener("click", displayNewWord);

