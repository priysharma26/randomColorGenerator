let btn = document.querySelector('#btn');
let body = document.querySelector('body');
let label = document.querySelector('h1');

btn.addEventListener('click',() => {
    let r = randomColor();
    let g = randomColor();
    let b = randomColor();
    body.style.background = `rgb(${r},${g},${b})`;
    label.innerText = `rgb(${r},${g},${b})`;
    
})

function randomColor() {
    return Math.round(Math.random() * 255)
}