window.addEventListener("load", () => {
  //escucha cuando se carga el html

  //creamos dos constantes

  const display = document.querySelector(".calculator__display");

  const keypadButtons = document.getElementsByClassName("keypad__button");

  //creamos otra conts para convertir el htmlcollection en Array
  const keypadButtonsArray = Array.from(keypadButtons);

  //iteramos por nuestro nuevo array los botones
  keypadButtonsArray.forEach((button) => {
    //a cada boton le agregamos un listener
    button.addEventListener("click", () => {
      calculadora(button, display);
    });
  });
});

function calculadora(button, display) {
  switch (button.innerHTML) {
    case "C":
      borrar(display);
      break;
    case "=":
      calcular(display);
      break;
    default:
      actualizar(display, button);
      break;
  }
}

function calcular(display) {
  display.innerHTML = eval(display.innerHTML); //tomar el string y resolverlo y guardarlo en el innerHTML del Display
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0;
}
