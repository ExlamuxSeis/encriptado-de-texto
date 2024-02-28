const campo_texto = document.querySelector('#texto-encriptado');
const campo_mensaje = document.querySelector('#texto-mensaje');

const matriz_code = [
    ['e', 'enter'], // Indice 0
    ['i', 'imes'], // Indice 1
    ['a', 'ai'], // Indice 2
    ['o', 'ober'], // Indice 3
    ['u', 'ufat',] // Indice 4
];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value)
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const texto2 = desencriptar(campo_mensaje.value);
    campo_texto.value = campo_mensaje.value;
    campo_mensaje.value = texto2;
}

function desencriptar(fraseDesencriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseDesencriptada.includes(matriz_code[i][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseDesencriptada;
}

function btnLimpiar(){
    campo_mensaje.value = "";
    campo_texto.value = "";
}