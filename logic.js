let container = document.querySelector('.container');
let btn = document.getElementById('gridBtn');
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
    }else{
        let usrChoice = parseInt(prompt("Choose between 1-100 please: "));
    }

    //---hover start---
    let boxes = document.getElementsByClassName('box')
    for (let a = 0; a<boxes.length; a++){
        boxes[a].style.height = 700/usrChoice+"px";
        boxes[a].style.width = 700/usrChoice+"px";
        boxes[a].addEventListener('mouseover', ()=>{
            boxes[a].classList.add('hover');
        });
    }
    //---hover end---
}
