let userscore=0
let compscore=0

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector('#computer-score')
const gencompchoice=()=>{
    let options=['rock','paper','scissors']
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawgame=()=>{
    console.log("Game was draw")
    msg.innerText="Game was draw.Play again."
    msg.style.background='#081b31'
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
     
     msg.innerText=`You win! Your ${userchoice} beats computer's ${compchoice}`
     msg.style.background='green'
    }
    else
    {  compscore++;
       compscorepara.innerText= compscore;
   
     msg.innerText=`you lose! Computer's ${compchoice} beats your ${userchoice}`
     msg.style.background='red'
    }
}

const playgame=(userchoice)=>{
    console.log("user choice= ",userchoice)
     const compchoice=gencompchoice();
     console.log('compchoice= ',compchoice)

     if(userchoice===compchoice)
     {
            drawgame();
     }
     else{
        let userwin=true;
        if(userchoice==='rock')
        {
            userwin= compchoice==='paper'?false:true;

        }
        else if(userchoice==='paper'){

           userwin= compchoice==='scissors'?false:true;

        }
        else
        {
            userwin= compchoice==='rock'?false:true;
        }

        showWinner(userwin,userchoice,compchoice);
     }
}

choices.forEach((choice)=>{
   
    choice.addEventListener('click',()=>{
     const userchoice=choice.getAttribute("id");
      
    
      playgame(userchoice)
    });
});
