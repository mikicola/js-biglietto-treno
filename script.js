let km = prompt("Km da percorrere?");
let age = prompt("Quanti anni hai?");

let pricePerKm = 0.21;
let totalPrice = pricePerKm * km;

if ((km) && (age)){
  if(age < 18){
    totalPrice = (totalPrice * 20) / 100;
  }else if(age > 65){
    totalPrice = (totalPrice * 40) / 100;
  }


    document.getElementById("my-output").innerHTML = "Il prezzo totale è " + totalPrice + "€.";
}else{
    document.getElementById("my-output").innerHTML = "Errore. Aggiorna la pagina e rispondi alle domande a schermo.";
}


// &&	and
// ||	or
// !	not
