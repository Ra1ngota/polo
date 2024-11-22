document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            document.getElementById("mensaje-confirmacion").style.display = "block";
            document.getElementById("mensaje-error").style.display = "none";
            form.reset(); // Opcional: limpia el formulario
        } else {
            throw new Error("Error al enviar");
        }
    } catch (error) {
        document.getElementById("mensaje-confirmacion").style.display = "none";
        document.getElementById("mensaje-error").style.display = "block";
    }

    event.preventDefault(); // Evita el envío tradicional del formulario
    
    const formulario = event.target;
    const campos = formulario.querySelectorAll(".campo");
    let formularioValido = true;

    // Primero, ocultar todos los mensajes de error
    const errores = formulario.querySelectorAll(".error-message");
    errores.forEach(error => {
        error.style.display = "none";
    });

    // Verificar los campos
    campos.forEach(campo => {
        const errorMessage = campo.nextElementSibling; // Asume que el siguiente elemento es el mensaje de error

        // Si el campo no es válido, mostrar el mensaje de error
        if (!campo.checkValidity()) {
            errorMessage.style.display = "block";
            formularioValido = false;
        }
    });

    // Si todos los campos son válidos, enviar el formulario (o ejecutar el código necesario)
    if (formularioValido) {
        // Aquí puedes ejecutar la acción del formulario (enviar el formulario, mostrar un mensaje de éxito, etc.)
        formulario.submit(); // Descomentar esta línea si deseas enviar el formulario
    }
});