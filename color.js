var colorbtn=document.querySelector(".colorbtn");

const colors=['blue','green','yellow','red','orange'];
colorbtn.addEventListener('click',changeColor);

function changeColor(){
    var bodybcg=document.querySelector("body");
   let random =Math.floor(Math.random()*colors.length)
    bodybcg.style.backgroundColor=colors[random];
}