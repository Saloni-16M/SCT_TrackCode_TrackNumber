let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turnO=true; //playerX,PlayerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked")
        if(turnO===true){
            box.innerText="O"
            turnO=false
        }
        else{
            box.innerText="X"
            turnO=true

        }
        box.disabled=true;

        checkwinner();
    })
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")

}
const checkwinner=()=>{
    for (let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);


        if(pos1val !=""&&pos2val!="" && pos3val!=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                // console.log("winner",pos1val)
                showwinner(pos1val);

            }
        }
    }
}

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide")

}

newgameBtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)