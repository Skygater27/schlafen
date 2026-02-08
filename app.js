function checkTime() {
    const jetzt = new Date();
    const stunden = jetzt.getHours();
    const minuten = jetzt.getMinutes();
    
    // Wir rechnen alles in Minuten um (Stunden * 60 + Minuten)
    const aktuelleGesamtMinuten = stunden * 60 + minuten;
    const aufstehZeit = 6 * 60 + 0; // 6:00 Uhr in Minuten = 360
    const schlafensZeit = 21 * 60 + 30;

    const body = document.body;
    // Aufstehen
    if (aktuelleGesamtMinuten >= aufstehZeit && aktuelleGesamtMinuten < schlafensZeit) {
        body.style.backgroundColor = "#ffffff";
        console.log("White");
    } else { // Schlafen   
        body.style.backgroundColor = "#000000";
        console.log("Black");
    }   
}    

// WICHTIG: Die Funktion ausführen, sobald die Seite geladen hat
window.addEventListener('DOMContentLoaded', () => {
    checkTime();
});
