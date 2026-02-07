const optionen = {
  timeZone: 'Europe/Berlin', // Explizit für Deutschland
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

const deZeit = new Date().toLocaleString('de-DE', optionen);
console.log("In Deutschland ist es: " + deZeit);
