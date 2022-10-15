var targets = [
  'retraités',
  'sportifs professionnels',
  'licenciés d\'un club de sport',
  'jeunes développeurs sortis de Wagon',
  'parents confinés',
  'etudiants',
  'backpackers',
  'entrepreneurs',
  'joueurs de jeux vidéos',
  'personnes cherchant à se cultiver',
  'enseignants',
  'lycéens',
  'malades',
  'médecins',
  'journalistes',
  'cyclistes',
  'agent immobilier',
  'auto ecole',
  'speaker',
  'propriétaire',
  'confinés',
  'agents immobilier',
  'enfants',
  'prof de musique',
  'prof de langues',
  'mineurs',
  'LGBTQI',
  'association',
  'nomades',
  'femmes',
  'gamers'
];

var technicalContraints = [
  'Réalité augmentée',
  'une API',
  'Géolocalisation',
  'la Reconnaissance vocale',
  'le Scrapping',
  'le Jeux video',
  'le Streaming',
  'le Calendar',
  'la Traduction',
  'le Scan',
  'le Cartographie',
  'l\'IOT',
  'le QR Code',
  'NFC',
  'le Swipe',
  'la Datavisualisation',
  'Inteligence artificelle'
];

var themes = [
  'open data',
  'écologie',
  'espace',
  'Jeux vidéo',
  'Podcast',
  'Emissions',
  'Besoin artistiques',
  'Création',
  'Musique',
  'Remote',
  'Management',
  'Analyse traffic',
  'Enseignement',
  'Débats',
  'Allérgies',
  'Meteo',
  'Données médicales',
  'Workflow',
  'remote',
  'Santé',
  'enseignement',
  'Allergie',
  'Collaboratif',
  'Apprentissage',
  'Douleur',
  'Alimentation'
];

var supports = [
  'une Mobile App',
  'une Mobile App',
  'une Mobile App',
  'une Mobile App',
  'une Mobile App',
  'une Web App',
  'une Web App',
  'une Web App',
  'une Web App',
  'une Web App',
  'une Web App',
  'une Web App',
  'une Web App',
  'une Web App',
  'une Web App',
  'un Chatbot'
];

var colors = [
'#A8CBFE',
'#CABBE9',
'#F2B5BC',
'#FEE9A6',
'#AFEBDA'
]

let formatCard = document.querySelector('#format-card');
let themeCard = document.querySelector('#theme-card');
let targetCard = document.querySelector('#target-card');
let technicalCard = document.querySelector('#technical-card');

let formatText = document.querySelector('#format-text');
let themeText = document.querySelector('#theme-text');
let targetText = document.querySelector('#target-text');
let technicalText = document.querySelector('#technical-text');

let formatQuotation = document.querySelector('#format-quotation');
let themeQuotation = document.querySelector('#theme-quotation');
let targetQuotation = document.querySelector('#target-quotation');
let technicalQuotation = document.querySelector('#technical-quotation');

document.body.onkeyup = function(e) {

  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    randomizeWord();
    let unlockedCards = document.querySelectorAll('.unlocked-card');
    unlockedCards.forEach((unlockedCard) => {
      createNewCard(unlockedCard);
      animateCard(unlockedCard);
    });

  }
}

function randomizeWord(card) {

  var format_index = Math.floor(Math.random() * supports.length);
  var theme_index = Math.floor(Math.random() * themes.length);
  var target_index = Math.floor(Math.random() * targets.length);
  var technical_index = Math.floor(Math.random() * technicalContraints.length);

  formatText.innerHTML = supports[format_index];
  formatQuotation.innerHTML = supports[format_index];

  themeText.innerHTML = themes[theme_index];
  themeQuotation.innerHTML = themes[theme_index];

  targetText.innerHTML = targets[target_index];
  targetQuotation.innerHTML = targets[target_index];

  technicalText.innerHTML = technicalContraints[technical_index];
  technicalQuotation.innerHTML = technicalContraints[technical_index];
}

function animateCard(card) {
  card.animate(fallAnimation, fallTiming);
  setTimeout(() => {
    card.remove();
  }, 150);
}

function createNewCard(card) {
  let newCard = document.createElement('div');
  newCard.classList.add('card', 'unlocked-card');
  newCard.innerHTML = card.innerHTML;
  card.parentNode.appendChild(newCard);
}

const fallAnimation = [
  {
    transform: 'translate(0)'
  },
  {
    transform: 'translate(-2%, 50%)'
  },
  {
    transform: 'translate(-2%, 100%)',
    filter: 'opacity(0)'
  }
];

const fallTiming = {
  duration: 150,
  iterations: 1,
  easing: 'ease-in-out',
  fill: 'forwards'
}
