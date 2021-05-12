//   0b110
// |!0b100
// =>
//   0b110
// | 0b000
// =>
//   0b110


// => !false = true
// => !true  = false

// => !0b100 => !4 => !true => false

// Falsy : 0, '', false, null, undefined


var nb = prompt('Merci de saisir un nombre');

if (nb >= 0) {
  console.log('Le nombre saisi est supérieur ou égal à zéro');
} else {
  console.log('Le nombre saisi est inférieur à zéro');
}

// <=>

var nb = prompt('Merci de saisir un nombre');
var state;

if (nb >= 0) {
  state = 'supérieur ou égal';
} else {
  state = 'inférieur';
}

console.log('Le nombre saisi est ' + state + ' à zéro');

// ternaire

var nb = prompt('Merci de saisir un nombre');
var state = nb >= 0 ? 'supérieur ou égal' : 'inférieur';

console.log('Le nombre saisi est ' + state + ' à zéro');

// =>

console.log('Le nombre saisie est ' +
  (prompt('Merci de saisir un nombre') >= 0 ? 'supérieur ou égal' : 'inférieur') +
  ' à zéro');


function max(a, b) {
  var resultat;

  if (a >= b) {
    resultat = a;
  } else {
    resultat = b;
  }

  return resultat;
}

function maxTernaire(a, b) {
  return a >= b ? a : b;
}

function coucou() {
  alert('coucou');
}

function nextInt(question) {
  var res = +prompt(question);

  if (isNaN(res)) {
    throw new Error('Input error');
  }

  return res;
}

var maxAn = function (a, b) {
  return a >= b ? a : b;
};


maxAn(5, 8);
