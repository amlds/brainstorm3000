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

var container = document.querySelector('#my-container');

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||
      e.keyCode == 32
  ) {
    container.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      var su_index = Math.floor(Math.random() * supports.length)
      var th_index = Math.floor(Math.random() * themes.length)
      var ta_index = Math.floor(Math.random() * targets.length)
      var tc_index = Math.floor(Math.random() * technicalContraints.length)
      var line = `
      <div class="my-card py-3 px-5 my-3" style="background: ${colors[i]}">
        Créer <b>${supports[su_index]}</b> sur le thème <b>${themes[th_index]}</b>
        pour les <b>${targets[ta_index]}</b>
        avec comme contrainte technique <b>${technicalContraints[tc_index]}</b>
      </div>`
      container.insertAdjacentHTML('beforeend', line)
    }
  }
}
