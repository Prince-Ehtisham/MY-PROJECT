let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector(".newGame");
let cont = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let drawText = document.querySelector(".hideMsg");
let turn = true; // the player turn
let checkClick = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

const game = () => {
    turn = true;
    enableBox();
    cont.classList.add("hide");
    checkClick = 0;
    drawText.classList.add("hideMsg");
};

boxes.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (turn) {
            btn.innerText = "X";
            console.log(`You clicked the button ${index}`);
            turn = false;
        } else {
            btn.innerText = "O";
            btn.style.color = "#F8FFE5";
            console.log(`You clicked the button ${index}`);
            turn = true;
        }
        btn.disabled = true;
        checkClick++;
        checkWinner();
    });
});

const checkBox = () => {
    for (let tin of boxes) {
        tin.disabled = true;
    }
};
const enableBox = () => {
    for (let tin of boxes) {
        tin.disabled = false;
        tin.innerText = "";
        tin.style.color = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    cont.classList.remove("hide");
    drawText.classList.add("hideMsg");
    checkBox();
};

let winner = false;

const checkWinner = (winner) => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
                winner = true;
                console.log(winner);
                return;
            } else {
                checkFun(winner);
            }
        }
    }
};

const checkFun = (checkit = () => {
    if (!winner && checkClick === 9) {
        cont.classList.add("hide");
        drawText.classList.remove("hideMsg");
        checkBox();
    }
});

newGameBtn.addEventListener("click", game);
reset.addEventListener("click", game);
