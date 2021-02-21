const checkCard = (card) =>{
    // console.log(card)
    let type = parseInt(Math.ceil(card/13))
    let value = parseInt(card%13)
    let point = parseInt(card%13)
    switch(type){
        case 1: type = 'Clubs-'
                break;
        case 2: type = 'Diamonds-'
                break;
        case 3: type = 'Heards-'
                break;
        case 4: type = 'Spades-'
                break;
    }
    switch(value){
        case 1 : value = 'Ace'
                break;
        case 11: value = 'Jack'
                break;
        case 12: value = 'Queen'
                break;
        case 0: value = 'King'
                break;
        default: value = value
                break;
    }
    switch(point){
        case 10:
        case 11:
        case 12:
        case 0 : point = 0
                break;
        default: point = point
                break;
    }
    
    return {type: type,
            value: value,
            point: point}
}

const decodeCard = (PlayerCard, DealerCard) =>{
    // console.log(PlayerCard)
    // console.log(DealerCard)
    let pCards = []
    for (let i = 0;i<PlayerCard.length;i++){
        // console.log(PlayerCard[i])
        thiscard = checkCard(PlayerCard[i])
        // console.log(thiscard)
        pCards.push(thiscard)
    }
    let dCards = []
    for (let i = 0;i<DealerCard.length;i++){
        thiscard = checkCard(DealerCard[i])
        // console.log(thiscard)
        dCards.push(thiscard)
    }
    return {PlayerCard:pCards, DealerCard:dCards}
}


const SendCard = () =>{

    const cards = []
    for(let i=1; i<53;i++){
        cards.push(i)
    }

    // console.log(cards)
    // %13 = value , /13 type

    let PlayerCard = []
    let DealerCard = []

    for(let i=0;i<4;i++){
        if(i<2){
            let card = Math.floor(Math.random() * cards.length)
            PlayerCard.push(cards[card])
            cards.splice(card,1)
        }
        else{
            let card = Math.floor(Math.random() * cards.length)
            DealerCard.push(cards[card])
            cards.splice(card,1)
        }
    }

    const out = decodeCard(PlayerCard,DealerCard)

    return {player: out.PlayerCard,
            dealer: out.DealerCard,
            cards: cards}
}

// const moreCard = () =>{
//     console.log('hello')
// }


module.exports = SendCard

// module.exports = moreCard