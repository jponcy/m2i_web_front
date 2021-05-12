function exercice1_1() {
  var valeur = 42;

  if (valeur >= 0) {
    window.alert('valeur positive');
  } else {
    window.alert('valeur négative');
  }
}

function exercice1_2() {
  var valeur = 42;
  var message = 'valeur ';

  if (valeur >= 0) {
    message += 'positive';
  } else {
    message += 'négative';
  }

  window.alert(message);
}

function exercice1_3() {
  var valeur = 42;
  var message = valeur >= 0 ? 'valeur positive' : 'valeur négative';

  window.alert(message);
}

function exercice1_4() {
  var valeur = 42;
  var message = 'valeur ' + (valeur >= 0 ? 'positive' : 'négative');

  window.alert(message);
}

function exercice1_5() {
  var valeur = 42;

  window.alert('valeur ' + (valeur >= 0 ? 'positive' : 'négative'));
}


// Exercice 2

function exercice2_1() {
  var valeur = Math.ceil(Math.random() * 100) - 50;
  var message = 'la valeur ' + valeur + ' est ';

  if (valeur > 0) {
    message += 'strictement positive';
  } else if (valeur < 0) {
    message += 'strictement négative';
  } else { // valeur === 0
    message += 'égale à 0';
  }

  window.alert(message);
}

/*
 * Faire des ternaire imbriquées devient vite complexe à lire.
 */
function exercice2_2() {
  var valeur = Math.ceil(Math.random() * 100) - 50;

  window.alert('la valeur ' + valeur + ' est ' +
      (valeur > 0 ? 'strictement positive' : (valeur < 0 ? 'strictement négative' : 'égale à 0')));
}

/**
 * @private true
 */
function trouverSigneValeurNegativeOuNulle(valeur) {
  return valeur < 0 ? 'strictement négative' : 'égale à 0';
}

function trouverSigneValeur(valeur) {
  return valeur > 0 ? 'strictement positive' : trouverSigneValeurNegativeOuNulle(valeur);
}

/*
 * La technique de base pour rendre les sous-ternaires plus lisible est de les cacher dans des sous-fonctions.
 * Pas une bonne idée dans le cas présent car les nouvelles fonctions sont inconsistantes (ne serviront plus jamais).
 */
function exercice2_3() {
  var valeur = Math.ceil(Math.random() * 100) - 50;

  window.alert('la valeur ' + valeur + ' est ' + trouverSigneValeur(valeur));
}


// Exercice 3

function exercice3() {
  var phrase = prompt('merci de saisir une phrase de moins de 30 caractères :');
  var message;

  if (phrase && phrase.length > 30) {
    message = 'La phrase saisie est trop grande';
  } else {
    message = 'Merci pour votre saisie';
  }

  alert(message);
}



// Exercice 4

function exercice4_1() {
  // parseInt('4', 10) => 4 OU +'4'
  var valeur1 = +prompt('Merci de saisir la première valeur numérique :');
  var valeur2 = +prompt('Merci de saisir la deuxième valeur numérique :');

  if (valeur1 >= valeur2) {
    alert(valeur1);
  } else {
    alert(valeur2);
  }
}

function nestPasUnEntier(valeur) {
  var retour = true;

  if (isNaN(valeur)) {              // Si ce n'est pas un nombre.
    retour = false;
  } else if(valeur.includes('.')) { // Si c'est un réel.
    retour = false;
  }

  return retour;
}

function nestPasUnEntier_2(valeur) {
  // return !isNaN(valeur) && !valeur.includes('.');
  // Equivaut à.
  // return !(isNaN(valeur) || valeur.includes('.')); // Règle de De Morgan

  return !(isNaN(valeur) || valeur.includes('.'));

  /*
  var a = true, b = false, res;

  res =  !a && !b; // entre 1 opération et 3.
  // Ecriture equivalentes.
  res = !(a || b); // entre 1 et 2 opérations
  */
}

function nestPasUnEntier_3(valeur) {

  /*
   * [0123456789] <=> [0-9] <=> \d (digit)
   *
   * ^ => commence par
   * $ => fini par
   *
   * Quantifier:
   * ?     => 0 ou 1 (facultatif)
   * *     => 0, 1 ou plusieurs
   * +     => 1 ou plusieurs
   * {x,y} => minimum 'x', maximum 'y'
   */

  return !valeur.match(/^-?\d+$/);
}

/** Avec validation "simple". */
function exercice4_2() {
  // parseInt('4', 10) => 4 OU +'4'
  var valeur1 = +prompt('Merci de saisir la première valeur numérique :');
  var valeur2 = +prompt('Merci de saisir la deuxième valeur numérique :');

  if (nestPasUnEntier(valeur1)) {
    alert(valeur1 + ' n\'est pas un nombre');
  } else if(nestPasUnEntier(valeur2)) {
    alert(valeur2 + ' n\'est pas un nombre');
  } else { // Si les deux valeurs sont bien des nombres.
    if (valeur1 >= valeur2) {
      alert(valeur1);
    } else {
      alert(valeur2);
    }
  }
}
