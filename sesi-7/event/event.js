//inisialisasi
const body = document.getElementById("body");
const myName = document.getElementById("name");
const nameInput = document.getElementById("name-input");


function changeBackground() {
    body.classList.add("background");
}

function reset() {
    body.classList.remove("background");
}

function changeName(value) {
    myName.innerHTML = 'nama saya : $(value)';
}