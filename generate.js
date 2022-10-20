let targets = [
    'Children',
    'High school students',
    'Students',
    'Language students',
    'Young Le Wagon alumni',
    'Teachers',
    'Music teachers',
    'Language teachers',
    'Entrepreneurs',
    'Journalists',
    'Cyclists',
    'Professional athletes',
    'Sports clubs',
    'Backpackers',
    'Sick people',
    'Doctors',
    'Photographers',
    'Digital nomads',
    'Speakers',
    'Gamers',
    'Driving schools',
    'Real estate agents',
    'People seeking a flat',
    'Parents',
    'Confined people',
    'Women',
    'LGBTQI+',
    'Associations',
    'Curious people',
    'Retirees',
    'House owner',
    'Construction workers',
    'Flatmates',
    'Couples',
    'Hikers',
    'Freelancers',
    'Gardeners',
    'Cooks',
    'Musicians',
    'Tourists',
    'Designers'
];

let technicals = [
    'Augmented Reality',
    'API',
    'Geolocation',
    'Speech Recognition',
    'Scrapping',
    'Video game',
    'Streaming',
    'Calendar',
    'Translation',
    'Scan',
    'Cartography',
    'IOT',
    'QR Code',
    'NFC',
    'Swipe',
    'Data visualization',
    'Artificial Inteligence'
];

let themes = [
    'SDG',
    'Ecology',
    'Space',
    'Video games',
    'Podcast',
    'Shows',
    'Art',
    'Creation',
    'Music',
    'Remote',
    'Management',
    'Traffic Analysis',
    'Teaching',
    'Debates',
    'Allergies',
    'Weather',
    'Medicals data',
    'Workflow',
    'Health',
    'Collaborativity',
    'Learning',
    'Pain',
    'Food',
    'Sport',
    'Agriculture',
    'Sexual education',
    'Cinema',
    'Movies',
    'Politic',
    'Animals rights',
    'Addictions',
    'Travel',
    'Fashion',
    'Transports'
];

let supports = [
    'Mobile App',
    'Mobile App',
    'Mobile App',
    'Mobile App',
    'Mobile App',
    'Web App',
    'Web App',
    'Web App',
    'Web App',
    'Web App',
    'Web App',
    'Web App',
    'Web App',
    'Web App',
    'Web App',
    'Chatbot',
    'Chrome extension'
];

const formatQuotation = document.querySelector('#format-quotation');
const themeQuotation = document.querySelector('#theme-quotation');
const targetQuotation = document.querySelector('#target-quotation');
const technicalQuotation = document.querySelector('#technical-quotation');

const generateBtn = document.querySelector('#generate-btn');
const unlockAllBtn = document.querySelector('#unlock-all-btn');

function getLocks() {
  document.querySelectorAll('.lock').forEach((lock) => {
    lock.addEventListener('click', () => {
      toggleLockCard(lock);
      console.log(lock);
    });
  });
}

unlockAllBtn.addEventListener('click', unlockAll);


function unlockAll() {
  document.querySelectorAll('.lock').forEach((lock) => {
    if (!lock.classList.contains('open')) {
      lock.classList.add('diseappear');
      setTimeout(() => {
        lock.parentNode.classList.add('unlocked');
        lock.classList.add('open');
      }, 300);
    }
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
  let card = lock.parentNode;
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
  newCard.dataset.type = card.dataset.type;
  newCard.classList.add('card', 'unlocked', 'new');

  // add infos to the new card
  let lock = `<span class="color open lock ${card.dataset.type}-color"></span>`

  let newWord = randomizeWord(card.dataset.type);
  let title = `<h2 class="card-text">${newWord}</h2>`;
  newCard.innerHTML = `${lock} ${title}`;

  // add new card to the DOM
  card.parentNode.appendChild(newCard);
}

function recreateNewCard(card) {
  // initialize new card
  let newCard = card.cloneNode(true);
  newCard.classList.remove('new');

  // update the DOM
  card.parentNode.appendChild(newCard);
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
