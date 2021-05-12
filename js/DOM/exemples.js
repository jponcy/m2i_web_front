function exemplesDebases() {
  var h2 = document.getElementById('title-1-2');

  var eltImportants = document.getElementsByClassName('important');

  for (var index in eltImportants) {
    console.log(index, eltImportants[index]);
  }

  // Fonctions moderrnes (utilisation de sélecteurs CSS 3).
  document.querySelector('h2+p'); // 0 ou 1 retour (le premier élément dans le cas ou le sélecteur CSS3 utilisé permet une capture multiple).
  document.querySelectorAll('h2+p'); // Une liste d'élements (0, 1 ou plusieurs).

}

function capturePremierSpanDeChaqueParagrapheAvecMethodesTraditionnel() {
  var retour = [];
  var paragraphs = document.getElementsByTagName('p');

  for (var pi in paragraphs) {
    var p = paragraphs[pi];
    var spanList = p.getElementsByTagName('span');

    if (spanList && spanList.length/* !== 0 */) {
      retour.push(spanList[0]);
    }
  }

  return retour;
}

function capturePremierSpanDeChaqueParagrapheAvecSeleceurCSS3() {
  return document.querySelectorAll('p>span:first-of-type');
}

function debutManipulation() {
//   var h2 = document.getElementById('title-1-2');
// undefined
// h2
// <h2 id="title-1-2">

// h2.innerText
// "Sous-titre n°02"
// h2.innerHTML
// "Sous-titre n°02"
// h2.innerHTML = h2.innerHTML + ' <span class="impotant">coucou</span>';
// "Sous-titre n°02 <span class=\"impotant\">coucou</span>"
// h2.innerHTML
// "Sous-titre n°02 <span class=\"impotant\">coucou</span>"
// h2.innerHTML = "Sous-titre n°02 - <span class=\"important\">coucou</span>"
// "Sous-titre n°02 - <span class=\"important\">coucou</span>"
// h2.innerHTML
// "Sous-titre n°02 - <span class=\"important\">coucou</span>"
// h2.innerText
// "Sous-titre n°02 - coucou"
// h2
// <h2 id="title-1-2">

// h2.toto = 3
// 3
// h2
// <h2 id="title-1-2">

// h2.toto
// 3
// h2.title = 'coucou'
// "coucou"
// h2.style
// CSS2Properties(0)

// h2.style.color = 'blue'
// "blue"
// h2
// <h2 id="title-1-2" title="coucou" style="color: blue;">

// h2.style.background-color = 'aliceblue';
// SyntaxError: invalid assignment left-hand side
// debugger eval code:1
// h2.style['background-color'] = 'aliceblue';
// "aliceblue"
// h2.style.backgroundColor = 'yellow'
// "yellow"


// h2
// <h2 id="title-1-2" title="coucou" style="color: blue; background-color: yellow;">

// h2.classList
// DOMTokenList []

// h2.classList.add('important')
// undefined
// h2
// <h2 id="title-1-2" class="important" title="coucou" style="color: blue; background-color: yellow;">

// h2.classList.add('important')
// undefined
// h2
// <h2 id="title-1-2" class="important" title="coucou" style="color: blue; background-color: yellow;">

// h2.classList.add('toto titi')
// InvalidCharacterError: String contains an invalid character debugger eval code:1:14
// h2.classList.add('toto')
// undefined
// h2
// <h2 id="title-1-2" class="important toto" title="coucou" style="color: blue; background-color: yellow;">

// h2.classList.remove('toto')
// undefined
// h2
// <h2 id="title-1-2" class="important" title="coucou" style="color: blue; background-color: yellow;">

// h2.className = 'toto titi urgent';
// "toto titi urgent"
// h2
// <h2 id="title-1-2" class="toto titi urgent" title="coucou" style="color: blue; background-color: yellow;">

// h2.className += 'toto titi';
// "toto titi urgenttoto titi"
// h2
// <h2 id="title-1-2" class="toto titi urgenttoto titi" title="coucou" style="color: blue; background-color: yellow;">

// h2.className = ''
// ""
// h2
// <h2 id="title-1-2" class="" title="coucou" style="color: blue; background-color: yellow;">

// h2.classList.toggle('important')
// true
// h2
// <h2 id="title-1-2" class="important" title="coucou" style="color: blue; background-color: yellow;">

// h2.classList.toggle('important')
// false
// h2
// <h2 id="title-1-2" class="" title="coucou" style="color: blue; background-color: yellow;">
}

function alertBonjour() {
  alert('Bonjour à tous !');
}

function creerElement() {
  var elt = document.createElement('ul');
  var fruits = ['pomme', 'fraise', 'kiwi', 'orange'];

  // Ajouts des li.
  for (var index in fruits) {
    var li = document.createElement('li');

    li.innerText = fruits[index];

    elt.appendChild(li);
  }

  elt.style.listStyle = 'none';

  document.body.appendChild(elt); // Ajout dans le DOM.

  /*
  Les fonctions de placement :
  =====
  Avec before.
  <body>
    Avec prepend
    [...]
    Avec append/appendChild
  </body>
  Avec after.
  */

 // On peut toujours modifier la liste après son ajout dans le DOM.
 elt.style.listStyle = 'arabic';
 elt.children[2].style.color = 'blue';

 elt.children[2].addEventListener('click', () => alert('oulala')); // ES6
 elt.children[2].addEventListener('click', alertBonjour); // Par nom de fonction
 elt.children[2].addEventListener('click', function () { alert('deuxième listener'); }); // Par fonction anonyme

 return elt;
}

function toUpperCase(event) {
  event.target.value = event.target.value.toUpperCase();
}

(function () {
  // document
  //   .getElementById('mon-input')
  //   .addEventListener('change', toUpperCase); // Change attends la perte de focus pour s'activer.
  document
    .getElementById('mon-input')
    .addEventListener('keyup', toUpperCase);
})();
