function myMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

function myForm() {
    var x = document.getElementById("form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function editData() {
    nama = document.getElementById("nama").innerHTML;
    role = document.getElementById("role").innerHTML;
    availability = document.getElementById("availability").innerHTML;
    usia = document.getElementById("usia").innerHTML;
    lokasi = document.getElementById("lokasi").innerHTML;
    year = document.getElementById("year").innerHTML;
    email = document.getElementById("email").innerHTML;

    document.getElementById("namaForm").value = nama;
    document.getElementById("roleForm").value = role;
    document.getElementById("availabilityForm").value = availability;
    document.getElementById("usiaForm").value = usia;
    document.getElementById("lokasiForm").value = lokasi;
    document.getElementById("yearForm").value = year;
    document.getElementById("emailForm").value = email;
}

// change section profile to section form
function ubahTeks() {
    namaHasil = document.getElementById("namaForm").value;
    roleHasil = document.getElementById("roleForm").value;
    availabilityHasil = document.getElementById("availabilityForm").value;
    usiaHasil = document.getElementById("usiaForm").value;
    lokasiHasil = document.getElementById("lokasiForm").value;
    yearHasil = document.getElementById("yearForm").value;
    emailHasil = document.getElementById("emailForm").value;

    document.getElementById("nama").innerHTML = namaHasil;
    document.getElementById("role").innerHTML = roleHasil;
    document.getElementById("availability").innerHTML = availabilityHasil;
    document.getElementById("usia").innerHTML = usiaHasil;
    document.getElementById("lokasi").innerHTML = lokasiHasil;
    document.getElementById("year").innerHTML = yearHasil;
    document.getElementById("email").innerHTML = emailHasil;
}