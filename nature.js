// let l_cards = document.querySelectorAll('.nature-card-l');
// console.log(l_cards);
// for(let i = 0; i<l_cards.length; i++){
//     let card = l_cards[i];
//     card.addEventListener('mouseover', function addClassName(){
//         console.log('IIIIII')
//         card.classList.add('description');
//         card.classList.remove('hidden')
//     })
// }
let card1 = document.getElementById('card-1-des');
function addClass1(card){
    card1.classList.add('description');  
    card.classList.add('flip');
    card1.classList.remove('hidden');
}
function removeClass1(card){
    card1.classList.add('hidden');
    card1.classList.remove('description'); 
    card.classList.remove('flip')
}