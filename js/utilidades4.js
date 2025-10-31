const estudiantes = [];

function agregarEstudiante() {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const id = parseInt(document.getElementById("id").value);
  const resultado = document.getElementById("resultado");

  if (!nombre || isNaN(edad) || isNaN(id)) {
    resultado.textContent = "Por favor, completa todos los campos correctamente.";
    return;
  }

  const existente = estudiantes.find(e => e.id === id);
  if (existente) {
    resultado.textContent = "Ya existe un estudiante con ese número de identificación.";
    return;
  }

  const estudiante = { nombre, edad, id };
  estudiantes.push(estudiante);

  resultado.textContent = `Estudiante ${nombre} agregado correctamente.`;

  
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("id").value = "";
}

function buscarEstudiante() {
  const buscarId = parseInt(document.getElementById("buscarId").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(buscarId)) {
    resultado.textContent = "Ingresa un número de identificación válido.";
    return;
  }

  const estudiante = estudiantes.find(e => e.id === buscarId);

  if (estudiante) {
    resultado.textContent = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.id}`;
  } else {
    resultado.textContent = "No se encontró ningún estudiante con ese número.";
  }
}