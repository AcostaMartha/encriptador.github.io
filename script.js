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
      .split('') // Dividir el texto en un array de caracteres
      .map(function(caracter) {
        // Mapear cada letra a su equivalente encriptado
        var letrasEncriptadas = {
          'a': 'alfa',
          'b': 'bravo',
          'c': 'charlie',
          'd': 'delta',
          'e': 'echo',
          'f': 'foxtrot',
          'g': 'golf',
          'h': 'hotel',
          'i': 'india',
          'j': 'juliett',
          'k': 'kilo',
          'l': 'lima',
          'm': 'mike',
          'n': 'november',
          'o': 'oscar',
          'p': 'papa',
          'q': 'quebec',
          'r': 'romeo',
          's': 'sierra',
          't': 'tango',
          'u': 'uniform',
          'v': 'victor',
          'w': 'whiskey',
          'x': 'x-ray',
          'y': 'yankee',
          'z': 'zulu'
        };
  
        // Si el caracter está en el objeto letrasEncriptadas, devolver su equivalente encriptado, de lo contrario, devolver el caracter original
        return letrasEncriptadas.hasOwnProperty(caracter.toLowerCase()) ? letrasEncriptadas[caracter.toLowerCase()] + ' ' : caracter + ' ';
      })
      .join(''); // Unir el array de caracteres de nuevo en una cadena
  }
  
  
  function desencriptarTexto(texto) {
    // Mapeo inverso de palabras encriptadas a letras originales
    var letrasDesencriptadas = {
        'alfa': 'a',
        'bravo': 'b',
        'charlie': 'c',
        'delta': 'd',
        'echo': 'e',
        'foxtrot': 'f',
        'golf': 'g',
        'hotel': 'h',
        'india': 'i',
        'juliett': 'j',
        'kilo': 'k',
        'lima': 'l',
        'mike': 'm',
        'november': 'n',
        'oscar': 'o',
        'papa': 'p',
        'quebec': 'q',
        'romeo': 'r',
        'sierra': 's',
        'tango': 't',
        'uniform': 'u',
        'victor': 'v',
        'whiskey': 'w',
        'x-ray': 'x',
        'yankee': 'y',
        'zulu': 'z'
    };

    // Dividir el texto en palabras
    var palabrasEncriptadas = texto.match(/\S+/g) || [];

    // Desencriptar cada palabra y unirlas con espacio
    var resultado = palabrasEncriptadas.map(function (palabra) {
        // Si la palabra encriptada está en el objeto letrasDesencriptadas, devolver su equivalente desencriptado, de lo contrario, devolver la palabra original
        return letrasDesencriptadas.hasOwnProperty(palabra.toLowerCase()) ? letrasDesencriptadas[palabra.toLowerCase()] : palabra;
    }).join(' ');

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

      // Ocultar background-image en el contenedor de resultados
      resultContainer.style.backgroundImage = "none";
    } else {
      copiarBoton.style.display = "none";
      mensaje1.style.display = "block";
      mensaje2.style.display = "block";

      // Restaurar el fondo en el contenedor de resultados
      resultContainer.style.backgroundImage = "url('Muñeco.png')";
    }

    resultadoElement.textContent = resultado;
  }
  