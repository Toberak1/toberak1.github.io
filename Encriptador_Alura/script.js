const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"
const imgNingun = document.querySelector(".ningunMensaje");






//Encriptar mensaje

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage ="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"
    inputTexto.placeholder = "Texto encriptado con exito"
    imgNingun.style.display = "none"

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

    
}


//Desencriptar mensaje

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage ="none"
    inputTexto.value = ""  
    inputTexto.placeholder = "Texto desencriptado con exito"
    imgNingun.style.display = "none"
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}



//botón copiar

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    mensaje.style.backgroundImage =""
    mensaje.placeholder = "Texto copiado";
}




//botón pegar

function pegar() {
	navigator.clipboard.readText()
  	.then(text => {
    	inputTexto.value = text;
         })
    .catch(text => {
    	inputTexto.placeholder = "No se obtuvo permiso de Pegar";
        })
}
  
const futer = document.querySelector(".futer");
futer.style.opacity = "0%"

function mostrar() {
    futer.style.opacity = "100%";
    futer.style.transition = "3s";

}
