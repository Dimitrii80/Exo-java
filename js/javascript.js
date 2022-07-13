// Exercice JS05 : Afficher du texte
var reponse1 = window.prompt("Saisissez votre Nom");
var reponse2 = window.prompt("Saisissez votre Prenom");

if ( confirm( "Etes-vous un homme ?" ) ){

window.alert("Bonjours Monsieur " + reponse1 + " " + reponse2 +  " \n\nBienvenue sur notre site web !");
}
else {
window.alert("Bonjours Madame " + reponse1 + " " + reponse2 + " \n\nBienvenue sur notre site web !");
}

// Exercice JS06 : Operateurs
var a = "100";
alert("Ceci est une chaîne de caractères: " + a );

var b = 100;
b == b--;
alert("b= " + b);

var c = 1.00;
c = c + a; 
alert("c= " + c);

var d = true;
d = !d;
alert("d=" + d);

// Exercice JS 07 : Exercice 1 - Parité
var nb = window.prompt("Entrez un nombre");
if (nb%2 == 0 )
{
alert("Nombre pair");
}
else
{
alert("Nombre impair");
}
// Exercice JS 07 : Exercice 2 - Age
var age = window.prompt("saisissez votre année de naissance");
var age = 2022 - age

if (age < 18)
{
    alert("Vous avez" + " " + age + " ans" + "\nVous etes mineur")
}
else
{
    alert("Vous avez" + " " + age + " ans" + "\nVous etes majeur")
}

// Exercice JS 07 : Exercice 3 - Calculette
var nb1 = parseInt (window.prompt("saisissez un nombre"))
var nb2 = parseInt (window.prompt("saisissez un second nombre"))
var op = window.prompt("saisissez un operateur")

if (op != "+" && op != "*" && op != "/" && op != "-" || nb2 == 0)
{
    alert("erreur !");
}
else
{
switch (op)
{
    case "+" :
        alert ( nb1 + nb2 );
    break;

    case "-" :
        alert ( nb1 - nb2 );
    break;

    case "*" :
      alert ( nb1 * nb2 );
    break;
    
    case "/" : 
        alert ( nb1 / nb2 );
    break;

}
}

// Exercice JS 08 : les boucles ex 1
var i = 0
var prenom

do 
{
   i++;
  
  prenom = prompt("saisissez le prenom N°:"+i+"\nou Clic sur Annuler pour arrêter la saisie.");
	
 
	
}
while (prenom != "" ) ;

console.log ("Vous avez entrez : " + i-- + " prenoms " + liste)


// Exercice 2
var N = parseInt (window.prompt("saisissez un nombre"))
var i = 0;

for (i=0; i <= N; N--)
  {
    console.log(N);
  }

// Exercice 4
var N = prompt ("entrez un nombre");
var X = prompt ("entrez un second nombre");
i = 1;

while (i<=N)
  {
     console.log (i + " x "+ X + " = "+ i * X);
    i++;
    
  }

  // Exercice 4 seconde option
  var N = prompt ("entrez un nombre");
var X = prompt ("entrez un second nombre");

for (i=1; i<=N; i++)
  {
    console.log (i + " x "+ X + " = "+ i * X);
  }



//EVAL EXERCICE 1
var age = parseInt (window.prompt("saisissez un age"))
var i = 0;
var j = 0;
var k = 0;
var l = 0;
while (age<=100)
{
  
	
  if (age<20)
    {
      i++
    }
 if (age>=20 && age<=40)
   {
     j++
   }
	if (age>=40 && age<=100)
	{
  	k++
	}
  
  age = (window.prompt("saisissez un age"))

}
if (age>100)
  {
    l++
  }

console.log("il y a "+ i + " personnes de -20 ans")
console.log("il y a "+ j + " personnes comprises en 20 et 40 ans")
console.log("il y a "+ k + " personnes de + de 40 ans et de moins de 100ans")
console.log("il y a "+ l + " centenaire")


// EVAL EXERCICE 2 
function table(nombre)
{
var i;
for (i=1; i<=10; i++)
{
console.log(i+" x "+nombre+" = "+nombre*i);
} 
}
table(3)

// EVAL EXERCICE 3
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var nom = prompt("Entrez un prénom");

  if (tab.indexOf(nom) > -1)
   {
    var indice = tab.indexOf(nom);
    tab.splice(indice, 1);
    tab.push(" ");
    
  } 

  else 
  {
    alert("Le prénom n'est pas trouvé");
    
  }
console.log(tab)

// Eval exercice 4
var PU = parseInt (prompt("entrez le prix unitaire"));
var QTECOM = parseInt (prompt("entrez la quantite commandée"));
var PAP = parseInt;
var REM = 0.02;
var PORT;
var TOT;

TOT = (PU * QTECOM)
if (TOT >=100 && TOT<=200)
  {
    TOT = TOT * 0.95
  }
if (TOT > 200)
  {
    TOT = TOT * 0.9
  }
if (TOT < 500)
  {
    TOT = TOT + TOT * REM
  }
if (REM * TOT <= 6)
	{
    REM = REM * TOT
    TOT = TOT + 6
  	TOT = TOT - REM
  }

console.log(TOT)