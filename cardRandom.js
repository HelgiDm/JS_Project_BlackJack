const cardRandom = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '6,7,8,9,10,J,Q,K,A',
    makeDeck() {
        let {deck, suits, values} = this;
        for (let suit of suits) {
            for (let value of values.split(',')) {
                deck.push({
                    value,
                    suit
            })}
    }
    return deck;
    },
    drawCard() {
        let yourCard = this.deck[Math.floor(Math.random() * this.deck.length)];
        this.deck.splice(this.deck.indexOf(yourCard), 1);
        yourPick.push(yourCard);
        return yourCard
    },
    score: [],
    sumPick() {
        for (i of yourPick) {
            this.score.push(Object.values(i)[0]);
            console.log(Object.values(i)[0]);
        }
        if (this.score.includes('J') || this.score.includes( 'Q') || this.score.includes('K') || this.score.includes('A')) {console.log('pizdez')}

        else {console.log('Norm')}
    }
}

const startButton = document.getElementById('start-button');
let yourPick = []
startButton.addEventListener('click', () => {
    if (!yourPick.length) {
        cardRandom.makeDeck();
        cardRandom.drawCard();
        cardRandom.drawCard();
        console.log(yourPick,`current score: ${parseInt(yourPick)}`)
    }
    else {
        alert('You fool?')
    }


});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    yourPick = [];
    cardRandom['deck'] = [];
    cardRandom['score'] = [];
})











