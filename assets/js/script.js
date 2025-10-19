const div = document.getElementById("ele1");
const pintar = function(elemento, color){ 
    elemento.style.backgroundColor = color;
}
pintar(div, 'green');

div.addEventListener('click', (d) => pintar(d.target, 'yellow'));