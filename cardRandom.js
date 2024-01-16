const cardRandom = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '6,7,8,9,10,J,Q,K,A',
    image: ['images/6_of_hearts.png', 'images/7_of_hearts.png', 'images/8_of_hearts.png', 'images/9_of_hearts.png', 'images/10_of_hearts.png',
    'images/jack_of_hearts2.png', 'images/queen_of_hearts2.png', 'images/king_of_hearts2.png', 'images/ace_of_hearts.png',
    'images/6_of_diamonds.png', 'images/7_of_diamonds.png', 'images/8_of_diamonds.png', 'images/9_of_diamonds.png', 'images/10_of_diamonds.png',
    'images/jack_of_diamonds2.png', 'images/queen_of_diamonds2.png', 'images/king_of_diamonds2.png', 'images/ace_of_diamonds.png',
    'images/6_of_spades.png', 'images/7_of_spades.png', 'images/8_of_spades.png', 'images/9_of_spades.png', 'images/10_of_spades.png',
    'images/jack_of_spades2.png', 'images/queen_of_spades2.png', 'images/king_of_spades2.png', 'images/ace_of_spades.png',
    'images/6_of_clubs.png', 'images/7_of_clubs.png', 'images/8_of_clubs.png', 'images/9_of_clubs.png', 'images/10_of_clubs.png',
    'images/jack_of_clubs2.png', 'images/queen_of_clubs2.png', 'images/king_of_clubs2.png', 'images/ace_of_clubs.png'
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
//    sumPick() {
//        for (i of yourPick) {
//            console.log(i.value);
//            if (isNaN(Number(i.value))) {
//                if (Object.values(i).includes('J')) {this.score.push(2)}
//                else if (Object.values(i).includes('Q')) {this.score.push(3)}
//                else if (Object.values(i).includes('K')) {this.score.push(4)}
//                else if (Object.values(i).includes('A')) {
//                    if (Object.values(i).includes(11)) {
//                        this.score.push(10)
//                    }
//                    else {
//                        this.score.push(11)
//                    }
//                }
//            }
//            else {this.score.push(Number(i.value))}
//        }
//        return this.score
//    },
    sumPick(card) {
            if (isNaN(Number(card.value))) {
                if (Object.values(card).includes('J')) {
                this.score.push(2);
                return 2
                }
                else if (Object.values(card).includes('Q')) {
                this.score.push(3);
                return 3
                }
                else if (Object.values(card).includes('K')) {
                this.score.push(4);
                return 4
                }
                else if (Object.values(card).includes('A')) {
                    if (Object.values(card).includes(11)) {
                        this.score.push(10);
                        return 10
                    }
                    else {
                        this.score.push(11);
                        return 11
                    }
                }
            }
            else {
            this.score.push(Number(card.value));
            return Number(card.value)
            }
    },

    pickCard() {
        let newCard = this.deck[Math.floor(Math.random() * this.deck.length)];
        this.deck.splice(this.deck.indexOf(newCard), 1);
        yourPick.push(newCard);
        return newCard
    }
}

//Start-Game Button
let curScore = 0;
let yourPick = [];
const scoreNumb = document.getElementById('numb');
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    if (!yourPick.length) {
        cardRandom.makeDeck();
        cardRandom.vizual();
        cardRandom.vizual();
        for (i of yourPick) {
            cardRandom.sumPick(i)
        }
        curScore = cardRandom.score.reduce((a, b) => {return a + b});
        scoreNumb.innerText = curScore;
//        console.log(yourPick,`current score: ${curScore}`);
    }
    else {
        alert('Game is already started!')
    }
});

//Pick-Card Button
const pickCard = document.getElementById('pick-card');
pickCard.addEventListener('click', () => {
    if (yourPick.length) {
        const cardImg = document.createElement('img');
        cardImg.src = cardRandom.pickCard().img;
        document.querySelector('div').append(cardImg);
        scoreNumb.innerText = curScore + cardRandom.sumPick(yourPick[yourPick.length - 1])
//        console.log(yourPick,`current score: ${parseInt(yourPick)}`)
    }
    else {
        alert('You need to click "Click to start!" firstly')
    }
})

//Reset Button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    cardRandom['deck'] = [];
    cardRandom['score'] = [];
    scoreNumb.innerText = 0;
    for (j of yourPick) {
        document.querySelector('img').remove()
    };
    yourPick = [];
})









