// creating variables
// a var for the main tag in html
const main = document.querySelector('main');

// var that uses the span in html for playerhitpoint count
const playerHitpointCount = document.querySelector('span');

// var that determines player hitpoints
let playerHitpoints = 10;

// setting up dom elements
playerHitpointCount.textContent = playerHitpoints;


// an array of objects that will use the images in image folder to help populate images on the cards
const getData = () => [
    { imgSrc: './Images/Ancestral_hat.png', name: 'Hat' },
    { imgSrc: './Images/black_hween.png', name: 'hween' },
    { imgSrc: './Images/Black_partyhat.png', name: 'partyhat' },
    { imgSrc: './Images/christmas_cracker.png', name: 'cracker' },
    { imgSrc: './Images/Disk_of_returning.png', name: 'disk' },
    { imgSrc: './Images/Dragon_mace.png', name: 'mace' },
    { imgSrc: './Images/runescape_cat.png', name: 'cat' },
    { imgSrc: './Images/santahat.png', name: 'santa' },
    { imgSrc: './Images/Ancestral_hat.png', name: 'Hat' },
    { imgSrc: './Images/black_hween.png', name: 'hween' },
    { imgSrc: './Images/Black_partyhat.png', name: 'partyhat' },
    { imgSrc: './Images/christmas_cracker.png', name: 'cracker' },
    { imgSrc: './Images/Disk_of_returning.png', name: 'disk' },
    { imgSrc: './Images/Dragon_mace.png', name: 'mace' },
    { imgSrc: './Images/runescape_cat.png', name: 'cat' },
    { imgSrc: './Images/santahat.png', name: 'santa' },
];

// shuffle function using the above array that will shiffle the cards using the math methods
const shuffle = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// creating cards function
// card populator function set to an object array
const cardPopulator = () => {
    // shuffles cards
    const cardData = shuffle();
    // loop for creating all cards for game (16 total(loops))(item gives access to ea individual odject in the cardData array)
    cardData.forEach((item, index) => {
        // creating additional HTML elements to be used to make the 'bodies' of the cards
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        // adding classes to the above HTML elements to be used for the front of card, back of card and the whole card
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';
        // attach card sources to the card spaces
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);
        // attatching the cards to the main tag in the HTML
        main.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        // adding an event listener that is listenning for the below function(function is creating a toggle card class in the cards)
        card.addEventListener('click', (a) => {
            card.classList.toggle('toggleCard');
            checkCards(a);

        });
    });
};
// check for match
const checkCards = (a) => {
    // creating a var that collects data upon clicking. target being the element we clicked on
    const clickedCard = a.target;
    // adding a class that represents when a card is flipped
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');

    // if two cards are flipped then .. check if the names match
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                // when cards are matching can no longer click on them
                card.style.pointerEvents = 'none';
            });
            // if there is no match flip the cards back over and remove any flipped or togglecard classes allowing us to click cards again
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                // delay the flip back over animation
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            playerHitpoints--;
            playerHitpointCount.textContent = playerHitpoints;
            // check if we lost, if so restart
            if (playerHitpoints === 0) {
                restart('Try Again!');
            }
        }
    }
    //  check if we won if so restart
    if (toggleCard.length === 16) {
        restart('You won!')
    }
};
// restart game
const restart = (text) => {
    let cardData = shuffle();
    let front = document.querySelectorAll('.front');
    let cards = document.querySelectorAll('.card');

    // disable clicks while game restarts
    main.style.pointerEvents = 'none';
    cardData.forEach((item, index) => {
        // if we lose flip all cards back over(loop over ea card and remove togglecard class)
        cards[index].classList.remove('toggleCard');



        setTimeout(() => {
            // set pointer event back to all after a game reset
            cards[index].style.pointerEvents = 'all';
            // re-shuffle after a restart
            front[index].src = item.imgSrc;
            // re-assign appropriate name attribute after restart
            cards[index].setAttribute('name', item.name);
            // re-enable clicks
            main.style.pointerEvents = 'all';
        }, 1000);
    });
    playerHitpoints = 10;
    playerHitpointCount.textContent = playerHitpoints;

    setTimeout(() => document.getElementById('text').innerHTML = (text), 100);

    setTimeout(functionToRemoveInnerHTML, 3000);
    function functionToRemoveInnerHTML() {
        document.getElementById("text").innerHTML = "";
    };

};




cardPopulator();