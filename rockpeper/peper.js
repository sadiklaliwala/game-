let userscore=0;
let compscore=0;
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userscoredpara=document.querySelector("#user-score");
const compscoredpara=document.querySelector("#comp-score");

const gencompchoice = ()=>{
    let option =["rock","peper","sessior"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
}

const showwinner =(userwin,compchoice,userchoice)=>{
    if(userwin){
        userscore++
        userscoredpara.innerText=userscore;
        msg.innerText =`You win ! Your ${userchoice} Beats the ${compchoice}`;
        msg.style.backgroundColor="green";        
    }
    else{
        compscore++;
        compscoredpara.innerText=compscore;
        msg.innerText =`You Lose Computer ${compchoice} Beats ${userchoice}  `;
        msg.style.backgroundColor="red"
    }
}



let playgame=(userchoice)=>{
    let compchoice=gencompchoice();
    console.log("user choice " ,userchoice)
    console.log("computer choice " ,compchoice)

    if(userchoice===compchoice){
        console.log("draw");
        msg.innerText ="Game Was Draw";
        msg.style.backgroundColor="#081b51"
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
                //peper sessior
                userwin =compchoice==="peper" ? false:true;
            }
            else if(userchoice=="peper"){
            userwin =compchoice==="sessior" ? false:true;
        }else{
            userwin =compchoice==="rock" ? false:true;
        }
        showwinner(userwin,compchoice,userchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
    });
});




















