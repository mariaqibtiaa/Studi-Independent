const form = document.getElementById("formData")

function show() {
    if (form.style.display === "none") {
        form.style.display = "flex"
    } else {
        form.style.display = "none"
    }
}

function kirim() {
    const nama = document.getElementById("namaInput")
    const role = document.getElementById("roleInput")
    const avability = document.getElementById("avabilityInput")
    const usia = document.getElementById("usiaInput")
    const lokasi = document.getElementById("lokasiInput")
    const experiance = document.getElementById("experianceInput")
    const email = document.getElementById("emailInput")


    const namaTmpl = document.getElementById("nama")
    const roleTmpl = document.getElementById("role")
    const avabilityTmpl = document.getElementById("avability")
    const usiaTmpl = document.getElementById("usia")
    const lokasiTmpl = document.getElementById("lokasi")
    const experienceTmpl = document.getElementById("experiance")
    const emailTmpl = document.getElementById("email")

    namaTmpl.innerHTML = nama.value
    roleTmpl.innerHTML = role.value
    avabilityTmpl.innerHTML = avability.value
    usiaTmpl.innerHTML = usia.value
    lokasiTmpl.innerHTML = lokasi.value
    experienceTmpl.innerHTML = experiance.value
    emailTmpl.innerHTML = email.value


    document.getElementById("edit").reset()
}