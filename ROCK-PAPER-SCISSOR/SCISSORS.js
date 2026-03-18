let buttons = document.querySelectorAll(".images button");
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
let turn = true;
let timeout=null;
let btn = 3;

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
                btn=0;
                }
            else if(clickedBtn.classList.contains("b2")){
                btn2.classList.add("hideBtn5");
                btn2.classList.add("hideBtn2");
                btn=1;
                }
            else{
                btn3.classList.add("hideBtn6");
                btn3.classList.add("hideBtn3");
                btn=2;
                }
            console.log("You clicked");
            turn=false;
        }
        button.disabled =true;
        comp();
    })
})

const reset = () => {
    console.log("Reset")
    buttons.forEach(button =>{
        button.disabled = false;
        btn=null;
        turn=true;
    })
    time = null;
    draw.classList.add("draw");
    btn1.classList.remove("hideBtn4");
    btn2.classList.remove("hideBtn5");
    btn3.classList.remove("hideBtn6");

    win.classList.add("won");

    btn1.classList.remove("hideBtn1");
    btn2.classList.remove("hideBtn2");
    btn3.classList.remove("hideBtn3");
}

const comp =() => {
    let random = Math.floor(Math.random()*3);
    console.log(random);
    console.log(btn);
    if(btn===random){
        draw.classList.remove("draw");
        time=setTimeout(()=>{
            reset()

        }, 3500);
    }
     else if(random===0){
        btn1.classList.add("animate");
        btn1.classList.add("hideBtn1");
        time=setTimeout(()=>{
            winner()
        }, 3500);
    }
    else if(random===1){
        btn2.classList.add("animate");
        btn2.classList.add("hideBtn2");
        time=setTimeout(()=>{
            winner()
        }, 3500);
    }
    else {
        btn3.classList.add("animate");
        btn3.classList.add("hideBtn3");
        time=setTimeout(()=>{
            winner(random)
        }, 3500);
    }
    // score(random);
}

let i = 0;
let j = 0;
const winner = (rando) => {
    if (rando === 0 && btn === 1 || rando === 1 && btn === 2 || rando === 2 && btn === 0){
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
        }, 3500);
    }
    else{
        i=0;
        j=0;
        time=setTimeout(()=>{
            reset()
        }, 3500);
    }
}