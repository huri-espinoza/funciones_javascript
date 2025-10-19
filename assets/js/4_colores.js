const divs = document.querySelectorAll("div");
const pintar = function (div, color){ 
    div.style.backgroundColor = color;
}
divs.forEach((div) => {
    div.addEventListener('click', (d) => pintar(d.target, 'black'));
});
