let container = document.querySelector('.container');
for (let i = 0; i<256; i++){
    container.innerHTML += '<div class="box"></div>';
}
let hover = document.getElementsByClassName('box');
for (let i = 0; i < hover.length; i++){
    hover[i].addEventListener('mouseover', () =>{
        mouseOver(i)
    });
}

w
function mouseOver(i){
    hover[i].classList.add('hover');
}