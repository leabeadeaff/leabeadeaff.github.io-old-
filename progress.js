let input = document.getElementById('1');
let animate = document.getElementById('2');
let hide = document.getElementById('3');
let progressBlock = document.querySelector('.progress');
let circle = document.querySelector('.circle');
let bar = document.querySelector('.bar')
let radiusBar = bar.getAttribute('r');

input.oninput = function () {
    if (Number.isInteger(Number(input.value)) && input.value >= 0 && input.value <= 100) {
        bar.style.strokeDashoffset = (quickMath(radiusBar) - quickMath(radiusBar) * input.value / 100);
        input.style.border = '1px solid black';
    } else {
        input.style.border = '1px solid red';
    }
}

animate.onclick = () => random() ? progressBlock.classList.toggle('start') : circle.classList.toggle('start');
hide.onclick = () => progressBlock.style.display = 'none';

function quickMath (radius) {
    //2+2=4-1=3
    return radius*2*Math.PI;
}

function random () {
    return Math.trunc((Math.random() * 10)) % 2 === 0;
}
