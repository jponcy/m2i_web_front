
/**
 * Demande à l'utilisateur de saisir un nombre [1;100].
 * @returns {Number} Le nombre saisie par l'utilisateur.
 * @throws {Error} si l'utilisateur n'a pas saisie un nombre valide (par exemple : 'toto', '1.2.3').
 * @see #saisirNombreRecursive
 */
function saisirNombre() {
  var saisie = window.prompt('Merci de saisir un nombre entre 1 et 100 :'); // Ou simplement prompt();

  if (isNaN(saisie)) {
    throw new Error('La valeur saisie n\'est pas un nombre');
  }

  return +saisie;
}

/**
 * Demande à l'utilisateur de saisir un nombre.
 * La fonction sera appelée de nouveau tant que l'utilisateur n'a pas saisie un nombre valide (Recursion).
 * @returns {Number} Le nombre saisie.
 */
function saisirNombreRecursive() {
  var saisie = window.prompt('Merci de saisir un nombre entre 1 et 100 :'); // Ou simplement prompt();

  // Il ne faut JAMAIS oublier de mettre une condition de fin lorsque l'on créé une fonction récursive.
  if (!saisie || isNaN(saisie)) {
    alert('La valeur saisie n\'est pas un nombre');
    saisie = saisirNombreRecursive(); // Appel récursif.
  } else {
    saisie = +saisie;
  }

  return saisie;
}

/**
 * Demande à l'utilisateur de saisir un nombre.
 * @returns {Number} Le nombre saisie.
 */
function saisirNombreBoucleDoWhile() {
  var retour;

  do {
    retour = prompt('Merci de saisir un nombre entre 1 et 100 :');
  } while (!retour || isNaN(retour));

  return retour;
}

/**
 * Demande à l'utilisateur de saisir un nombre.
 * @returns {Number} Le nombre saisie.
 */
function saisirNombreBoucleWhile() {
  var retour = prompt('Merci de saisir un nombre entre 1 et 100 :');

  while (!retour || isNaN(retour)) {
    retour = prompt('La valeur saisie n\'est pas valide. Merci de saisir un nombre entre 1 et 100 :');
  }

  return retour;
}



/**
 * Génère un nombre aléatoire [1;100].
 * @returns {Number} Le nombre généré.
 */
function genererNombreMystere(mys) {
  var mystere = Math.floor(Math.random() * 100) + 1;

  console.log('Le nombre à trouver est : ' + mystere);

  return mystere;
}

/**
 * Lancer une partie dans laquelle il faut trouver le nombre mystère.
 * Le nombre sera généré au début de l'appel.
 */
function jouer() {
  var mystere = genererNombreMystere();
  // var nb = saisirNombre();
  var nb = saisirNombreRecursive();

  if (nb === mystere) {
    alert('Bravo, vous avez trouvé le nombre mystère !');
  } else {
    alert('Vous avez perdu !');
  }
}

// Appel du code.
jouer();
