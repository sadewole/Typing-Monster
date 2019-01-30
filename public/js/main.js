let time;
let count = 0;



// general variables;
const randMasg = document.querySelector('#inp');
const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn')
const message = document.querySelector('#message')
const timer = document.querySelector('#timer')
const score = document.querySelector('#score');


let arr = ['Bada', 'Tunji', 'Peter', 'Pokeman', 'Step']

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
         count = 0
    }
    timer.innerHTML= time
}

// Start Game
start=(e)=>{
    time=6;
    count=0;
    const btn = e.target;
    btn.setAttribute('disabled', 'disabled');
     genRand(arr)
     inp.addEventListener('input', catchMatch)
     score.innerHTML = count;

     fetch('sample.json')
     .then(res=> res.json())
     .then(data=> console.log(data))
     .catch(err=> console.log(err))
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