// creating variables

const main = document.querySelector('main');
const playerHitpointCount = document.querySelector('span');
const playerHitpoints = 10;

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
cardData.forEach(item => {
    const card = document.createElement('div');
    const front = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    front.classList = 'face';
    back.classList = 'back';
    // attach card sources to the card spaces
    front.src = item.imgSrc;
    // attatching the cards to the main
    main.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    });
};

cardPopulator();