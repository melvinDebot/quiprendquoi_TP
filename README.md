# QUIPRENDQUOI 
## Instalation 
`
npm install
`

`
npm run start
`

## Améloiration appotés
* Affichage de la liste des items
* Ajout d'item sur la page d'évènement
* Supression de l'item
* Redesign ajout d'une feuille de style

## Article personnel
### Sujet : Vibration API
La vibration est décrite comme une série de marche-arrêt des impulsions, qui peuvent être de durées différentes. La série peut être soit un entier décrivant le nombre de millisecondes à vibrer ou un tableau d'entiers décrivant une série de pauses et de vibrations. La vibration est contrôlée par une seule méthode: Navigator.vibrate().

#### Code via MDN
```
var vibrateInterval;

// Démarre une vibration avec une durée
function startVibrate(duration) {
    navigator.vibrate(duration);
}

// Arrête la vibration
function stopVibrate() {
    // Vide l'intervalle et annule les vibrations persistantes
    if(vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
}

// Démarre la vibration persistante avec un intervalle et une durée donnée
function startPeristentVibrate(duration, interval) {
    vibrateInterval = setInterval(function() {
        startVibrate(duration);
    }, interval);
}
```
Je trouve cela pertinent car au niveau UX la vibration permet de renvoyer à l'utilisateur un sentiment d'accomplissement c'est pour cela que je l'ai ajouté sur le bouton créé, que lorsque l'utilisateur créera son événement il aura un retour comme quoi sa demande a bien été pris en compte 
