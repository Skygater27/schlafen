const jetzt = new Date();
const stunden = jetzt.getHours();
const minuten = jetzt.getMinutes();

// Wir rechnen alles in Minuten um (Stunden * 60 + Minuten)
const aktuelleGesamtMinuten = stunden * 60 + minuten;
const zielZeitPunkt = 22 * 60 + 10; // 22:10 Uhr in Minuten = 1330

if (aktuelleGesamtMinuten <= zielZeitPunkt) {
    document.body.style.color = "white";
} else {
    document.body.style.color = "grey";
}


