//Victor Burbano - Examen Final Js Next_u
// patrón módulo, es decir que todo el código debe estar englobado en un objeto llamado Calculadora.
var Calculadora = (function (document, undefined) {
  //variables globales
  var operandoa;
  var operandob;
  var operacion;
  var resultado = document.getElementById("display");
  var reset = document.getElementById("on");
  var raiz = document.getElementById("raiz");
  var suma = document.getElementById("mas");
  var resta = document.getElementById("menos");
  var multiplicacion = document.getElementById("por");
  var division = document.getElementById("dividido");
  var punto = document.getElementById("punto");
  var sing = document.getElementById("sign");
  var igual = document.getElementById("igual");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var cero = document.getElementById("0");

  function iniciar(e) {
    VerificarValorInicial();
    BotonUndido(e);
    verificarCifra();
  }
  //eventos o procesos, primero funciones de click, luego limpiar y resetear variables logicas, resolver hace las operaciones y despues se verifica
  function Procesos() {
    uno.onclick = function (e) {
      iniciar(uno);
      resultado.textContent = resultado.textContent + "1";
    };

    dos.onclick = function (e) {
      iniciar(dos);
      resultado.textContent = resultado.textContent + "2";
    };
    tres.onclick = function (e) {
      iniciar(tres);
      resultado.textContent = resultado.textContent + "3";
    };
    cuatro.onclick = function (e) {
      iniciar(cuatro);

      resultado.textContent = resultado.textContent + "4";
    };
    cinco.onclick = function (e) {
      iniciar(cinco);

      resultado.textContent = resultado.textContent + "5";
    };
    seis.onclick = function (e) {
      iniciar(seis);

      resultado.textContent = resultado.textContent + "6";
    };
    siete.onclick = function (e) {
      iniciar(siete);
      resultado.textContent = resultado.textContent + "7";
    };
    ocho.onclick = function (e) {
      iniciar(ocho);
      resultado.textContent = resultado.textContent + "8";
    };
    nueve.onclick = function (e) {
      iniciar(nueve);
      resultado.textContent = resultado.textContent + "9";
    };
    cero.onclick = function (e) {
      iniciar(cero);
      resultado.textContent = resultado.textContent + "0";
    };
    reset.onclick = function (e) {
      resetear();
      resultado.textContent = "0";
      BotonUndido(reset);
    };
    suma.onclick = function (e) {
      BotonUndido(suma);
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
    };
    resta.onclick = function (e) {
      BotonUndido(resta);
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
    };
    multiplicacion.onclick = function (e) {
      BotonUndido(multiplicacion);
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
    };
    division.onclick = function (e) {
      BotonUndido(division);
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
    };
    igual.onclick = function (e) {
      BotonUndido(igual);
      operandob = resultado.textContent;
      resolver();
      verificarCifra();
    };

    punto.onclick = function (e) {
      BotonUndido(punto);
      VerificarPunto();
    };
    raiz.onclick = function (e) {
      BotonUndido(raiz);
    };

    sing.onclick = function (e) {
      BotonUndido(sing);
      verificarSigno();
    };
  }

  function limpiar() {
    resultado.textContent = " ";
  }
  function resetear() {
    resultado.textContent = " ";
    operandoa = 0;
    operandob = 0;
    operacion = " ";
  }
  //resolver ingresando valores realizamos la operación y mostramos el resultado en el contenedor de display.

  function resolver() {
    var res = 0;
    switch (operacion) {
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        console.log(parseFloat(operandoa) + " " + parseFloat(operandob));
        break;
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }

  //funcion que me permite hacer la animacion de undir el botn
  function BotonUndido(v) {
    v.animate(
      [
        // keyframes
        { transform: "scale(0.95, 0.95)" },
        { transform: "scale(1,1)" },
      ],
      {
        // timing options
        duration: 1000,
      }
    );
  }

  //Funcion para verificar si en la pantalla se encuentra sólo el número cero, que no se puedan agregar más números cero.
  //Además debes hacer que si en pantalla está sólo el cero, al presionar otro número diferente, éste debe reemplazar al cero inicial.
  function VerificarValorInicial() {
    if (resultado.textContent.indexOf(".", 0) == "-1") {
      if (resultado.textContent == 0) {
        limpiar();
      }
    }
  }
  //funcion para verificar si no hay puntos, en tal caso poner uno, si hay no poner ninguno.
  function VerificarPunto() {
    if (resultado.textContent.indexOf(".", 0) == "-1")
      resultado.textContent = resultado.textContent + ".";
  }

  //funcion para verificar signo
  //Si el número sólo es un cero, no se debe agregar el signo,
  //además debes verificar que si el signo menos ya está en pantalla, al presionar la tecla se borre.
  function verificarSigno() {
    if (resultado.textContent == 0) {
    } else if (resultado.textContent.indexOf("-", 0) == "-1") {
      resultado.textContent = -1 * resultado.textContent;
    } else if (resultado.textContent < 0) {
      resultado.textContent = -1 * resultado.textContent;
    }
  }

  //mostrar 8 dígitos. Si el número digitado, o el resultado de una operación posee un mayor número de dígitos
  //se deben mostrar sólo sus primeros 8 dígitos.
  function verificarCifra() {
    console.log(resultado.textContent.length);
    if (resultado.textContent.length >= 7) {
      resultado.textContent = resultado.textContent.substring(0, 8);
    }
  }
  //funcion que inicializa todas las demas funciones
  return {
    init: Procesos,
  };
})(document);

Calculadora.init();
