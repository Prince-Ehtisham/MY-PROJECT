let buttons = document.querySelectorAll(".images button");
let bttn = document.querySelectorAll(".btn");
let btn1 = document.querySelector(".b1");
let hidBtn1 = document.querySelector(".hideBtn1");
let hidBtn4 = document.querySelector(".hideBtn4");
let btn2 = document.querySelector(".b2");
let hidBtn2 = document.querySelector(".hideBtn2");
let hidBtn5 = document.querySelector(".hideBtn5");
let btn3 = document.querySelector(".b3");
let hidBtn3 = document.querySelector(".hideBtn3");
let hidBtn6 = document.querySelector(".hideBtn6");
let results = document.querySelector(".result");
let final = document.querySelectorAll(".final");
let draw = document.querySelector(".draw");
let win = document.querySelector(".won");
let user = document.querySelector(".user");
let computer = document.querySelector(".comp");
let resetBtn = document.querySelector(".reset");
let turn = true;
let timeout=null;
let btns = 0;

resetBtn.addEventListener("click",() =>{
    i=0;
    j=0;
    computer.innerText = `Computer : ${j}`;
    user.innerText = `You : ${i}`;
    reset();
})

btn1.classList.remove("animate");
btn2.classList.remove("animate");
btn3.classList.remove("animate");

btn1.classList.remove("hideBtn1");
btn2.classList.remove("hideBtn2");
btn3.classList.remove("hideBtn3");

btn1.classList.remove("hideBtn4");
btn2.classList.remove("hideBtn5");
btn3.classList.remove("hideBtn6");


buttons.forEach((button) => {
    button.addEventListener("click",function(event) {
        if(turn){
            const clickedBtn = event.target;
            if(clickedBtn.classList.contains("b1")){
                btn1.classList.add("hideBtn4");
                btn1.classList.add("hideBtn1");
                btns=0;
                }
            else if(clickedBtn.classList.contains("b2")){
                btn2.classList.add("hideBtn5");
                btn2.classList.add("hideBtn2");
                btns=1;
                }
            else{
                btn3.classList.add("hideBtn6");
                btn3.classList.add("hideBtn3");
                btns=2;
                }
                setTimeout(() =>{
            button.disabled =true;
        }, 2500);
        let k= btns;
console.log(k);
let buttn = (bttn[k]);
console.log(buttn);
        comp(buttn);
            console.log("You clicked");
            turn=false;
        }
    })
})

// buttn.classList.remove("animate");
//     buttn.style.border ="none";
const reset = () => {
    console.log("Reset")
    buttons.forEach(button =>{
        button.disabled = false;
        btns=null;
        turn=true;
    })
    time = null;
    draw.classList.add("draw");
    btn1.classList.remove("hideBtn4");
    btn2.classList.remove("hideBtn5");
    btn3.classList.remove("hideBtn6");

    win.classList.add("won");

    btn1.classList.remove("animate");
    btn2.classList.remove("animate");
    btn3.classList.remove("animate");

    btn1.classList.remove("hideBtn1");
    btn2.classList.remove("hideBtn2");
    btn3.classList.remove("hideBtn3");
}

const color = (bond) => {
    bond.classList.remove("animate");
    bond.style.border ="3px solid #35053d";
}
const comp =(prop) => {
    let random = Math.floor(Math.random()*3);
    console.log(random);
    console.log(btns);
    
    if(btns===random){
        prop.classList.add("animate");
        prop.style.border ="3px solid green";
        draw.classList.remove("draw");
        time=setTimeout(()=>{
            reset();
            color(prop);
        }, 2500);
    }
     else if(random===0){
        btn1.classList.add("animate");
        btn1.classList.add("hideBtn1");
        
            winner()
        
    }
    else if(random===1){
        btn2.classList.add("animate");
        btn2.classList.add("hideBtn2");
        
            winner()
        
    }
    else {
        btn3.classList.add("animate");
        btn3.classList.add("hideBtn3");
        
            winner(random)
        
    }
    // score(random);
}

let i = 0;
let j = 0;
const winner = (rando) => {
    if (rando === 0 && btns === 1 || rando === 1 && btns === 2 || rando === 2 && btns === 0){
        win.classList.remove("won");
        win.innerText =` The Winner is User`;
        i++;
    }
    else {
        win.classList.remove("won");
        win.innerText =` The Winner is Computer`;
        j++;
    }
    compScore();
}

const compScore = () => {
    if(i<=10 || j<=10){
    computer.innerText = `Computer : ${j}`;
    user.innerText = `You : ${i}`;
    time=setTimeout(()=>{
            reset()
        }, 2500);
    }
    else{
        i=0;
        j=0;
        time=setTimeout(()=>{
            reset()
        }, 2500);
    }
}