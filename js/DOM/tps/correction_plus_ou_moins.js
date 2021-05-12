var nombreMystere;

/**
 * Code à appeler au moment de l'envoie du formulaire.
 * @param {Event} event L'événement de soumission du formulaire.
 */
function onSubmit(event) {
  // Annulation du comportement par défaut du formulaire (rechargement de la page).
  event.preventDefault();

  // Récupération de l'input permettant de saisir la valeur.
  var valeurInput = document.getElementById('nb');
  /*
   * Récupération de la valeur saisie (trim pour retirer les éventuels espaces)
   * La valeur retournée (par valeurInput.value) sera une chaîne de caractères.
   * Vaudra '' si aucune valeur n'a été saisie.
   */
  var valeurSaisie = valeurInput.value.trim();

  if (valeurSaisie) { // Si une valeur a bien étée renseignée.
    // Le + converti la chaîne en un nombre (obligatoirement un nombre grace au type="number" dans le HTML).
    traiterTentative(+valeurSaisie);
  } else {            // Si aucune valeur n'a été remplie.
    //(on aurait aussi pû mettre required sur l'input dans le HTML) plutôt qu'avoir ce code.

    alert('Merci de saisir une valeur');
  }

  valeurInput.value = ''; // RAZ de la valuer.
  valeurInput.focus(); // Force focus.
}

/**
 * Traîte une tentative de l'utilisateur.
 * Affiche dans la div le résultat pour la valeur.
 * @param {Number} valeurSaisie La valeur sélectionné comme tentative.
 */
function traiterTentative(valeurSaisie) {
  var div = document.getElementById('logs');
  var msg = 'la valeur ' + valeurSaisie + ' est ';
  var victoire = false;

  // Détermination de la valeur.
  if (valeurSaisie > nombreMystere) {
    msg += 'trop grande';
  } else if (valeurSaisie < nombreMystere) {
    msg += 'trop petite';
  } else { // Cas de victoire.
    msg += '<strong>la bonne</strong>';
    victoire = true;
  }

  // Affichage en console.
  console.log(msg);

  // Création de la balise de log (li).
  var li = document.createElement('li');
  li.innerHTML = msg;

  // Affichage dans la div.
  var ul;

  if(div.innerText.trim() === '') { // Si c'est la première valeur.
    ul = document.createElement('ul');

    ul.style.listStyle = 'none';

    div.appendChild(ul);
  } else {
    ul = div.getElementsByTagName('ul')[0];
    ul.style.listStyle = 'circle';
  }

  ul.appendChild(li);

  if (victoire) {
    traiterVictoire();
  }
}

function traiterVictoire() {
  var form = document.querySelector('form');

  // On cache le formulaire
  // (il est aussi possible de faire form.hidden = true mais cela provoquera un décalage dans la page).
  form.style.visibility = 'hidden';

  // On propose de jouer une nouvelle partie.
  if(confirm('Bravo, vous avez trouvé le nombre ' + nombreMystere + '\r\n. Voulez-vous rejouer ?')) {
    genererNbMystere();

    // Vider la div de logs.
    document.querySelector('#logs>ul').remove();

    // Ré-initialiser le formulaire.
    form.reset({});
    form.style.visibility = 'inherit';
    document.getElementById('nb').focus();
  }
}

/**
 * Génère le nombre mystere et le stock dans la variable globale nommé nombreMystere.
 */
function genererNbMystere() {
  nombreMystere = Math.ceil(Math.random() * 100);
}

// Initialisation de la page.
(function () {
  var form = document.querySelector('form');

  genererNbMystere();

  form.addEventListener('submit', onSubmit);
})();
