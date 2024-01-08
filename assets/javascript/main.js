let nomePersona = document.getElementById("name");

let kmPercorsi = document.getElementById("km");

const costoKm = 0.21;

const buttonHtml = document.getElementById("button");

const risultatoHtml = document.getElementById("risultato");

let prezzoBiglietto = costoKm * kmPercorsi;

buttonHtml.addEventListener( "click", function(){

    console.log(nomePersona.value, kmPercorsi.value, costoKm, prezzoBiglietto)

} )