
for (/* déclaration/initialisation */; /* test de fin */; /* modification des valeurs */) { }

for (;;) {
  console.log('coucou');
}


for (var i = 0; i < 10; i++) {
  console.log(i);
}
// ====
var i;

for (i = 0; i < 10; i++) {
  console.log(i);
}
// ====
var i = 0;

for (; i < 10; i++) {
  console.log(i);
}
// ====
for (var i = 0;; i++) {
  console.log(i);

  if (i >= 10) {
    break; // Couper la boucle en cour (pas propre).
  }
}
// ====
for (var i = 0; i < 10;) {
  console.log(i++);
}
// ====
var i = 0;

for (;;) {
  console.log(i++);

  if (i >= 10) {
    break;
  }
}
// ====
var toto = true;

for (var i = 0; toto && i < 10; i++) {
  console.log(i);
}
// ====
for (var i = 0, j = 0; i < 100; i++, j = i * i) {
  console.log(i + '² = ' + j);
}



var t = ['pomme', 'poire', 'fraise'];

for (var i = 0; i < t.length; i++) {
  console.log(i + ' => ' + t[i]);
}

for (var i in t) {
  console.log(i + ' => ' + t[i]);
}

for (var fruit of t) {
  console.log(fruit);
}


// ==============================

// ========= FOREACH

var fruits = ['pomme', 'fraise', 'kiwi', 'poire'];

// Affiche tous les elements avec une boucle traditionelle.
for (var index in fruits) {
  var unFruit = fruits[index];
  console.log((index + 1) + ') ' + unFruit);
}

// Affiche tous les elements avec une boucle moderne.
fruits.forEach(function (unFruit, index) {
  console.log((index + 1) + ') ' + unFruit);
});

// ========= MAP

var valeurs = [1, -4, 6, -42, 0, 3];

// Mettre toutes les valeurs en absolue (que des positifs) avec une boucle traditionnelle.
var valeurAbsolues = [];

for (var index in valeurs) {
  var val = valeurs[index];

  if (val < 0) {
    valeurAbsolues.push(val * -1);
  } else {
    valeurAbsolues.push(val);
  }
  // OU
  // valeurAbsolues.push(val < 0 ? val * -1 : val);
  // OU
  // val = Math.abs(val);
}

// Mettre toutes les valeurs en absolue (que des positifs) avec une boucle moderne.
var valeurAbsolues = valeurs.map(function (val) {
  var retour = val;

  if (retour < 0) {
    retour *= -1;
  }

  return retour;
});
// OU (ternaire)
var valeurAbsolues = valeurs.map(function (val) {
  return val < 0 ? val * -1 : val;
});
// OU (utilisation d'une fonction déjà existante).
var valeurAbsolues = valeurs.map(Math.abs);
