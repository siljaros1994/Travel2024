const data = [
    {
      place:'Malta',
      title:'Travel',
      title2:'Guide',
      description:'The Republic of Malta, is an island country in Southern Europe, located in the Mediterranean Sea. It consists of an archipelago between Italy, Tunisia and Libya.',
      image:'https://i.pinimg.com/originals/b6/b0/57/b6b0572f76abd5d7181e4f321e2f9bd1.jpg',
      link: 'placestovisit.html'
  },
  {
      place:'Valletta',
      title:'Capital',
      title2:'City',
      description:'As Malta’s capital city, it is a commercial centre for shopping, bars, dining, and café life. It is also the southernmost capital of Europe and at just 0.61 square kilometres, it is the European Union\'s smallest capital city.',
      image:'https://i.guim.co.uk/img/media/31e4b4e9daf90dd57b9f3dcfe439af1bcdd5da2e/0_367_7596_4559/master/7596.jpg?width=1300&dpr=2&s=none',
      link: 'valletta.html'
  },
  {
      place:'Mdina',
      title:'Northern',
      title2:'Region',
      description:'Mdina is a fortified city, which served as the island\'s capital from antiquity to the medieval period. The city is still confined within its walls',
      image:'https://historichotelsofeurope.com/wp-content/uploads/2023/11/malta-mdina.jpg',
      link:'mdina.html' 
  },
  {
      place:'Saint Julian\'s',
      title:'Eastern',
      title2:'Region',
      description:'Saint Julian\'s is a town in the Eastern Region of Malta. It is situated along the coast, north of the country\'s capital, Valletta. It is known for tourism-oriented businesses, such as hotels, restaurants and nightclubs which are centred mainly in an area known as Paceville.',
      image:'https://i.pinimg.com/originals/b5/37/dd/b537dda76287f84dc15db95b5db07947.jpg',
      link: 'SaintJulian.html'
  },
  {
      place:'Popeye Village',
      title:'Northern',
      title2:'Region',
      description:'Popeye Village also known as Sweethaven Village, is a purpose-built film set village that has been converted into a small attraction fun park, consisting of a collection of rustic and ramshackle wooden buildings.',
      image:'https://i.pinimg.com/originals/d5/b5/8a/d5b58ad0a3b5de70fa3f60ddbfcafb81.jpg',
      link:'Popeye.html'
  },
  {
      place:'Sliema',
      title:'Eastern',
      title2:'Region',
      description:'Sliema is a town located on the northeast coast of Malta in the Northern Harbour District. It is a major residential and commercial area and a centre for shopping, bars, dining, and café life.',
      image:'https://sthotelsmalta.com/wp-content/uploads/2019/02/14326956708_5fe2e138c6_b_resize_0.jpg',
      link:'Sliema.html'
  },
  {
      place:'Gozo',
      title:'South of Sicily',
      title2:'Mediterranean Sea',
      description:'Gozo  is an island in the Maltese archipelago in the Mediterranean Sea. The island is part of the Republic of Malta. After the island of Malta itself, it is the second-largest island in the archipelago.',
      image:'https://i.pinimg.com/564x/ac/66/41/ac664145dcdc6f9ffc431ff6e288b422.jpg',
      link:'gozo.html'
  },
  {
      place:'comino',
      title:'Eastern',
      title2:'Region',
      description:'comino is a small island of the Maltese archipelago between the islands of Malta and Gozo in the Mediterranean Sea. The island is a bird sanctuary and nature reserve. ',
      image:'https://i.pinimg.com/564x/e4/91/52/e491522d8087901848cb02430f0817c1.jpg',
      link:'comino.html'
  },
  {
      place:'Mellieha',
      title:'Northern',
      title2:'Region',
      description:'Mellieha is a large village in the Northern Region of Malta. Mellieħa is also a tourist resort, popular for its sandy beaches, natural environment, and Popeye Village nearby',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mellieha_Church.jpg/2880px-Mellieha_Church.jpg',
      link: 'mellieha.html' 
  },
]

const _ = (id) => document.getElementById(id);
const cards = data.map((i, index) => `<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`).join('');

const cardContents = data.map((i, index) => `
  <div class="card-content" id="card-content-${index}">
    <div class="content-start"></div>
    <div class="content-place">${i.place}</div>
    <div class="content-title-1">${i.title}</div>
    <div class="content-title-2">${i.title2}</div>
    <div class="cta">
      <button class="bookmark">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
        </svg>
      </button>
      <a href="../pages/${i.link}" class="discover">Discover Location</a>
    </div>
  </div>
`).join('');

const slideNumbers = data.map((_, index) => `<div class="item" id="slide-item-${index}">${index + 1}</div>`).join('');
_('demo').innerHTML = cards + cardContents;
_('slide-numbers').innerHTML = slideNumbers;

const range = (n) =>
  Array(n)
    .fill(0)
    .map((i, j) => i + j);
const set = gsap.set;

function getCard(index) {
  return `#card${index}`;
}
function getCardContent(index) {
  return `#card-content-${index}`;
}
function getSliderItem(index) {
  return `#slide-item-${index}`;
}

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, {
      ...properties,
      duration: duration,
      onComplete: resolve,
    });
  });
}

let order = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  gsap.set("#pagination", {
    top: offsetTop + 330,
    left: offsetLeft,
    y: 200,
    opacity: 0,
    zIndex: 60,
  });
  gsap.set("nav", { y: -200, opacity: 0 });

  gsap.set(getCard(active), {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { y: 100 });
  gsap.set(`${detailsInactive} .title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .desc`, { y: 50 });
  gsap.set(`${detailsInactive} .cta`, { y: 60 });

  gsap.set(".progress-sub-foreground", {
    width: 500 * (1 / order.length) * (active + 1),
  });

  rest.forEach((i, index) => {
    gsap.set(getCard(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      zIndex: 30,
      borderRadius: 10,
    });
    gsap.set(getCardContent(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      zIndex: 40,
      y: offsetTop + cardHeight - 100,
    });
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
  });

  gsap.set(".indicator", { x: -window.innerWidth });

  const startDelay = 0.6;

  gsap.to(".cover", {
    x: width + 400,
    delay: 0.5,
    ease,
    onComplete: () => {
      step(); // Start with the first step
    },
  });
  rest.forEach((i, index) => {
    gsap.to(getCard(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 30,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
    gsap.to(getCardContent(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 40,
      delay: 0.05 * index,
      ease,
      delay: startDelay,
    });
  });
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step(direction = 'next') {
  return new Promise((resolve) => {
    if (direction === 'next') {
      order.push(order.shift());  // Move the first element to the end for next
    } else {
      order.unshift(order.pop()); // Move the last element to the start for previous
    }
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent = data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent = data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description;

    document.querySelector(`${detailsActive} .discover`).href = `../pages/${data[order[0]].link}`;

    animateElements(detailsActive, detailsInactive, resolve);

    // Adjust the height of the next card in line
    const nextCardIndex = order[1]; // The next card to become active
    const newHeight = 450; // Set your desired height here

    gsap.to(getCard(nextCardIndex), {
      height: newHeight,
      duration: 0.4,
      ease: ease,
    });
  });
}

function animateElements(detailsActive, detailsInactive, resolve) {
  gsap.set(detailsActive, { zIndex: 22 });
  gsap.to(detailsActive, { opacity: 1, delay: 0.6, ease });
  gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.2, duration: 1.0, ease });
  gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.3, duration: 1.0, ease });
  gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.3, duration: 1.0, ease });
  gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.5, duration: 0.6, ease });
  gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.7, duration: 0.6, onComplete: resolve, ease });
  gsap.set(detailsInactive, { zIndex: 12 });
  transitionCards(detailsInactive);
}

function transitionCards(detailsInactive) {
  const [active, ...rest] = order;
  const prv = rest[rest.length - 1];

  gsap.set(getCard(prv), { zIndex: 10 });
  gsap.set(getCard(active), { zIndex: 20 });
  gsap.to(getCard(prv), { scale: 1.5, ease });

  gsap.to(getCardContent(active), {
    y: offsetTop + cardHeight - 10,
    opacity: 0,
    duration: 0.4,
    ease,
  });
  gsap.to(getSliderItem(active), { x: 0, ease });
  gsap.to(getSliderItem(prv), { x: -numberSize, ease });
  gsap.to(".progress-sub-foreground", {
    width: 500 * (1 / order.length) * (active + 1),
    ease,
  });

  gsap.to(getCard(active), {
    x: 0,
    y: 0,
    ease,
    width: window.innerWidth,
    height: window.innerHeight,
    borderRadius: 0,
    onComplete: () => {
      const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
      gsap.set(getCard(prv), {
        x: xNew,
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        zIndex: 30,
        borderRadius: 10,
        scale: 1,
      });

      gsap.set(getCardContent(prv), {
        x: xNew,
        y: offsetTop + cardHeight - 100,
        opacity: 1,
        zIndex: 40,
      });
      gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

      gsap.set(detailsInactive, { opacity: 0 });
      gsap.set(`${detailsInactive} .text`, { y: 100 });
      gsap.set(`${detailsInactive} .title-1`, { y: 100 });
      gsap.set(`${detailsInactive} .title-2`, { y: 100 });
      gsap.set(`${detailsInactive} .desc`, { y: 50 });
      gsap.set(`${detailsInactive} .cta`, { y: 60 });
      clicks -= 1;
      if (clicks > 0) {
        step();
      }
    },
  });

  rest.forEach((i, index) => {
    if (i !== prv) {
      const xNew = offsetLeft + index * (cardWidth + gap);
      gsap.set(getCard(i), { zIndex: 30 });
      gsap.to(getCard(i), {
        x: xNew,
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        ease,
        delay: 0.15 * (index + 1),
      });

      gsap.to(getCardContent(i), {
        x: xNew,
        y: offsetTop + cardHeight - 100,
        opacity: 1,
        zIndex: 40,
        ease,
        delay: 0.15 * (index + 1),
      });
      gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
    }
  });
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}

function attachArrowListeners() {
  document.querySelector('.arrow-left').addEventListener('click', () => step('prev'));
  document.querySelector('.arrow-right').addEventListener('click', () => step('next'));
}

async function start() {
  try {
    await loadImages();
    init();
    attachArrowListeners();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}

start();
