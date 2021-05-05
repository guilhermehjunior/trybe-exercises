window.onload = function () {

const whiteBackground = document.querySelector('#white');
whiteBackground.addEventListener('click', function () {
    localStorage.setItem('backgroundColor','white');
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
});

const darkBackground = document.querySelector('#dark');
darkBackground.addEventListener('click', function () {
    localStorage.setItem('backgroundColor','#a9a9a9');
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
    
});
document.body.style.backgroundColor = localStorage.getItem('backgroundColor');

const main = document.querySelector('main');
const blueColor = document.querySelector('#blue');
blueColor.addEventListener('click', function () {
    localStorage.setItem('color', 'blue');
    main.style.color = localStorage.getItem('color');
});

const redColor = document.querySelector('#red');
redColor.addEventListener('click', function () {
    localStorage.setItem('color', 'red');
    main.style.color = localStorage.getItem('color');
});

const blackColor = document.querySelector('#black');
blackColor.addEventListener('click', function () {
    localStorage.setItem('color', 'black');
    main.style.color = localStorage.getItem('color');
});

main.style.color = localStorage.getItem('color');

const timesNewRoman = document.querySelector('#times-new-roman');
timesNewRoman.addEventListener('click', function () {
    localStorage.setItem('font-family',"'Times New Roman', Times, serif");
    main.style.fontFamily = localStorage.getItem('font-family');
});

const helvetica = document.querySelector('#helvetica');
helvetica.addEventListener('click', function () {
    localStorage.setItem('font-family', 'Arial, Helvetica, sans-serif');
    main.style.fontFamily = localStorage.getItem('font-family');
});

main.style.fontFamily = localStorage.getItem('font-family');


let tamanho;
if (localStorage.getItem('font-height') !== Number ){
     tamanho = 100;
} else {
     tamanho = parseInt(localStorage.getItem('font-height'));
}
const plus = document.querySelector('#plus');
plus.addEventListener('click', function () {
    tamanho = parseInt(tamanho) + 25;
    localStorage.setItem('font-height',`${tamanho}%` );
    main.style.lineHeight  = localStorage.getItem('font-height');
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', function () {
    tamanho = parseInt(tamanho) - 25;
    localStorage.setItem('font-height',`${tamanho}%` );
    main.style.lineHeight  = localStorage.getItem('font-height');
});

main.style.lineHeight  = localStorage.getItem('font-height');

const button = document.querySelector('#btn');
const input = document.querySelector('#text-size');
button.addEventListener('click', function () {
    localStorage.setItem ('font-size', `${input.value}px`);
    main.style.fontSize = localStorage.getItem('font-size');
});

main.style.fontSize = localStorage.getItem('font-size');

}