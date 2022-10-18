let targets = [
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

let technicals = [
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

let themes = [
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

let supports = [
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

const formatQuotation = document.querySelector('#format-quotation');
const themeQuotation = document.querySelector('#theme-quotation');
const targetQuotation = document.querySelector('#target-quotation');
const technicalQuotation = document.querySelector('#technical-quotation');

const generateBtn = document.querySelector('#generate-btn');

function getLocks() {
  document.querySelectorAll('.lock').forEach((lock) => {
    lock.addEventListener('click', () => {
      toggleLockCard(lock);
    });
  });
}

getLocks();

document.body.onkeyup = function(e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (!generateBtn.disabled) {
      shakeIdeas();
    }
  }
}

generateBtn.addEventListener('click', () => {
  shakeIdeas();
});


function toggleLockCard(lock) {
  let card = lock.parentElement;
  lock.classList.toggle('open');
  card.classList.toggle('unlocked');
}

function shakeIdeas() {
  document.querySelectorAll('.card').forEach((card) => {
    if (card.classList.contains('unlocked')) {
      animateCard(card);
      createNewCard(card);
    } else {
      // here is just to debug
      recreateNewCard(card);
    }
  });

  getLocks();
}

function randomizeWord(type) {
  switch (type) {
    case "format":
      let format_index = Math.floor(Math.random() * supports.length);
      formatQuotation.innerHTML = supports[format_index];
      return supports[format_index];

    case "theme":
      let theme_index = Math.floor(Math.random() * themes.length);
      themeQuotation.innerHTML = themes[theme_index];
      return themes[theme_index];

    case "target":
      let target_index = Math.floor(Math.random() * targets.length);
      targetQuotation.innerHTML = targets[target_index];
      return targets[target_index];

    case "technical":
      let technical_index = Math.floor(Math.random() * technicals.length);
      technicalQuotation.innerHTML = technicals[technical_index];
      return technicals[technical_index];
  }
}

function animateCard(card) {
  generateBtn.disabled = true;
  card.animate(fallAnimation, fallTiming);
  setTimeout(() => {
    card.remove();
    generateBtn.disabled = false;
  }, 150);
}

function createNewCard(card) {
  // initialize new card
  let newCard = document.createElement('div');

  // add infos to the new card
  newCard.dataset.type = card.dataset.type;
  newCard.classList.add('card', 'unlocked', 'new');
  let newWord = randomizeWord(card.dataset.type);
  let lock = `<span class="color open lock ${card.dataset.type}-color"></span>`
  let title = `<h2 class="card-text">${newWord}</h2>`;
  newCard.innerHTML =
  ` ${lock} ${title} `;

  // add new card to the DOM
  let cardContainer = card.parentElement;
  cardContainer.appendChild(newCard);
}

function recreateNewCard(card) {
  // initialize new card
  let newCard = card.cloneNode(true);
  newCard.classList.remove('new');

  // add new card to the DOM
  let cardContainer = card.parentElement;
  cardContainer.appendChild(newCard);
  card.remove();
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
