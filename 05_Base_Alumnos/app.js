// Crear prototipo alumno
function Alumno(nombre, apellidos, edad) {
this.nombre = nombre;
this.apellidos = apellidos;
this.edad = edad;
this.materias = [];
this.calificaciones = {};
}

// Crear arreglo para almacenar alumnos
let alumnos = [];

// Obtener elementos del DOM
const formulario = document.getElementById('formulario-alumnos');
const listaAlumnos = document.getElementById('lista-alumnos');
const tablaAlumnos = document.getElementById('tabla-alumnos');

// Agregar evento para enviar formulario
formulario.addEventListener('submit', agregarAlumno);

// Agregar Alumno
function agregarAlumno(event) {
// Evitar que la página se recargue
event.preventDefault();

// Obtener valores del formulario
const nombre = document.getElementById('nombre').value;
const apellidos = document.getElementById('apellidos').value;
const edad = document.getElementById('edad').value;

// Crear instancia de prototipo alumno
const alumno = new Alumno(nombre, apellidos, edad);

// Agregar alumno al arreglo
alumnos.push(alumno);

// Crear fila para el alumno y agregarla a la tabla
const fila = document.createElement('tr');
fila.innerHTML = `
    <td>${alumno.nombre}</td>
    <td>${alumno.apellidos}</td>
    <td>${alumno.edad}</td>
    <td><button onclick="inscribirClase(${alumnos.length - 1})">Inscribir</button></td>
`;
listaAlumnos.appendChild(fila);

// Limpiar formulario
formulario.reset();
}

function inscribirClase(index) {
const alumno = alumnos[index];
const materia = prompt(`Ingresa la materia a la que quieres inscribir a ${alumno.nombre}:`);
alumno.materias.push(materia);
const calificacion = prompt(`Ingresa la calificación de ${alumno.nombre} en ${materia}:`);
alumno.calificaciones[materia] = calificacion;
alert(`Se ha inscrito a ${alumno.nombre} en la materia ${materia} con una calificación de ${calificacion}.`);
}


// ----------
// Obtener elementos del DOM
const formularioGrupo = document.getElementById('formulario-grupo');
const selectAlumnos = document.getElementById('alumnos-grupo');

// Agregar evento para enviar formulario de grupo
formularioGrupo.addEventListener('submit', crearGrupo);

// Crear Grupo
function crearGrupo(event) {
  // Evitar que la página se recargue
event.preventDefault();

// Obtener valores del formulario
const nombreGrupo = document.getElementById('nombre-grupo').value;
const seleccionados = Array.from(selectAlumnos.selectedOptions).map(option => option.value);

// Crear objeto para representar el grupo
const grupo = {
nombre: nombreGrupo,
alumnos: seleccionados
};

// Agregar el grupo a una estructura de datos
// ...

// Limpiar formulario
formularioGrupo.reset();
}


