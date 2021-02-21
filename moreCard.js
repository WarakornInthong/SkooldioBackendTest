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

const moreCard = ({cards, player, dealer}) =>{
    if(player){
        let card = Math.floor(Math.random() * cards.length)
        cards.splice(card,1)
        card = checkCard(card)
        let p = [...player]
        p.push(card)
        return {cards:cards,player:p}

    }
    else if(dealer){
        let card = Math.floor(Math.random() * cards.length)
        cards.splice(card,1)
        card = checkCard(card)
        let d = [...dealer]
        d.push(card)
        return {cards:cards,dealer:d}
    }
    else
        return {msg: 'error'}

}


module.exports = moreCard