function checkTime() {
    const jetzt = new Date();
    const stunden = jetzt.getHours();
    const minuten = jetzt.getMinutes();
    
    const aktuelleGesamtMinuten = stunden * 60 + minuten;
    const aufstehZeit = 5 * 60 + 0;
    const grauZeit = 4 * 60 + 15;
    const schlafensZeit = 21 * 60 + 30;

    const body = document.body;
    
    if (aktuelleGesamtMinuten >= aufstehZeit && aktuelleGesamtMinuten < schlafensZeit) {
        body.style.backgroundColor = "#ffffff"; // Weiß
    } else if (aktuelleGesamtMinuten >= grauZeit) {
        body.style.backgroundColor = "#888888"; // Grau
    } else {
        body.style.backgroundColor = "#000000"; // Schwarz
    }
} 


window.addEventListener('DOMContentLoaded', () => {
    checkTime();
});


