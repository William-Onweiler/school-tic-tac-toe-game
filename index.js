const  X_Class ='x'
const  circle_class= 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn


cellElements.forEach(cell =>{
   cell.addEventListener('click', handleClick,{once: true})
})
function handleClick(e){
    const cell = e.target
    const currentClass = circleTurn ? Circle_class : X_Class
    placeMark(cell, currentClass)
    console.log('clicked');
}
 function placeMark(cell, currentClass){
     cell.classList.add(currentClass)
 }
function swapTurns() {
    circleTurn = !circleTurn
}
let board =[
    ['X','X','X']
    ['O','X','O']
    ['O','O','X']
];
let player1 = 'X'
let player2 = 'O'
function setup(){
    createCanvas(400,400);
}
        function draw(){
            background(220);
            for(let i = 0; i < 3; i++){

            } for( let j = 0; j < 3; j++) {
                let x = w * i;
                let y = h * j;
                let spot = board[i][j];
                text(spot, x, y);
            }
        }