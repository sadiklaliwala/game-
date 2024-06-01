
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let turn = true;
let newbutton = document.querySelector("#new-btn");
let newcon = document.querySelector(".con");
let msg = document.querySelector("#msg");
let count = 0
let drawcon = document.querySelector(".con1")
let msg1 = document.querySelector("#d-msg")
let dbutton = document.querySelector("#d-new-btn")
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


let zerocount =()=>{
    count=0;
}
let drbtn =()=>{
    turn=true;
    rmcolor();
    enable();
    drawcon.classList.add("hide");
    count=0
    console.log("draw button");
}

dbutton.addEventListener("click",drbtn);

let check = () => {
    if (count > 8) {
        msg1.innerText = "Draw";
        drawcon.classList.remove("hide");
    }
}

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        count++;
        console.log(count);
        check();
        if (turn) {
            box.innerText = "o";
            box.classList.add("ochange")
            turn = false;

        }
        else {
            box.innerText = "x";
            box.classList.add("xchange")
            turn = true;
        }
        box.disabled = true;
        checkwinner();
    });

});


const rbtn = () => {
    zerocount();
    turn = true;
    enable();
    rmcolor();
    newcon.classList.add("hide");

}

const newgame = () => {
    turn = true;
    zerocount();
    rmcolor();
    enable();
    newcon.classList.add("hide");
    console.log("new button");
}



const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const rmcolor = () => {
    for (box of boxes) {
        box.classList.remove("ochange");
        box.classList.remove("xchange");
    }
}

const disable = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulation you are winner ${winner}`
    disable();
    newcon.classList.remove("hide")
}

const checkwinner = () => {
    for (let pattern of winpattern) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner");
                showwinner(pos1val);
            }
        }
    }
};


resetbtn.addEventListener("click", rbtn);
newbutton.addEventListener("click", newgame);