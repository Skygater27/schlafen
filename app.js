const jetzt = new Date();
const stunden = jetzt.getHours();
const minuten = jetzt.getMinutes();

// Wir rechnen alles in Minuten um (Stunden * 60 + Minuten)
const aktuelleGesamtMinuten = stunden * 60 + minuten;
const zielZeitPunkt = 23 * 60 + 45; // 22:45 Uhr in Minuten = 1330

if (aktuelleGesamtMinuten <= zielZeitPunkt) {
    document.body.style.color = "white";
    console.log("White");
} else {    
    document.body.style.color = "grey";
    console.log("White");
}   





