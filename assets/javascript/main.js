const nomePersona = document.getElementById("name");
const kmPercorsi = document.getElementById("km");
const eta = document.getElementById("mySelect");
const buttonHtml = document.getElementById("button");
const carrozzaHtml = document.getElementById("carrozza");
const codiceCpHtml = document.getElementById("codPostale");
const risultatoNomeCognomeHtml = document.getElementById("risultatoNomeCognome");
const risultatoBigliettoHtml = document.getElementById("biglietto");
const risultatoPrezzoHtml = document.getElementById("risultato")
const costoKm = 0.21;



buttonHtml.addEventListener( "click", function(){
    document.querySelector("h2").classList.remove("d-none")
    document.querySelector("div.d-none").classList.remove("d-none")

    let codiceCarrozza = RandomNumber( 0, 10)
    let codiceCp = RandomNumber( 100, 10000)

    carrozzaHtml.innerHTML = codiceCarrozza
    codiceCpHtml.innerHTML = codiceCp

    risultatoNomeCognomeHtml.innerHTML = nomePersona.value

    if( eta.value === "minorenne"){
        
        risultatoBigliettoHtml.innerHTML = 'Biglietto under 18'

        risultatoPrezzoHtml.innerHTML = ((kmPercorsi.value * costoKm) * 0.8).toFixed(2) + "€"
    }
    else if( eta.value === "maggiorenne"){
        
        risultatoBigliettoHtml.innerHTML = 'Biglietto standard'

        risultatoPrezzoHtml.innerHTML = (kmPercorsi.value * costoKm).toFixed(2) + "€"
    }
    else if( eta.value === "over") {
        risultatoBigliettoHtml.innerHTML = 'Biglietto over 65'

        risultatoPrezzoHtml.innerHTML = ((kmPercorsi.value * costoKm) * 0.6).toFixed(2) + "€"
    }
    

} )

document.getElementById("ricaricaButton").addEventListener("click", ricaricaPagina);



function RandomNumber (min, max){
    return Math.floor( Math.random()*(max - min + 1) + min)
}

function ricaricaPagina() {
    location.reload();
}