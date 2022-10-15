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

let htmlFormatCard = document.querySelector('#FormatCard');
let htmlThemeCard = document.querySelector('#ThemeCard');
let htmlTargetCard = document.querySelector('#TargetCard');
let htmlTechnicalCard = document.querySelector('#TechnicalCard');
let htmlFormatCitation = document.querySelector('#FormatCitation');
let htmlThemeCitation = document.querySelector('#ThemeCitation');
let htmlTargetCitation = document.querySelector('#TargetCitation');
let htmlTechnicalCitation = document.querySelector('#TechnicalCitation');

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||
      e.keyCode == 32
  ) {

    for (let i = 0; i < 5; i++) {
      var su_index = Math.floor(Math.random() * supports.length);
      var th_index = Math.floor(Math.random() * themes.length);
      var ta_index = Math.floor(Math.random() * targets.length);
      var tc_index = Math.floor(Math.random() * technicalContraints.length);
      htmlFormatCard.innerHTML = supports[su_index];
      htmlFormatCitation.innerHTML = supports[su_index];
      htmlThemeCard.innerHTML = themes[th_index];
      htmlThemeCitation.innerHTML = themes[th_index];
      htmlTargetCard.innerHTML = targets[ta_index];
      htmlTargetCitation.innerHTML = targets[ta_index];
      htmlTechnicalCard.innerHTML = technicalContraints[tc_index];
      htmlTechnicalCitations.innerHTML = technicalContraints[tc_index];
    }
  }
}
