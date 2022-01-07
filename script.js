
let vraagNaam; 
let vraagGetal; 
let randomNumber;
let antwoord;

vraagNaam = prompt ("Welkom bij Guess the Number! Wat is jouw naam?")

alert ("Hallo " + vraagNaam + "!")

vraagGetal = parseInt(prompt ("Vul een getal in tussen de 0 en 25 en begin met raden!"))

randomNumber = Math.floor(Math.random() * 26)

alert("Het getal dat je hebt ingevoerd, is " + vraagGetal +  ". Het juiste getal is " + randomNumber + ".")

if (randomNumber === vraagGetal) {
  alert("Je hebt gewonnen! Je hebt het juiste nummer geraden!  Tot ziens" + vraagNaam + "!")
 } else {
  alert("Helaas. Je hebt het verkeerde nummer geraden.")
  antwoord = prompt("Wil je het spel nog een keer spelen? Vul in 'ja' of 'nee'").toLowerCase()
   }

if (antwoord === 'ja'){
   alert("Herlaad de pagina en speel opnieuw!")
} else if(antwoord === 'nee') {
   alert("Bedankt voor het meespelen " + vraagNaam + "!")
} else {
  alert("error")
}
