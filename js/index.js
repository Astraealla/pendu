let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
let tries = 0;

// //words table
let wordsTab = [
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

console.log(wordsTab);

let bt = document.getElementById("newparty"); //getting the new party button

//function to start a new party each time we click on the new party button
function Start(){

    window.location.reload();
}

bt.addEventListener("click", Start);
let screen = document.getElementById("screen"); // getting the screen
let word = wordsTab[Math.floor(Math.random() * wordsTab.length)]; //generating the words randomly
console.log(word);


//transforming the generated words as underscore 
    for (let i = 0; i < word.length; i++){
    screen.innerHTML += "_";
    }

// Chosen letters by the player

let btn = document.getElementsByClassName("bt"); //getting the letters


for (let i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click", getAnswer); //displaying the getAnswer function at the click of the button
}

//getting the table's indexes

function getIndex(letter){
    let indexes = [];

    for(i = 0; i < word.length; i++){
        if (letter === word[i]){  //if the letter equal one of the words' indexes in the table
            indexes.push([i]) // then we "push" the indexes in the indexes variable
        }
    }
    return indexes; // and we return the indexes variable
}

//replace the underscores when the letters are true
function getReplace(index, letter) //calling the letter
{
    let scr = screen.textContent;
    let temp = scr.substr(0, index) + letter + scr.substr(index + 1); //calling the string from 0 to the index to replace the found letter
    screen.textContent = temp; //the screen content will become what's in the temp variable
}

function getAnswer(){
    let indexes = getIndex(this.value); //calling the indexes
    if(indexes.length > 0)
    {
        console.log(indexes);
        for(let i = 0; i < indexes.length; i++)
        {
            getReplace(indexes[i], this.value) //calling the getReplace function to change the underscore if the letters are true
        } }
        else {
            console.log("You're wrong");
            tries++;
        }
        //if the letters are wrong, the hangman will start being drew
        switch(tries){
            case 1: 
            ctx.beginPath();
            ctx.lineWidth=7;
            ctx.strokeStyle="#6c4020";
            ctx.moveTo(250, 350); 
            ctx.lineTo(100, 350); //first lign, foot of the gallow
            ctx.stroke();
            break;
        
            case 2: 
            ctx.beginPath();
            ctx.lineWidth=7;
            ctx.strokeStyle="#6c4020";
            ctx.moveTo(150, 50);
            ctx.lineTo(150, 350); //gallow's mast
            ctx.stroke();
            break;
        
            case 3: 
            ctx.beginPath();
            ctx.lineWidth=7;
            ctx.strokeStyle="#6c4020";
            ctx.moveTo(450, 50);
            ctx.lineTo(150,  50); //gallow's head
            ctx.stroke();
            break;
        
            case 4:
            ctx.beginPath();
            ctx.lineWidth=7;
            ctx.strokeStyle="#6c4020";
            ctx.moveTo(150, 125);
            ctx.lineTo(185, 50); //crossbar
            ctx.stroke();
            break;
        
            case 5: //drawing the rope
            ctx.beginPath();
            ctx.lineWidth=5;
            ctx.strokeStyle="#f74a48";
            ctx.moveTo(350, 50);
            ctx.lineTo(350, 105);
            ctx.stroke();
            break;
        
                //drawing the character
            case 6: 
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="#f5a3cc";
            ctx.arc(350, 125, 20, 0, 2*Math.PI); // character's head
            ctx.stroke();
            break;
        
            case 7: 
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="#40aa88";
            ctx.moveTo(350, 145);
            ctx.lineTo(350, 225); //character's body
            ctx.stroke();
            break;
        
            case 8: 
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="#40aa88";
            ctx.moveTo(350, 150);
            ctx.lineTo(325, 200); //left arm
            ctx.stroke();
            break;
        
            case 9: 
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="#40aa88";
            ctx.moveTo(350, 150);
            ctx.lineTo(400, 200); //right arm
            ctx.stroke();
            break;
        
            case 10: 
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="#40aa88";
            ctx.moveTo(350, 225);
            ctx.lineTo(300, 300); //left leg
            ctx.stroke();
            break;
        
            case 11: 
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="#40aa88";
            ctx.moveTo(350, 225);
            ctx.lineTo(400, 300); //right leg
            ctx.stroke();
            break;
        }
    }
















    









// |
// |
// |
// |
// |
// |
// v

// Tout ce qui n'a pas fonctionné







// let word = "MERCI"
// function displayText()
// {
//     let random = generateRandomNumber(words.length); // générer les mots du tableau de façon random
//     wrd.textContent = words[random]; //afficher les mots random sur l'écran
// }

// function generateRandomNumber(max)
// {
        
//     return Math.floor(Math.random() * max);
    
// }

// bt.addEventListener("click", displayText); //au clic, afficher le mot random sur l'écran


// Générer des _ selon la longueur des mots

// let underScore = [];
// // function createUnderScore(){
//     for (let i = 0; i < words.length; i++){
//         // let random = generateRandomNumber(words.length);
//         // wrd.textContent = words[random];
//         underScore.push("_");
//     }
//     return underScore;
// }

// console.log(createUnderScore());
// wrd.textContent = createUnderScore();
// bt.addEventListener("click", createUnderScore);

// let reponse

// function createUnderScore(){
//     reponse = "";
//     for (let i; i < words.length; i++)
//     {
//         reponse += "_";
//     }
//     document.index.reponse_wrd.value = reponse;
// }


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