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

}