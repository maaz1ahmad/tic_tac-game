let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let container1 = document.querySelector(".container1");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerY playerO starts the game

const winPatterns = [  //winPatterns should be an array of arrays, not an object
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    container1.classList.add("hide"); 
};

//Adding event listeners for all the boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){  //player O
         box.innerText = "O";
         turnO = false;
        } else { //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = 'Congratulations, Winner is ${winner}';
    container1.classList.remove("hide");

};

const checkWinner = () => {
    for( let pattern of winPatterns){
        console.log([pattern[0]],[pattern[1]],[pattern[2]])
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);