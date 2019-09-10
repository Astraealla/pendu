let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");


//dessiner la potence
ctx.beginPath();
ctx.lineWidth=7;
ctx.strokeStyle="#6c4020";
ctx.moveTo(250, 350); 
ctx.lineTo(100, 350); //premier ligne, base de la potence
ctx.moveTo(150, 50);
ctx.lineTo(150, 350); //mât de la potence
ctx.moveTo(450, 50);
ctx.lineTo(150,  50); //tête de la potence
ctx.moveTo(150, 125);
ctx.lineTo(185, 50); //barre transversale
ctx.stroke();

//dessiner la corde
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="#f74a48";
ctx.moveTo(350, 50);
ctx.lineTo(350, 105);
ctx.stroke();

//dessiner le personnage
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="#f5a3cc";
ctx.arc(350, 125, 20, 0, 2*Math.PI); // tête du personnage
ctx.stroke();
ctx.strokeStyle="#40aa88";
ctx.moveTo(350, 145);
ctx.lineTo(350, 225); //corps du personnage
ctx.stroke();
ctx.moveTo(350, 150);
ctx.lineTo(325, 200); //bras gauche
ctx.stroke();
ctx.moveTo(350, 150);
ctx.lineTo(400, 200); //bras droit
ctx.stroke();
ctx.moveTo(350, 225);
ctx.lineTo(300, 300); //jambe gauche
ctx.stroke();
ctx.moveTo(350, 225);
ctx.lineTo(400, 300);
ctx.stroke();
