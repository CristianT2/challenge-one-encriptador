const textIngresado = document.getElementById("text");
const btnEncript = document.getElementById("btnEncriptar");
const btnDesencript = document.getElementById("btnDesencriptar");
const textEncript = document.getElementById("textEncript");
const copiaText = document.getElementById("copy");

//Permite encriptar un texto 
function encriptarTexto() {
    //convierte la cadena de texto a minusculas
    let textoFinal = textIngresado.value.toLowerCase();
    //remplaza algunos caracteres por otros
    let textoEncriptado = textoFinal
        .replaceAll("a" , "nwdl")
        .replaceAll("e" , "lept")
        .replaceAll("i" , "stjz")
        .replaceAll("o" , "tcdy")
        .replaceAll("u" , "xnhq");
    
    document.getElementById("noEncriptado").style.visibility = "hidden"; 
    document.getElementById("copy").style.visibility = "visible"; 
    
    textEncript.value = textoEncriptado;
}

function desencriptarTenxto() {
    //convierte la cadena de texto a minusculas
    let textoFinal = textIngresado.value.toLowerCase();
    //remplaza algunos caracteres por otros
    let textDesencriptado = textoFinal
        .replaceAll("nwdl" , "a")
        .replaceAll("lept" , "e")
        .replaceAll("stjz" , "i")
        .replaceAll("tcdy" , "o")
        .replaceAll("xnhq" , "u");

    document.getElementById("noEncriptado").style.visibility = "hidden"; 
    document.getElementById("copy").style.visibility = "visible"; 
        
    textEncript.value = textDesencriptado;
}

//Permite copiar texto
function copiarTexto() {
    
    let textoEncriptado = textEncript.value;
    navigator.clipboard.writeText(textoEncriptado);
}

btnEncript.onclick = encriptarTexto;
btnDesencript.onclick = desencriptarTenxto;
copiaText.onclick = copiarTexto;