const cardRandom = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '6,7,8,9,10,J,Q,K,A',
    image: ['6_of_hearts.png', '7_of_hearts.png', '8_of_hearts.png', '9_of_hearts.png', '10_of_hearts.png',
    'jack_of_hearts2.png', 'queen_of_hearts2.png', 'king_of_hearts2.png', 'ace_of_hearts.png',
    '6_of_diamonds.png', '7_of_diamonds.png', '8_of_diamonds.png', '9_of_diamonds.png', '10_of_diamonds.png',
    'jack_of_diamonds2.png', 'queen_of_diamonds2.png', 'king_of_diamonds2.png', 'ace_of_diamonds.png',
    '6_of_spades.png', '7_of_spades.png', '8_of_spades.png', '9_of_spades.png', '10_of_spades.png',
    'jack_of_spades2.png', 'queen_of_spades2.png', 'king_of_spades2.png', 'ace_of_spades.png',
    '6_of_clubs.png', '7_of_clubs.png', '8_of_clubs.png', '9_of_clubs.png', '10_of_clubs.png',
    'jack_of_clubs2.png', 'queen_of_clubs2.png', 'king_of_clubs2.png', 'ace_of_clubs.png'
    ],
    makeDeck() {
        let {deck, suits, values} = this;
        let n = 0;
        for (let suit of suits) {
            for (let value of values.split(',')) {
                deck.push({
                    value,
                    suit,
                    img: this.image[n]
            });
            n += 1;
            }
    }
    return deck;
    },
    drawCard() {
        let yourCard = this.deck[Math.floor(Math.random() * this.deck.length)];
        this.deck.splice(this.deck.indexOf(yourCard), 1);
        yourPick.push(yourCard);
        return yourCard
    },
    vizual() {
        const cardImg = document.createElement('img');
        cardImg.src = this.drawCard().img;
        document.querySelector('div').append(cardImg)
    },
    score: [],
    sumPick() {
//        for (i of yourPick) {
//            if ()
//            this.score.push(Object.values(i)[0]);
//            console.log(Object.values(i)[0]);
//        }
//        if (this.score.includes('J') || this.score.includes( 'Q') || this.score.includes('K') || this.score.includes('A')) {console.log('pizdez')}
//
//        else {console.log('Norm')}
    }
}

const startButton = document.getElementById('start-button');
let yourPick = []
startButton.addEventListener('click', () => {
    if (!yourPick.length) {
        cardRandom.makeDeck();
//        cardRandom.drawCard();
        cardRandom.vizual();
//        cardRandom.drawCard();
        cardRandom.vizual();
        console.log(yourPick,`current score: ${parseInt(yourPick)}`);

    }
    else {
        alert('You fool?')
    }


});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    cardRandom['deck'] = [];
    cardRandom['score'] = [];
    for (j of yourPick) {
        document.querySelector('img').remove()
    };
    yourPick = [];
})











