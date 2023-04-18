let history = document.querySelector(".history");
let vision = document.querySelector(".vision");
let goals = document.querySelector(".goals");
let historyHeader = document.querySelector(".historyHeader");
let visionHeader = document.querySelector(".visionHeader");
let goalsHeader = document.querySelector(".goalsHeader");

history.style.display = 'block';
   vision.style.display = 'none';
   goals.style.display = 'none';

historyHeader.addEventListener("click", () =>{
   history.style.display = 'block';
   vision.style.display = 'none';
   goals.style.display = 'none';
});

visionHeader.addEventListener("click", () =>{
    vision.style.display = 'block';
    history.style.display = 'none';
    goals.style.display = 'none';
 });
 
 goalsHeader.addEventListener("click", () =>{
    goals.style.display = 'block';
    vision.style.display = 'none';
    history.style.display = 'none';
 });