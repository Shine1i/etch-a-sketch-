let container = document.querySelector('.container');
let btn = document.getElementById('gridBtn');
let resetBtn = document.getElementById('resetBtn');
let rainbowBtn = document.getElementById("rainbowBtn");
rainbowBtn.addEventListener('click', rainbowColor)
resetBtn.addEventListener('click', reset)
btn.addEventListener('click',createGrid);

function createGrid(){
    let usrChoice = parseInt(prompt("Enter layout 1-100: "));
    container.innerHTML = "";
    if (usrChoice <= 100){
        for (let i = 0; i<(usrChoice*usrChoice); i++){
            const content = document.createElement('div');
            content.classList.add('box')
            container.appendChild(content);
        }
    }


    //---hover start---
    let boxes = document.getElementsByClassName('box')
    for (let a = 0; a<boxes.length; a++){
        boxes[a].style.height = 700/usrChoice+"px";
        boxes[a].style.width = 700/usrChoice+"px";
        boxes[a].addEventListener('mouseover', ()=>{
            boxes[a].style.backgroundColor = "#00FFFFFF";
        });
    }
    //---hover end---
}

function reset(){
        let boxes = document.getElementsByClassName('box')
        for (let a = 0; a<boxes.length; a++){
            boxes[a].classList.remove('hover');
            boxes[a].style.backgroundColor = "#E3CEB9";
        }
}

function rainbowColor(){
    let boxes = document.getElementsByClassName('box')
    for (let a = 0; a<boxes.length; a++){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        boxes[a].addEventListener('mouseover', () =>{
            boxes[a].style.backgroundColor = "#" + randomColor;
        });
    }
}
