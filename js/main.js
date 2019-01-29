let time=6;
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
    }else if(time===0){
        btn.removeAttribute('disabled')
        randMsg.style.display = 'none';
        message.innerHTML = 'GameOver!!!'
    }
    timer.innerHTML= time
}

// Reset function
function reset(){
    if(!btn.hasAttribute('disabled') && message.innerHTML == 'GameOver!!!'){
        console.log('coment')
        randMsg.innerHTML = ' ';
        clearInterval(setInterval(setCount, 1000))
    }
}

start=(e)=>{
    clearInterval(setInterval(setCount, 1000))
    time=6
    const btn = e.target;
    btn.setAttribute('disabled', 'disabled');
    //reset()
    randMsg.style.display='block'
    
     genRand(arr)
     setInterval(setCount, 1000)
     inp.addEventListener('input', catchMatch)
}

startGame=()=>{
    btn.addEventListener('click', start)
}
startGame();