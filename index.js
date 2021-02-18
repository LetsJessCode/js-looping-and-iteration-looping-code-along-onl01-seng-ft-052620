// Code your solutions in this file
function writeCards( nameCard, event ) {
    let thankYouCards = []
    for ( let i = 0; i < nameCard.length; i++ ) {
      thankYouCards.push( `Thank you, ${nameCard[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
}

function countDown(num) {
     while (num > 0){
            console.log(num);
            num -= 1;
        }
        console.log( num );
} 
    
