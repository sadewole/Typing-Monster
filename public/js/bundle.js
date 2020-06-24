(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
function genRand(val) {
    let word = Math.floor(Math.random() * val.length);
    return randMsg.innerHTML = val[word];
}

// Check for match
function wordMatch() {
    if (inp.value.toLowerCase() === randMsg.innerHTML.toLowerCase()) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
};

// get match and process
function catchMatch() {
    if (wordMatch()) {
        inp.value = '';
        time = 6
        count++
        genRand(arr)
        diff()
    }
    score.innerHTML = count;
}

// Set Timer
function setCount() {
    if (time > 0) {
        time--
        timer.style.display = 'inline-block';
        message.innerHTML = ' ';
    } else if (time === 0) {
        btn.removeAttribute('disabled')
        randMsg.innerHTML = ' ';
        message.innerHTML = 'GameOver!!!';
        count = 0;
        inp.value = '';
        let inpDisabled = document.querySelector('#inp');
        inpDisabled.setAttribute('disabled', 'disabled');
    }
    timer.innerHTML = time
}

// change level
function diff() {
    difficult = 5
    switch (count) {
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
    time = difficult
}

// Start Game
start = (e) => {
    difficult = 6;
    time = difficult
    count = 0;
    const btn = e.target;
    btn.setAttribute('disabled', 'disabled');
    genRand(arr)
    inp.addEventListener('input', catchMatch)
    inp.removeAttribute('disabled');
    score.innerHTML = count;

}

startGame = () => {
    setInterval(setCount, 1000)
    btn.addEventListener('click', start);
}
startGame();

// npm init -y
// $ npm install -g express-generator
// $ npm install express -S
// $ npm install connect -S
// $ npm install serve-static -S
},{"./random":2}],2:[function(require,module,exports){
module.exports = ["gray", "battle", "cool", "raspy", "pour", "scientific", "ready", "hallowed", "glistening", "curved", "grandiose", "tip", "way", "historical", "offend", "remind", "warm", "stay", "possessive", "wry", "form", "merciful", "domineering", "young", "chunky", "imminent", "design", "bore", "longing", "beg", "guarantee", "church", "frighten", "warlike", "pigs", "simplistic", "dock", "week", "medical", "wakeful", "alluring", "abortive", "mixed", "sweet", "partner", "thoughtful", "inexpensive", "horses", "saw", "afford", "fang", "linen", "finger", "bedroom", "demonic", "tree", "shrug", "pumped", "travel", "vague", "bomb", "reminiscent", "announce", "obeisant", "general", "glow", "legal", "employ", "furniture", "flower", "drop", "helpful", "soap", "attract", "wrestle", "panoramic", "rampant", "ceaseless",  "lopsided", "early", "silent", "grip", "matter", "thank", "hair", "car", "emember", "work", "dime", "precede", "hissing", "screw", "cautious",  "heavenly", "poor", "poised", "uccinct", "instrument", "babies", "tub", "unnatural", "bump", "book", "calculating", "egg", "frightening", "hope", "death",  "jeans", "notebook", "coach", "multiply",  "erratic", "innate", "vanish", "innocent", "stereotyped", "bright", "overt", "soda", "jobless", "cent", "dizzy", "pinch", "scintillating", "unite", "green", "drunk", "dreary", "pizzas", "berry", "momentous", "frail", "fabulous", "clammy", "tart", "friend", "quince", "plausible", "tie", "grade", "profit", "board", "obese", "fix", "hanging", "insect", "gifted", "potato", "team", "spell", "bag", "silent", "mask", "amused", "quiet", "abnormal", "miss", "unsuitable", "minute", "scrape", "brush", "poison", "snail", "look", "fuel", "boiling", "butter", "ethereal", "easy", "form", "cake", "futuristic", "hospitable", "waves", "even", "foamy", "trick", "jog", "romantic", "market", "shop", "ad", "hoc", "miniature", "aboard", "engine", "calculate", "magical", "unknown", "delightful", "compete", "brother", "heat", "reward", "productive", "deer", "damage", "tidy", "back", "attack", "second",-"hand", "gratis", "treat", "oval", "possess", "coherent", "cushion", "lumber", "assorted", "class", "silly", "dress", "tedious", "tame", "increase", "toad", "run", "used", "cactus", "ship", "impress", "hour", "harmonious", "sort", "wise", "iron", "rabid", "trap", "help", "marked", "healthy", "month", "offer", "grandfather", "feeble", "grotesque", "bizarre", "secretive", "strip", "wait", "disappear", "chess", "giddy", "drop", "boast", "overrated", "army", "jazzy", "greasy", "majestic", "waste", "gamy", "sip", "interfere", "obtainable", "war", "afraid",  "stew", "murder", "wonder", "horrible", "touch", "long", "realise", "lavish", "mouth", "abandoned", "separate", "stamp", "painstaking", "fortunate", "whispering", "jumbled", "calculator", "morning", "toys", "special", "guide", "dog",  "insurance", "wasteful", "wrong", "youthful", "asket",  "flat", "influence",  "fish", "rule", "trange",  "flashy", "furtive", "ambitious", "repair", "crime", "shock", "lackadaisical", "witty", "appreciate", "languid", "dry", "shape", "concentrate", "industry", "frantic", "courageous", "encil",  "wing", "juggle", "share",  "wacky", "unequaled", "bloody", "condition", "addition", "sprout", "utter", "anxious", "pull", "whimsical",  "pies", "spray", "dance", "experience", "fly", "holistic", "line", "vegetable", "harsh",  "pool", "stain", "outrageous", "release", "jam", "unbiased", "station", "respect", "jaded", "risk", "pin", "ripe", "stove", "aggressive", "reproduce", "trip", "noxious", "beneficial", "head", "sore", "mysterious", "breath", "puzzling", "alcoholic", "vacation", "fire", "solid", "start", "base", "circle", "arch", "best", "nut", "plot", "absent", "bounce", "chew", "mundane", "obscene", "fold",  "rejoice", "attractive", "brick", "addicted", "creepy", "sidewalk", "aberrant", "hum", "adjustment", "itchy", "next", "children", "ban", "jail", "air",  "queal", "admire", "wine", "steer", "mourn", "argument", "oil", "cough", "sheet", "silk", "curve", "rainy", "yell", "point", "endurable", "tacit", "mass", "destroy", "walk", "tug", "muddled", "comparison", "bikes",  "boring", "wrathful", "program", "please", "unique", "dress", "married", "cold", "rdinary",  "ppliance", "periodic",  "cap", "news", "smelly", "hole", "instinctive", "slow", "direction", "ecord", "mountain", "floor", "wistful", "animal", "introduce", "roll", "itch", "measure", "rat", "gainful", "jewel", "therapeutic", "plants", "ritzy", "loss", "ilver",  "homely", "attempt", "lewd", "beef", "plough", "horse", "upbeat", "airport", "afterthought", "yoke", "hose", "crayon", "bow", "symptomatic", "available", "rub", "tickle",  "pointless", "deep", "fear", "loutish", "develop", "listen", "vagabond", "puzzled", "political", "porter", "press", "carry", "boundless", "dust", "scarf", "exclusive", "edge",  "leg", "acoustics", "short", "aquatic", "store", "colorful", "guess", "trace", "incompetent", "fail", "coat", "side", "type", "disastrous", "writer", "ice", "fluttering", "piquant", "frame", "cat", "accessible",  "shrill", "wrap", "invite", "ugliest", "curious", "testy", "whole", "opposite", "shallow", "obnoxious", "six", "certain", "reject", "cute", "mean", "taboo", "unlock", "escape", "shade",  "sulky", "berserk", "luck", "squirrel", "mature", "giants", "parched", "pot", "chase", "smoggy", "tick", "subtract", "shave", "roomy", "moldy", "wash", "complete", "hypnotic", "shocking", "shelter", "grin", "spiteful", "growth", "camp", "alike", "weary", "clip", "redundant", "hospital", "humdrum", "brake", "plastic", "pine", "government", "cracker", "protective", "adorable", "enchanted", "ajar",  "workable", "nutty", "memory", "direful", "stitch", "spot", "crack", "yarn", "cream", "stupid", "absorbed", "happen", "space", "zinc", "appear", "scent", "full", "squeamish", "successful", "knit", "reflective", "nine", "rule", "glamorous", "joyous", "wilderness", "prick", "crook", "box",  "succeed", "abhorrent", "attack", "blow", "tempt", "grouchy", "woebegone", "island", "chubby", "skirt", "person", "amazing", "acoustic", "cook", "gentle", "puny", "label", "flood", "curve", "melodic", "cherry", "suggest", "icky", "prose", "boil", "continue", "bent", "rake", "burly", "race", "debonair", "meat", "include", "stop", "offbeat", "hammer", "comfortable", "concern", "fairies", "camp", "ragged", "freezing", "bashful",  "right", "recognise", "labored", "fowl", "sloppy", "interrupt", "hammer", "shiny", "excite", "devilish", "smell", "pastoral", "increase", "volcano", "end", "shaky", "current", "pricey", "purring", "bubble", "mine", "salt", "spurious", "childlike", "road", "humor", "defiant", "drown",  "fumbling", "building", "jellyfish",  "aback", "naive", "electric", "seal", "color", "bridge", "sore", "ray", "accept", "idea", "invent", "pat", "deeply", "disarm", "tongue", "cattle", "blink", "thin", "mailbox", "trip", "ahead", "whistle", "clean", "watch", "rude", "border", "step", "typical", "lucky", "callous", "brainy", "perform", "unpack", "maniacal", "advertisement", "sincere", "vest", "ring", "exercise", "flap", "eggs", "arrange",  "planes", "mmense",  "activity", "garrulous", "eminent", "contain", "fireman", "cover", "acrid", "bone", "energetic", "actor", "flock", "throne", "hard", "skin", "tiny", "license", "cakes", "melt", "hesitant", "elastic", "number", "guard", "thirsty", "head", "toes", "zonked", "defective", "tour", "pirate", "upset", "nondescript", "summer", "tearful", "second", "ill", "order", "fax", "closed", "pan", "condemned", "live", "thoughtless", "payment", "third", "zealous", "brave", "vulgar", "battle", "thrill", "alert", "fine", "elfin", "match", "sneaky", "plant", "little", "fat", "fit", "tray", "idiotic", "previous", "smell", "drab", "bells", "follow", "vase", "nostalgic", "juicy", "powder", "onerous", "delight", "stomach", "produce", "wish", "yawn", "pig", "vacuous", "balance", "delicious", "fluffy", "terrify", "scandalous", "wicked", "undesirable", "foolish", "exotic", "spot", "grey", "income", "plucky", "smoke", "empty", "polish", "health", "selfish", "stage", "radiate", "organic", "shame", "discover", "rainstorm", "quilt", "pull", "pet", "bruise", "hot", "analyse", "interest", "irritating", "awake", "decorous", "wave", "birth", "humorous",  "unused", "instruct", "eeny",  "far", "earsplitting", "collect", "hunt", "territory", "approve", "slip", "voice", "loose", "acidic", "pologise",  "call", "show", "smiling", "damaged", "fearless", "satisfying", "useful", "macabre", "stranger", "repulsive", "deranged", "sponge", "glass",  "swanky", "action", "feigned", "glossy", "beam",  "walk", "jail", "wash", "friction", "careful", "violent", "plastic",  "shut", "dinner", "secret", "reading", "boy", "spill", "load", "wink", "sisters", "taste", "tumble", "maid", "knee", "obedient", "unequal", "scream", "spiritual", "copper", "rifle", "elderly", "passenger", "curtain", "cuddly", "limping", "scared", "astonishing", "cheat", "torpid", "memorise", "notice", "thing", "song", "hook", "save", "equable", "imagine", "truck", "daughter", "educate", "lock", "drawer", "combative", "bake", "acceptable", "street", "frightened", "festive", "crow", "mother", "mellow", "faulty", "spectacular", "hurried", "signal", "doctor", "dusty", "digestion", "whisper", "sleep", "dust", "honey", "cherries", "party", "troubled", "whirl", "untidy", "note", "cast", "substance", "beginner", "cumbersome", "eatable", "chalk", "servant", "narrow", "temporary", "machine", "ccount",  "measly", "miscreant",  "mere", "toe", "cultured", "pocket", "heap", "belief", "suspend", "lunchroom", "eager", "flowers", "peep", "surround", "join", "strong", "basin", "rot", "first", "change", "triped", "aromatic",  "search", "relation", "fetch", "soup", "tow", "gather", "sable",  "limit", "nappy", "snow", "want", "disagreeable", "zoom", "gaze", "guarded", "snakes", "pop", "table", "hook", "level"]

},{}]},{},[1]);
