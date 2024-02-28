function encriptar() {
    var textoOriginal = document.getElementById("texto").value;
    var resultado = encriptarTexto(textoOriginal);
    document.getElementById("resultado").textContent = resultado;

    
  }

  function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value;
    var resultado = desencriptarTexto(textoEncriptado);
    document.getElementById("resultado").textContent = resultado;
  }
  
  function encriptarTexto(texto) {
    return texto
      .split('') 
      .map(function(caracter) {

        var letrasEncriptadas = {
          'a': 'ai',
          'e': 'enter',
          'i': 'imes',
          'o': 'ober',
          'u': 'ufat',
        };
          return letrasEncriptadas.hasOwnProperty(caracter.toLowerCase()) ? letrasEncriptadas[caracter.toLowerCase()] + '' : caracter + '';
      })
      .join(''); 
  }
  
  
  function desencriptarTexto(texto) {
    var letrasDesencriptadas = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
    };

    var palabrasEncriptadas = texto.match(/\S+/g) || [];

    var resultado = palabrasEncriptadas.map(function (palabra) {
        return letrasDesencriptadas.hasOwnProperty(palabra.toLowerCase()) ? letrasDesencriptadas[palabra.toLowerCase()] : palabra;
    }).join('');

    return resultado;
}


  function copiarTexto() {
    var resultado = document.getElementById("resultado");
    var texto = resultado.textContent;
  
    var textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  
    alert("Texto copiado al portapapeles: " + texto);
  }
  function procesar(opcion) {
    var textoOriginal = document.getElementById("texto").value.toLowerCase();
    var resultado = "";

    if (opcion === "encriptar") {
      resultado = encriptarTexto(textoOriginal);
    } else if (opcion === "desencriptar") {
      resultado = desencriptarTexto(textoOriginal);
    }

    var resultadoElement = document.getElementById("resultado");
    var copiarBoton = document.getElementById("copiarBoton");
    var mensaje1 = document.getElementById("Ptexto1");
    var mensaje2 = document.getElementById("Ptexto2");
    var resultContainer = document.querySelector(".result-container");

    if (resultado.length > 0) {
      copiarBoton.style.display = "block";
      mensaje1.style.display = "none";
      mensaje2.style.display = "none";

      resultContainer.style.backgroundImage = "none";
    } else {
      copiarBoton.style.display = "none";
      mensaje1.style.display = "block";
      mensaje2.style.display = "block";

      resultContainer.style.backgroundImage = "url('Muñeco.png')";
    }

    resultadoElement.textContent = resultado;
  }
  
