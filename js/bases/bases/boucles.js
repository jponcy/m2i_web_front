function exercice1() {
  for (var i = 0; i < 20; ++i) {
    console.log(i);
  }
  // --- "equivalent" à (sans boucle for).
  // var i = 0;

  // while (i < 20) {
  //   console.log(i);
  //   ++i;
  // }
}

function exercice2() {
  for (var i = 1; i <= 100; ++i) {
  // OU
  // for (var i = 1; i < 101; ++i) {
    console.log(i);
  }
}

function exercice3() {
  for (var i = 1; i <= 10; ++i) {
    console.log(i + '² = ' + (i * i));

    // Mise au carré :
    // Math.pow(i, 2);
    // i ** 2
    // i * i
  }
}

function exercice4_bof() {
  for (var i = 1; i <= 10; ++i) {
    if (i % 2 === 0) { // Si i est pair.
    // equivalent un peu moins bien (en profitant de la notion des valeurs falsy).
    // if (!(i % 2)) {
      console.log(i);
    }
  }
}

function exercice4_mieux() {
  for (var i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

function exercice5_fake() {
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
}

function exercice5_fortableau1() {
  var tab = new Array(50);

  for (var i = 0; i < 50; ++i) {
    tab[i] = 'e';
  }

  console.log(tab.join(''));
}

function exercice5_fortableau2() {
  var tab = new Array(50);

  tab.fill('e');

  console.log(tab.join(''));

  // Possible en 1 ligne.
  //  console.log((new Array(50)).fill('e').join(''));
}

function exercice5_fortableau3() {
  var tab = Array.from({ length: 50 }, () => 'e');

  console.log(tab.join(''));

  // Possible en 1 ligne.
  //  console.log((new Array(50)).fill('e').join(''));
}

function exercice5_str1() {
  var msg = '';

  for (var i = 0; i < 50; ++i) {
    msg += 'e';
  }

  console.log(msg);
}

/**
 * Solution un peu étrange en abusant des syntaxes des boucles for.
 */
function exercice5_str2() {
  var msg = '';

  for (var i = 0; i < 50; ++i, msg += 'e');

  console.log(msg);
}

function exercice6_tableau() {
  var phrase = prompt('Saisir la phrase à répéter :');
  // Il faut bien convertir la valeur en nombre pour que le constructeur du tableau ai un nombre (car s'il a une string, il se comportera différamment).
  var nb = +prompt('Merci de saisir le nombre de répétition :');

  var tab = new Array(nb);

  tab.fill(phrase);

  console.log(tab.join(' '));
}

function exercice6_str() {
  var phrase = prompt('Saisir la phrase à répéter :');
  var nb = +prompt('Merci de saisir le nombre de répétition :');
  var message = '';

  for (var i = 0; i < nb; ++i) {
    if (message) { // if (message != '') {
      message += ' ';
    }

    message += phrase;
  }

  console.log(message);
}


// Plus OU moins.

function plusOuMoins() {
  var nbATrouver = Math.ceil(Math.random() * 100) + 1;
  var partieEnCours = true;

  do {
    var proposition = +prompt('Merci de saisir votre proposition (entre 1 et 100 compris) :');

    if (proposition > nbATrouver) {
      alert('Le nombre à trouver est plus petit que ' + proposition);
    } else if (proposition < nbATrouver) {
      alert('Le nombre à trouver est plus grand que ' + proposition);
    } else { // Si on a gagné.
      partieEnCours = false;
      alert('Bravo, il fallait bien trouver le nombre ' + nbATrouver);
    }
  } while (partieEnCours);
}
