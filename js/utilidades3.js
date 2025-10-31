const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
  const entrada = document.getElementById("entrada");
  const resultado = document.getElementById("resultado");
  const numeroUsuario = parseInt(entrada.value);
  intentos++;

  if (isNaN(numeroUsuario)) {
    resultado.textContent = "Por favor, ingresa un número válido.";
    return;
  }

  if (numeroUsuario < 1 || numeroUsuario > 100) {
    resultado.textContent = "El número debe estar entre 1 y 100.";
    return;
  }

  if (numeroUsuario === numeroSecreto) {
    resultado.textContent = `¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`;
  } else if (numeroUsuario < numeroSecreto) {
    resultado.textContent = "Más alto... Intenta con un número mayor.";
  } else {
    resultado.textContent = "Más bajo... Intenta con un número menor.";
  }
}