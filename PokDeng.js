const readline = require("readline");
const SendCard = require("./Cardlist");
const moreCard = require("./moreCard")
const prompt = require("prompt-sync")({ sigint: true });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let sum = 0

console.log("node start");
let ans = ''
do {
    let chips = prompt("Please put your bet: ");
    chips = Number(chips);
    let { player, dealer, cards } = SendCard();
    console.log(
        `You got ${player[0].type}${player[0].value}, ${player[1].type}${player[1].value}`
    );
    console.log(
        `You got ${dealer[0].type}${dealer[0].value}, ${dealer[1].type}${dealer[1].value}`
    );

    let playerPoint = (player[0].point + player[1].point) % 10;
    let dealerPoint = (dealer[0].point + dealer[1].point) % 10;
    if (dealerPoint == 9) {
        if (playerPoint != 9){
            console.log(`Dealer won!!!, losed ${chips} chips`);
            sum = sum - chips
        }
        else {
            console.log(`You tied!!!, you get nothing`);
        }
    } 
    else if (playerPoint == 9) {
        if (dealerPoint != 9) {
            console.log(`You won!!!, received ${chips} chips`);
            sum = sum + chips
        } 
        else {
            console.log(`You tied!!!, you get nothing`);
        }
    } 
    else {
        if (playerPoint < dealerPoint) {
            console.log(`Dealer won!!!, losed ${chips} chips`);
            sum = sum - chips
            // not finish for moreCard

            // console.log(`you want more card ${playerPoint}  ${dealerPoint}`);

            // let buff = moreCard({cards:cards,player:player})
            // cards = buff.cards
            // player = buff.player
            // playerPoint = (player[2].point)%10
            // if(playerPoint < dealerPoint){
            //     console.log(`Dealer won!!!, losed ${chips} chips`);
            //     sum = sum - chips
            // }
            // else{
            //     if(dealer.length<3){
            //         let buff = moreCard({cards:cards,dealer:dealer})
            //         dealer = 
            //     }
                
            // }

        } else {
            console.log(`You won!!!, received ${chips} chips`);
            sum = sum + chips
        }
    }
    let answer = prompt('Wanna play more (Yes/No) : ')
    ans = answer.toLowerCase()
    if(ans != 'yes')
        break
}
while (ans == 'yes')


console.log(`You got total ${sum} chips`);
process.exit(0);



// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });


// rl.question("Please put your bet:", (chips) => {
//     let { player, dealer, cards } = SendCard();
//     // console.log(cards)

//     console.log(
//         `You got ${player[0].type}${player[0].value}, ${player[1].type}${player[1].value}`
//     );
//     console.log(
//         `You got ${dealer[0].type}${dealer[0].value}, ${dealer[1].type}${dealer[1].value}`
//     );
//     let playerPoint = (player[0].point + player[1].point) % 10;
//     let dealerPoint = (dealer[0].point + dealer[1].point) % 10;
//     if (dealerPoint == 9) {
//         if (playerPoint != 9) console.log(`Dealer won!!!, losed ${chips} chips`);
//         else {
//             console.log(`You tied!!!, you get nothing`);
//         }
//     } else if (playerPoint == 9) {
//         if (dealerPoint != 9) {
//             console.log(`You won!!!, received ${chips} chips`);
//         } else {
//             console.log(`You tied!!!, you get nothing`);
//         }
//     } else {
//         if (playerPoint < dealerPoint) {
//             console.log(`you want more card ${playerPoint}  ${dealerPoint}`);
//         } else {
//             console.log(`dealer want more card ${playerPoint}  ${dealerPoint}`);
//         }
//     }
//     rl.question("Wanna play more (Yes/No) :", (ans) => {
//         console.log(ans);
//         return ans.toLowerCase();
//     });
// });