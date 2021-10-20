// const morseString = require('data');

// console.log("The object for morse is ", morseString);

const data = {
    a : ".-",
    b : "-...",
    c : "-.-.",
    d : "-..",
    e : ".",
    f : "..-.",
    g : "--.",
    h : "....",
    i : "..",
    j : ".---",
    k : "-.-",
    l : ".-..",
    m : "--",
    n : "-.",
    o : "---",
    p : ".--.",
    q : "--.-",
    r : ".-.",
    s : "...",
    t : "-",
    u : "..-",
    v : "...-",
    w : ".--",
    x : "-..-",
    y : "-.--",
    z : "--..",
    0 : "-----",
    1 : ".----",
    2 : "..---",
    3 : "...--",
    4 : "....-",
    5 : ".....",
    6 : "-....",
    7 : "--...",
    8 : "---..",
    9 : "----.",
    "," : "--..--",
    "." : ".-.-.-",
    ":" : "---...",
    "?" : "..--..",
    "'" : ".----.",
    " " : "###"
} 

function stringToMorse(text) {
    if(text.length === 0) return "";
    let resultString;
    text = text.toLowerCase();
    if(data[text.substring(0,1)]){
        resultString = data[text.substring(0,1)]+ "$";
        console.log(`Value for letter ${text.substring(0,1)} : `, resultString);
    }
    let newText = text.substring(1);
    return resultString + stringToMorse(newText);
}

console.log("Solution for space is ",stringToMorse("Your name is? "));

function morseToString(input){
    if(input == ".") return "e";
    if(input == "-") return "t";
    let sumString = "";
    if(input.substring(0,1) == ".") sumString + Object.keys(data).find(key => data[key] === value);
    return morseToString(input.substring(1));
}

console.log("The solution set is : ",stringToMorse("There"));
