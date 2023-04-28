function encriptar_texto(){  
    var texto_ingresado = document.getElementById("texto").value; //Obtener el texto            
    var sustitucion = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat"
    };

    for (var vocal in sustitucion) {
        var regex = new RegExp(vocal, "g");
        var sustituto = sustitucion[vocal];
        texto_ingresado = texto_ingresado.replace(regex, sustituto);
      }

    document.getElementById("texto_final").value = texto_ingresado;

    
    var imagen2 = document.querySelector(".imagen2_div");
    var mensaje1 = document.querySelector(".mensaje_1");
    var frese_enc = document.querySelector(".frase_encriptada");
    var copiarb = document.querySelector(".botones2");
    var texto_entrada = document.getElementById("texto");

    if (texto_ingresado === "") {
        imagen2.classList.remove("hide");
        mensaje1.classList.remove("hide");
        frese_enc.classList.add("hide");
        copiarb.classList.add("hide");
    } else {
        imagen2.classList.add("hide");
        mensaje1.classList.add("hide");
        frese_enc.classList.remove("hide");
        copiarb.classList.remove("hide");
        texto_entrada.classList.remove("hide");
    }
    

}

function desencriptar_texto(){
    var texto_encriptado = document.getElementById("texto").value;
    var sustitucion2 = {
        "enter" : "e",
        "imes"  : "i",
        "ai"    : "a",
        "ober"  : "o",
        "ufat"  : "u"
    };

    for (var vocal_enc in sustitucion2) {
        var regex2 = new RegExp(vocal_enc, "g");
        var sustituto2 = sustitucion2[vocal_enc];
        texto_encriptado = texto_encriptado.replace(regex2, sustituto2);
      }

      document.getElementById("texto_final").value = texto_encriptado;

      var imagen2 = document.querySelector(".imagen2_div");
      var mensaje1 = document.querySelector(".mensaje_1");
      var frese_enc = document.querySelector(".frase_encriptada");
      var copiarb = document.querySelector(".botones2");
      var texto_entrada = document.getElementById("texto");
  
      if (texto_encriptado === "") {
          imagen2.classList.remove("hide");
          mensaje1.classList.remove("hide");
          frese_enc.classList.add("hide");
          copiarb.classList.add("hide");
      } else {
          imagen2.classList.add("hide");
          mensaje1.classList.add("hide");
          frese_enc.classList.remove("hide");
          copiarb.classList.remove("hide");
          texto_entrada.classList.remove("hide");
      }

    
}

function copiar_texto(){
    var copiar = document.querySelector(".copiar");
    copiar.addEventListener("click", function () {
        var copiarres = document.getElementById("texto_final");
        copiarres.select();
        document.execCommand("copy");

    })
}

        