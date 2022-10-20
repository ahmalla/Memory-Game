// creating variables

const main = document.querySelector('main');
const playerHitpointCount = document.querySelector('span');
let playerHitpoints = 5;

// setting up dom elements

playerHitpointCount.textContent = playerHitpoints;


// populate the data for cards

const getData = () => [
    {imgSrc: './Images/Ancestral_hat.png', name: 'Hat' },
    {imgSrc: './Images/black_hween.png', name: 'hween' },
    {imgSrc: './Images/Black_partyhat.png', name: 'partyhat' },
    {imgSrc: './Images/christmas_cracker.png', name: 'cracker' },
    {imgSrc: './Images/Disk_of_returning.png', name: 'disk' },
    {imgSrc: './Images/Dragon_mace.png', name: 'mace' },
    {imgSrc: './Images/runescape_cat.png', name: 'cat' },
    {imgSrc: './Images/santahat.png', name: 'santa' },
    {imgSrc: './Images/Ancestral_hat.png', name: 'Hat' },
    {imgSrc: './Images/black_hween.png', name: 'hween' },
    {imgSrc: './Images/Black_partyhat.png', name: 'partyhat' },
    {imgSrc: './Images/christmas_cracker.png', name: 'cracker' },
    {imgSrc: './Images/Disk_of_returning.png', name: 'disk' },
    {imgSrc: './Images/Dragon_mace.png', name: 'mace' },
    {imgSrc: './Images/runescape_cat.png', name: 'cat'} ,
    {imgSrc: './Images/santahat.png', name: 'santa' },
];

// shuffle function
const shuffle = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// creating cards function
const cardPopulator = () => {
    const cardData = shuffle();
    // creating additional HTML elements to be used to make the cards
cardData.forEach((item, index) => {
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    front.classList = 'front';
    back.classList = 'back';
    // attach card sources to the card spaces
    front.src = item.imgSrc;
   card.setAttribute('name', item.name);
    // attatching the cards to the main
    main.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', (a) => {
        card.classList.toggle('toggleCard');
        checkCards(a);
        });
    });
};
// check for match
const checkCards = (a) => {
    const clickedCard = a.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    
    // function
if (flippedCards.length === 2) {
    if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
        console.log('match');
        flippedCards.forEach((card) => {
            card.classList.remove('flipped');
            card.style.pointerEvents = 'none';
        });
    } else {
        console.log('wrong');
        flippedCards.forEach((card) => {
            card.classList.remove('flipped');
            setTimeout(() => card.classList.remove('toggleCard'), 1000);
        });
        playerHitpoints--;
        playerHitpointCount.textContent = playerHitpoints;
        if (playerHitpoints === 0) {
            restart();
        }
    }
 }
};
// restart game
const restart = () => {
    let cardData = shuffle();
    let front = document.querySelectorAll('.front');
    let cards = document.querySelectorAll('.card');
    cardData.forEach((item, index) => {
        // if we lose flip all cards back over
        cards[index].classList.remove('toggleCard');
        
        setTimeout(() => {
            // set pointer event back to all after a game reset
        cards[index].style.pointerEvents = 'all';
        // re-shuffle after losing
        front[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
        }, 100);
    });
    playerHitpoints = 5;
    playerHitpointCount.textContent = playerHitpoints;
};

cardPopulator();