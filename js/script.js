var newCognome = prompt('Inserisci il tuo cognome');
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var outputCognomi = document.getElementById('outputCognomi');
listaCognomi.push(newCognome);
listaCognomi.sort();

var contenutoPrecedente;

for (var i = 0; i < listaCognomi.length; i++) {

  contenutoPrecedente = outputCognomi.innerHTML;
  outputCognomi.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';}

  document.getElementById('posizione').innerText = 'La posizione é:' + (listaCognomi.indexOf(newCognome)+1);
