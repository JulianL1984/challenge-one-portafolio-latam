//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Seleccionamos el formulario y sus campos
const formulario = document.querySelector('.contacto__formulario');
const nombreInput = document.querySelector('input[type="text"]');
const correoInput = document.querySelector('input[type="email"]');
const mensajeInput = document.querySelector('textarea');

// Función para validar el correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para mostrar un mensaje de error
function mostrarError(input, mensaje) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = mensaje;
    input.classList.add('error-border');
    input.parentElement.insertBefore(errorDiv, input.nextSibling);
}

// Función para eliminar los mensajes de error
function limpiarErrores() {
    const errores = document.querySelectorAll('.error');
    errores.forEach(error => error.remove());
    
    const camposConError = document.querySelectorAll('.error-border');
    camposConError.forEach(campo => campo.classList.remove('error-border'));
}

// Evento al enviar el formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    limpiarErrores(); // Limpiamos errores previos
    
    let errores = 0;

    // Validación del campo nombre
    if (nombreInput.value.trim() === '') {
        mostrarError(nombreInput, 'Por favor, ingresa tu nombre.');
        errores++;
    }

    // Validación del correo electrónico
    if (!validarEmail(correoInput.value)) {
        mostrarError(correoInput, 'Por favor, ingresa un correo electrónico válido.');
        errores++;
    }

    // Validación del mensaje
    if (mensajeInput.value.trim() === '') {
        mostrarError(mensajeInput, 'Por favor, ingresa un mensaje.');
        errores++;
    }

    // Si no hay errores, se puede proceder a enviar el formulario
    if (errores === 0) {
        // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo un fetch a un servidor
        alert('Formulario enviado con éxito');
        formulario.reset(); // Resetea el formulario después de enviarlo
    }
});
