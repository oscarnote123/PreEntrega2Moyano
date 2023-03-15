
// Definir instrumentos
const instrumentos = [
    { nombre: "saxo", nivel: "intermedio", precio: 50 },
    { nombre: "piano", nivel: "avanzado", precio: 100 },
    { nombre: "guitarra", nivel: "principiante", precio: 30 },
    { nombre: "clarinete", nivel: "intermedio", precio: 40 }
  ];
  
  // Definir fechas de inicio de clases
  const fechasDeInicio = [
    { fecha: "15 de mayo", disponible: true },
    { fecha: "5 de junio", disponible: true },
    { fecha: "25 de junio", disponible: true },
    { fecha: "4 de agosto", disponible: true }
  ];
  
  // Función para validar la edad
  function validarEdad(edad) {
    return !isNaN(edad) && edad > 0;
  }
  
  // Función para inscribirse en la escuela
  function inscribirseEnMusica(nombre, apellido, edad) {
    if (edad < 18) {
      return "Lo siento, sos menor de edad. Para registrarte deberás ingresar los datos de un mayor.";
    } else {
      const instrumento = prompt(`¿Qué instrumento te gustaría aprender? ${instrumentos.map(i => i.nombre).join(", ")}?`);
      if (instrumento === null) {
        return "Cancelaste la solicitud de inscripción.";
      }
        
      const index = instrumentos.findIndex(i => i.nombre.toLowerCase() === instrumento.toLowerCase());
      if (index === -1) {
        return "Por favor, ingresa un instrumento válido.";
      }
        
      const fecha = fechasDeInicio[index];
      if (!fecha.disponible) {
      
      }
        
      return `${nombre}, las clases de ${instrumento} comenzarán el ${fecha.fecha} y costarán $${instrumentos[index].precio}.`;
    }
  }
  
    do {
    let nombre = prompt("Ingresa tu nombre");
    if (nombre === null) {
      break;
    }
  
    let apellido = prompt("Ingresa tu apellido");
    if (apellido === null) {
      break;
    }
  
    let edad = parseInt(prompt("Ingresa tu edad"));
    while (!validarEdad(edad)) {
      edad = parseInt(prompt("Por favor, ingresa una edad válida."));
      if (edad === null) {
        break;
      }
    }
    if (edad === null) {
      break;
    }
  
    alert(inscribirseEnMusica(nombre, apellido, edad));
  } while (confirm("¿Querés ingresar los datos de otra persona?"));
  