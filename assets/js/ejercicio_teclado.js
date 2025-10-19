const a = 'pink';
const s = 'orange';
const d = 'skyblue';
const div = document.getElementById("key");
const body = document.querySelector("body");

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        key.style.backgroundColor = a;
    } else if (event.key === 's') {
        key.style.backgroundColor = s;
    } else if (event.key === 'd') {
        key.style.backgroundColor = d;
    } else if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
       crearDiv('grey');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
});

const crearDiv = function(clase) {
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = clase;
    body.appendChild(nuevoDiv);
}