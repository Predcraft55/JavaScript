
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const heur = document.getElementById("heur")

const heurInput = document.getElementById("heurInput")
const minInput = document.getElementById("minInput")
const setAllarm = document.getElementById("setAllarm")
const indicateur = document.getElementById("indicateur")
const allarm = document.getElementById("allarm")


let seconde = 0
let minute = 0
let heure = 0
let allHeur = null; 
let allMin = null;
let blinkInterval = null;




const timer = setInterval(function() {
    seconde++
    sec.innerHTML = seconde.toString().padStart(2,"0")

    if(seconde >= 59){
        seconde = 0
        minute++
    }else if(seconde >= 0 ){
        min.innerHTML = minute.toString().padStart(2, "0")    
    }

    if(minute >= 59){
        minute=0
        heure++
    }else if(minute >= 0){
        heur.innerHTML = heure.toString().padStart(2, "0")
    } 

    if (heure == allHeur && minute == allMin) {
        allarm.innerHTML = '<p id="alarmText" data-text="DRINNNNNNNNNNGGGGGGGGG" class="neon-text fs-1">DRINNNNNNNNNGGGGGGGGG</p>';
    }
    
       
    
}, 1000)

setAllarm.addEventListener("click", function () { 
    allHeur = parseInt(heurInput.value); 
    allMin = parseInt(minInput.value); 
    indicateur.innerHTML = "*"; 
    console.log(allHeur, allMin); 
    console.log(heure, minute); });



function updateClockText() { 
    const clock = document.querySelector('.clock'); 
    const hours = document.getElementById('heur').textContent; 
    const minutes = document.getElementById('min').textContent; 
    const seconds = document.getElementById('sec').textContent; 
    const fullText = `${hours}:${minutes}:${seconds}`; 
    clock.setAttribute('data-text', fullText); 
} 


setInterval(updateClockText, 1000); 






