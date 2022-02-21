
let km = prompt('Km da percorrere?');
let age = prompt('Quanti anni hai?');
let outputEle = document.getElementById('my-output');

let pricePerKm = 0.21;
let totalPrice = pricePerKm*km;

// &&	and
// ||	or
// !	not

if (age < 18){
    totalPrice = totalPrice - 20%;
}

else if (age > 65){
    totalPrice = totalPrice - 40%;
}

document.getElementById("output").innerHTML = "Il prezzo è di " + totalPrice;




// let age1 = prompt('età 1:');
// let age2 = prompt('età 2:');
// let outputEle = document.getElementById('my-output');

// if (age1 > age2) {
//     outputEle.innerHTML = 'eta 1 maggiore';
// }

// else if (age1 < age2) {
//     outputEle.innerHTML = 'eta 2 maggiore';
// }

// else {
//     outputEle.innerHTML = 'eta uguale';
// }