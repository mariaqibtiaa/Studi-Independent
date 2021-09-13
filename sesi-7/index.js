//inisialisasi
//input
const angka1 = document.getElementById("angka-1");
const angka2 = document.getElementById("angka-2");

//button
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const kali = document.getElementById("kali");
const bagi = document.getElementById("bagi");
const modulus = document.getElementById("modulus");



//hasil
const hasil = document.getElementById("hasil");
const data = document.getElementById("data");
//proses
//proses tambah
function add() {
    hasil.innerHTML = Number(angka1.value) + Number(angka2.value);
}

function minus() {
    hasil.innerHTML = Number(angka1.value) - Number(angka2.value);
}

function times() {
    hasil.innerHTML = Number(angka1.value) * Number(angka2.value);
}

function divided() {
    hasil.innerHTML = Number(angka1.value) / Number(angka2.value);
}

function mod() {
    hasil.innerHTML = Number(angka1.value) % Number(angka2.value);
}

function myName() {
    return "nama saya maria";
}

data.innerHTML = myName();


/-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - /
// function getAngka() {
//     console.log(Number(angka1.value));
// }