/**
 * Retourne la valeur au carré d'un nombre fournit en paramètre.
 * @param {Number} valeur Le nombre que l'on souhaite mettre au carré (valeur * valeur).
 * @returns {Number} La valeur mise au carré.
 * @throws {Error} La valeur fournit n'est pas un nombre.
 */
function miseAuCarre(valeur) {
  // return valeur * valeur;
  // return valeur ** 2;

  console.log('Valeur fournit : ' + valeur);

  if(isNaN(valeur)) {
    throw new Error('La valeur fournit devrait être un nombre');
  }

  return valeur * valeur;
}

/**
 * Permet de retourner la chaîne de caractère la plus longue entre 2 chaînes fournit en paramètres.
 */
function chaineLaPlusLongueEntreDeux(str1, str2) {
  var retour;

  if (str1.length >= str2.length) {
    retour = str1;
  } else {
    retour = str2;
  }

  return retour;
}

/**
 * Permet de retourner la chaîne de caractère la plus longue entre 3 chaînes fournit en paramètres.
 * @param {String} str1 La première chaîne de caractère.
 * @param {String} str2 La deuxième chaîne de caractère.
 * @param {String} str3 La troisième chaîne de caractère.
 * @returns {String} La chaîne la plus longue entre les trois fournit en paramètre.
 */
function chaineLaPlusLongueV1(str1, str2, str3) {
  var retour = chaineLaPlusLongueEntreDeux(str1, str2);

  return chaineLaPlusLongueEntreDeux(retour, str3);
}

/**
 * Permet de retourner la chaîne de caractère la plus longue entre 3 chaînes fournit en paramètres.
 * @param {String} str1 La première chaîne de caractère.
 * @param {String} str2 La deuxième chaîne de caractère.
 * @param {String} str3 La troisième chaîne de caractère.
 * @returns {String} La chaîne la plus longue entre les trois fournit en paramètre.
 */
function chaineLaPlusLongueV2(str1, str2, str3) {
  var retour;

  // if (str1.length >= str2.length) {
  //   if (str1.length >= str3.length) {
  //     retour = str1;
  //   } else {
  //     retour = str3;
  //   }
  // } else {
  //   if (str2.length >= str3.length) {
  //     retour = str2;
  //   } else {
  //     retour = str3;
  //   }
  // }
  if (str1.length >= str2.length) {
    if (str1.length >= str3.length) {
      retour = str1;
    } else {
      retour = str3;
    }
  } else if (str2.length >= str3.length) {
    retour = str2;
  } else {
    retour = str3;
  }

  return retour;
}

/**
 * Permet de retourner la chaîne de caractère la plus longue entre 3 chaînes fournit en paramètres.
 * @param {String} str1 La première chaîne de caractère.
 * @param {String} str2 La deuxième chaîne de caractère.
 * @param {String} str3 La troisième chaîne de caractère.
 * @returns {String} La chaîne la plus longue entre les trois fournit en paramètre.
 */
function chaineLaPlusLongueVersionEtrange(str1, str2, str3) {
  var o = {};

  // str1: 'toto', str2: 'coucou', str3: 'titi'

  o[str3.length] = str3; // o { 4: 'titi' }
  o[str2.length] = str2; // o { 4: 'titi', 6: 'coucou' }
  o[str1.length] = str1; // o { 4: 'toto', 6: 'coucou' }

  // ... => opérateur ES6 de destructuration (converti notre tableau en une liste de paramètres).
  return o[Math.max(...Object.keys(o))];
}

/**
 * Calcul le factoriel de manière récursive.
 * @param {Number} nb
 * @returns {Number} La valeur calculée.
 */
function fact(nb) {
  // En math :
  // fact(3) => 1 * 2 * 3
  // fact(5) => 1 * 2 * 3 * 4 * 5
  // Souvent en informatique (on calcul dans le sens inverse et on évite le * 1).
  // fact(3) => 3 * 2
  // fact(5) => 5 * 4 * 3 * 2

  var retour;

  if (nb > 1) {
    retour = nb * fact(nb - 1);
  } else {
    retour = 1;
  }

  return retour;
}

// fact(5)
// => 5 * fact(5 - 1)
// => 5 * fact(4)
// fact(4)
// => 4 * fact(4 - 1)
// => 4 * fact(3)
// ==> 5 * fact(4) * fact(3) * fact(2) * fact(1)
// ==> 5 * 4 * 3 * 2 * 1
// ====
// fact(5)      > fact(4)    > fact(3)   > fact(2)   > fact(1) >
//                                                             |
// 5 * 24 = 120 < 4 * 6 = 24 < 3 * 2 = 6 < 2 * 1 = 2 < 1       <

/**
 * Inverse un mot.
 * @param {String} mot Le mot à inverser
 * @returns {String} Le mot inversé (mot => tom).
 */
function inverseMot(mot) {
  // split('') => décompose la chaîne de caractère en un tableau en utilisant le séparateur '' (rien => chaque lettre devient un élément du tableau)
  // reverse() => inverse tous les éléments du tableau ([1, 2, 3] => [3, 2, 1])
  // join('') )> fusionne tous les éléments du tableau pour créer une chaîne de caractère en utilisant le séparateur fournit

  return mot.split('').reverse().join('');
}

/**
 * Test si le mot fournit en paramètre est un palindrome (mot qui se lit de la même manière dans les deux sens).
 * @param {String} mot
 * @returns {Boolean} {@code TRUE} si c'est le cas, {@code FALSE} dans le cas contraire.
 */
function estUnPalindrome(mot) {   // SI mot = 'bidule'
  var inverse = inverseMot(mot);  // inverse = 'eludib'

  return mot === inverse;         // 'bidule' === 'eludib'
}
