window.addEventListener('load',  () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "rgb(239, 1, 17)",
    "rgb(136, 243, 43)",
    "rgb(209, 199, 10)",
    "rgb(249, 120, 163)",
    "rgb(107, 3, 107)",
    "rgb(3, 213, 246)",
];


// Sounds down here
pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
    
    createBubbles(index);
  });
 });


 // create function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener('animationend', function(){
        visual.removeChild(this);
    })
 };
});

