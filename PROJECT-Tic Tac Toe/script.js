let btn = document.querySelectorAll(".box");
let turn = true;
let scoreX = document.querySelector(".scoreX")
let scoreO = document.querySelector(".scoreO")
let X = 1;
let O = 1;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

btn.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn){
            turn = false;
            box.innerText = "O";
        }else {
            turn = true;
            box.innerText = "X";
        }
        box.disabled = true;
        winningfn();        
    })
})

let winningfn = () => {
   for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2]);    
    let pos1 = btn[pattern[0]].innerText
    let pos2 = btn[pattern[1]].innerText    
    let pos3 = btn[pattern[2]].innerText
    // console.log(pos1,pos2,pos3);
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log(pos1);
            if(pos1 == "X"){
                forX();
            }else {
                forO();
            }
            disabledbtn();
        }    
    }
    }
}
forO =() => {
    scoreO.innerText = `O = ${O++}`  
}
forX = () => {
   scoreX.innerText = `X = ${X++}`  
}

disabledbtn = () => {
    for(let box of btn){
        box.disabled = true;
    }
}


let resetbtn = document.querySelector(".resetBtn");

resetbtn.addEventListener("click",resetGame);

function resetGame(resetbtn) {
    turn = true;
    for(let box of btn){
        box.innerText = "";
        box.disabled = false;
    }
}

let newbtn = document.querySelector(".newBtn");

newbtn.addEventListener("click",newGame);

function newGame(newbtn) {
    turn = true;
    for(let box of btn){
        box.innerText = "";
        box.disabled = false;
    }
    X = 1;
    O = 1;
    scoreO.innerText = `O = 0`;
    scoreX.innerText = `X = 0`;
   
}
