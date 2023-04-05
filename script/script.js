//Luas Segitiga
function hitungLuas() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
    const error = document.getElementById("error");
    const luas = 0.5 * alas * tinggi;
    if (isNaN(alas) || isNaN(tinggi) || alas === '' || tinggi === '') {
        document.getElementById("luas").innerHTML = "";
        error.innerHTML = "Masukkan angka pada Alas dan Tinggi";
    } else {
        error.innerHTML = "";
        document.getElementById("luas").innerHTML = "Luas segitiga dengan 1/2 x " + alas + " x " + tinggi + " adalah " + luas;
    }
}

//Keliling Segitiga
function hitungKeliling() {
    const sisiA = document.getElementById("sisi-a").value;
    const sisiB = document.getElementById("sisi-b").value;
    const sisiC = document.getElementById("sisi-c").value;

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0){
        document.getElementById("eror").innerHTML = "Masukkan bilangan bulat atau desimal yang benar";
        document.getElementById("hasil").innerHTML = "";
    } else {
        const keliling = sisiA + sisiB + sisiC;
        document.getElementById("eror").innerHTML = "";
        document.getElementById("hasil").innerHTML = "Keliling segitiga dengan " + sisiA + " + " + sisiB + " + " + sisiC + " adalah " + keliling;
    }
}

//luas jajargenjang
function hitungLuasjajargenjang() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
    const error = document.getElementById("error");
    const luas = alas * tinggi;
    if (isNaN(alas) || isNaN(tinggi) || alas === '' || tinggi === '') {
        document.getElementById("luas").innerHTML = "";
        error.innerHTML = "Masukkan angka pada Alas dan Tinggi";
    } else {
        error.innerHTML = "";
        document.getElementById("luas").innerHTML = "Luas segitiga dengan  " + alas + " x " + tinggi + " adalah " + luas;
    }
}

//keliling jajargenjang
function hitungKelilingjajargenjang() {
    const sisiA = document.getElementById('sisi-a').value;
    const sisiB = document.getElementById('sisi-b').value;

    if (isNaN(sisiA) || isNaN(sisiB) || sisiA <= 0 || sisiB <= 0) {
        document.getElementById('eror').innerHTML = "Masukkan bilangan bulat atau desimal yang benar";
        document.getElementById('keliling').innerHTML = "";
    } else {
        const keliling = 2 * (parseFloat(sisiA) + parseFloat(sisiB));
        document.getElementById('eror').innerHTML = "";
        document.getElementById('keliling').innerHTML = "Keliling jajargenjang dengan 2 x (" + sisiA + " + " + sisiB + " ) adalah " + keliling;
    }
}