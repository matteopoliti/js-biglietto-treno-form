let nomePersona = document.getElementById("name");

let kmPercorsi = document.getElementById("km");

const costoKm = 0.21;

const buttonHtml = document.getElementById("button");

const risultatoHtml = document.getElementById("risultato");

let prezzoBiglietto = costoKm * kmPercorsi;

let eta = document.getElementById("mySelect");

buttonHtml.addEventListener( "click", function(){

    console.log(nomePersona.value, kmPercorsi.value, costoKm, prezzoBiglietto, eta.value)
    if( eta.value == minorenne){
        prezzoBiglietto = prezzoBiglietto * 0.8
        risultatoHtml.innerHTML = `il prezzo è ${prezzoBiglietto}`
    }
    else if( eta.value == over){
        prezzoBiglietto = prezzoBiglietto * 0.4
        risultatoHtml.innerHTML = `il prezzo è ${prezzoBiglietto}`
    }
    else {
        risultatoHtml.innerHTML = `il prezzo è ${prezzoBiglietto}`
    }

} )