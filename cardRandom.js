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
        document.querySelector('.field').append(cardImg);
    },
    vizualCardBack() {
        let n = 0;
        while (n <= 36) {
            const cardBack = document.createElement('img');
            cardBack.src = 'images/cardBack.png';
            cardBack.style.top = `${20 - n * 0.05}vh`;
            cardBack.style.left = `${6 - n * 0.05}vw`;
            document.querySelector('.card-back').append(cardBack);
            n += 1;
        }
    },
    vizualDlr() {
        dlrBack = document.createElement('img');
        dlrBack.src = 'images/cardBack.png';
        document.querySelector('.dlr-field').append(dlrBack);
    },
    score: [],
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
                    if (this.score.includes(11)) {
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
    },

    dealerScore() {
        let dlrScore = this.score.reduce((a, b) => {return a + b});
        return dlrScore;
    },

    dealerTurn() {
        let active = true;
        if (this.dealerScore() >= 20) {
            active = false
        }
        else if (this.dealerScore() === 19) {
            let chance = Math.floor(Math.random() * 9 + 1);
            console.log(chance);
            if (chance === 9) {
                this.sumPick(this.drawCard())
                active = false
            }
            else {active = false}
        }
        else if (this.dealerScore() === 18) {
            let chance = Math.floor(Math.random() * 5 + 1);
            console.log(chance);
            if (chance === 5) {
                this.sumPick(this.drawCard())
                active = false
            }
            else {active = false}
        }
        else if (this.dealerScore() === 17 || this.dealerScore() === 16) {
            let chance = Math.floor(Math.random() * 3 + 1);
            console.log(chance);
            if (chance === 3) {
                this.sumPick(this.drawCard());
                active = false
            }
            else {active = false}
        }
        else {
            this.sumPick(this.drawCard());
        }
        return active
        },

    result() {
        if (curScore === 21) {alert('You win!')}
        else if ((curScore < 21 || curScore > 21) && this.dealerScore() === 21) {alert('You lose!')}
        else if (curScore < 21 && curScore > this.dealerScore()) {alert('You win!')}
        else if (this.dealerScore() < 21 && curScore < this.dealerScore()) {alert('You lose!')}
        else if (curScore > 21 && this.dealerScore() < 21) {alert('You lose!')}
        else if (curScore < 21 && this.dealerScore() > 21) {alert('You win!')}
        else {alert('You win!')}
    }

}

// Making cards deck with card back picture
cardRandom.vizualCardBack()

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
        document.querySelector('.card-back').lastElementChild.remove();
        document.querySelector('.card-back').lastElementChild.remove();

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
        document.querySelector('.field').append(cardImg);
        curScore = curScore + cardRandom.sumPick(yourPick[yourPick.length - 1]);
        scoreNumb.innerText = curScore;
        document.querySelector('.card-back').lastElementChild.remove();
//        console.log(yourPick,`current score: ${parseInt(yourPick)}`)
    }
    else {
        alert('You need to click "Click to start!" firstly')
    }
})

// The same with clicking on the card deck
document.querySelector('.card-back').addEventListener('click', () => {
    if (yourPick.length) {
        const cardImg = document.createElement('img');
        cardImg.src = cardRandom.pickCard().img;
        document.querySelector('.field').append(cardImg);
        curScore = curScore + cardRandom.sumPick(yourPick[yourPick.length - 1]);
        scoreNumb.innerText = curScore;
        document.querySelector('.card-back').lastElementChild.remove();
    }
    else {
        alert('You need to click "Click to start!" firstly')
    }
})

//Reset Button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    cardRandom['deck'] = [];
    document.querySelector('.card-back').innerHTML = '';
    cardRandom.vizualCardBack();
    cardRandom['score'] = [];
    scoreNumb.innerText = 0;
    document.querySelector('.field').innerHTML = '';
    document.querySelector('.dlr-field').innerHTML = '';
    yourPick = [];

})

//Finish Button
const finButton = document.querySelector('#fin');
finButton.addEventListener('click', () => {
    cardRandom.score = [];
    yourPick = [];
    cardRandom.sumPick(cardRandom.drawCard());
    document.querySelector('.card-back').lastElementChild.remove();
    cardRandom.vizualDlr();
    cardRandom.sumPick(cardRandom.drawCard());
    document.querySelector('.card-back').lastElementChild.remove();
    cardRandom.vizualDlr();
    console.log(cardRandom.score);
    console.log(cardRandom.dealerScore());
    while (cardRandom.dealerTurn() === true) {
        cardRandom.dealerTurn();
        document.querySelector('.card-back').lastElementChild.remove();
        cardRandom.vizualDlr();
    }
    document.querySelector('#dlr-numb').innerText = cardRandom.dealerScore()
    console.log(cardRandom.score);
    console.log(cardRandom.dealerScore());
    setTimeout(() => {
        document.querySelector('.dlr-field').innerHTML = ''
            for (card of yourPick) {
                let dlrImg = document.createElement('img');
                dlrImg.src = card.img;
                document.querySelector('.dlr-field').append(dlrImg);
            };
        setTimeout(() => {cardRandom.result()}, '2000');
    }, '2000')

})







