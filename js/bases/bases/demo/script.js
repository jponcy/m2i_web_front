// Initialisation de variables.

var nomDeLaVariable = 'valeur';
// Type JS : number + string + boolean + objets ({}) + undefined + tableau ([]) + fonctions

var monTableau = [ 'mes', 'valeurs', false, null, 5, Math.PI ];

var monObjet = {
  clef: 'valeur',
  booleen: true,
  tableau: [1, 2, 3],
  objet1: null,
  objet2: { a: 3 },
  fn: function () { alert('Coucou'); }
};


// Conditions.

// if (3 > 4) {
//   console.log('WTF!!!');
// } else {
//   console.log('ouf');
// }

var val = 4;

switch (val) {
  case '4':
    console.log('string 4');
    break;
  case 4:
    console.log('entier 4');
    break;
  case 3:
    console.log('non ce n\'est pas 3');
    break;
  case 'valeur':
    console.log('oui, évidemment');
    break;
  default:
    // Si aucune valeur ne correspond.
}
