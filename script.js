const elementTab = document.querySelectorAll(".space");
console.log(elementTab);

const play1 = document.createElement('img');
play1.setAttribute('scr','./assets/piece-x.svg')
play1.setAttribute("class", "play1");

const play2 = document.createElement('img');
play2.setAttribute('scr','./assets/piece-o.svg')
play2.setAttribute("class", "play2");

document.addEventListener("click",(event)=>{
  console.log(event.target.id);
});
