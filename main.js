// let c= document.querySelector('first');

// console.log(c.getTotalLength());
let game = document.querySelector('.game'),
res= document.querySelector('.res'),
btnGame = document.querySelector('.new-game'),
fields = document.querySelector('.field'),
step = false,
circle= `<svg class="circle">
<circle class="ci" r="45" cx="58" cy="58" stroke="pink"
stroke-width="10" fill="none" 
stroke-linecap="round" />
</svg> `,
cross=`<svg class="cross">
<line class="first" x1="15" y1="15" x2="100" y2="100" 
stroke="yellow" stroke-width="10"
stroke-linecap="round" />
<line class="second" x1="100" y1="15" x2="15" y2="100" 
stroke="red" stroke-width="10"
stroke-linecap="round" />
</svg>`;

function stepCross(target){
target.innerHTML=cross;
let crossAudio = new Audio('audio/cross.mp3');
crossAudio.play();
}
function stepZero(target){
    target.innerHTML=circle;
    let zeroAudio = new Audio('audio/zero.mp3');
zeroAudio.play();
}
function init(e){
if(!step) stepCross(e.target);
else stepZero(e.target);
step=!step;
win();
}
function newGame(){

}
function win(){

}
btnGame.addEventListener('click', newGame);
game.addEventListener('click', init);
