let count = 0;
let difficult;
let time;

// general variables;
let randMsg = document.querySelector('#randMsg');
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn')
let message = document.querySelector('#message')
let timer = document.querySelector('#timer')
let score = document.querySelector('#score');


let arr = require('./random');

// Generate random number
function genRand(val){
    let word = Math.floor(Math.random() * val.length);
    return randMsg.innerHTML = val[word];
}

// Check for match
function wordMatch(){
    if(inp.value===randMsg.innerHTML){
        message.innerHTML= 'Correct!!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

// get match and process
function catchMatch(){
    if(wordMatch()){
        inp.value='';
        time=6
        count++
        genRand(arr)
        diff()
    }
    score.innerHTML = count;
}

// Set Timer
function setCount(){
    if(time>0){
        time--
        timer.style.display= 'inline-block';
        message.innerHTML = ' ';
    }else if(time===0){
        btn.removeAttribute('disabled')
        randMsg.innerHTML = ' ';
        message.innerHTML = 'GameOver!!!';
        count = 0;
        inp.value='';
        let inpDisabled = document.querySelector('#inp');
        inpDisabled.setAttribute('disabled', 'disabled');
    }
    timer.innerHTML= time
}

// change level
function diff(){
    difficult=5
    switch (count){
        case 25:
            difficult--;
            break;
        case 50:
            difficult--;
            break;
        case 75:
            difficult--;
            break;
        case 100:
            difficult--;
            break;
        case 125:
            difficult--;
            break;
    }
    time=difficult
}

// Start Game
start=(e)=>{
    difficult=6;
    time=difficult
    count=0;
    const btn = e.target;
    btn.setAttribute('disabled', 'disabled');
     genRand(arr)
     inp.addEventListener('input', catchMatch)
     inp.removeAttribute('disabled');
     score.innerHTML = count;
     
}

startGame=()=>{
    setInterval(setCount, 1000)
    btn.addEventListener('click', start);
}
startGame();

// npm init -y
// $ npm install -g express-generator
// $ npm install express -S
// $ npm install connect -S
// $ npm install serve-static -S