// Wartet, bis das gesamte HTML geladen ist
window.addEventListener('load', () => {
    
    // PWA Registrierung
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }

    let sekunden = 0;
    const anzeige = document.getElementById('zaehler-anzeige');

    if (anzeige) {
        setInterval(() => {
            sekunden++;
            anzeige.innerText = sekunden;
            console.log("Sekunden:", sekunden);
        }, 1000);
    } else {
        console.error("Fehler: Das Element 'zaehler-anzeige' wurde nicht gefunden!");
    }
});