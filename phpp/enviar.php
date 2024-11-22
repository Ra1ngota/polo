<?php
//IMPORTANTE
//Nota informativa: Este archivo se encuentra en el proyecto con el propósito de brindar soporte para el envío de formularios mediante correo electrónico en caso de que, en un futuro, el sitio web se aloje en un servidor que permita la ejecución de código PHP. Actualmente, el proyecto está alojado en GitHub Pages, un servicio de alojamiento estático que no admite la ejecución de scripts PHP, por lo que las funcionalidades de este archivo no están operativas en el entorno actual.

//La inclusión de este archivo responde a una previsión de escalabilidad y flexibilidad en el desarrollo, permitiendo que, en caso de migración a un entorno con soporte PHP, el formulario de contacto esté habilitado para enviar correos electrónicos sin modificaciones adicionales. Esto garantiza que el sitio pueda adaptarse fácilmente a nuevas necesidades de alojamiento en el futuro.

//Para el funcionamiento completo de esta característica, será necesario que el proyecto se despliegue en un servidor con compatibilidad para PHP y configuración de un servicio de correo electrónico en el servidor.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = htmlspecialchars(strip_tags($_POST['nombre']));
    $correo = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars(strip_tags($_POST['mensaje']));

    // Validar el correo electrónico
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $error = "Correo no válido";
        echo $error;
        exit;
    }

    // Configurar el correo
    $to = "correo@gmail.com";
    $subject = "Mensaje del formulario de contacto";
    $body = "Nombre: $nombre\nCorreo: $correo\nMensaje: $mensaje";
    $headers = "From: $correo\r\nReply-To: $correo";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        $mensaje_enviado = "Mensaje enviado con éxito.";
        echo $mensaje_enviado;
    } else {
        $error_envio = "Error al enviar el mensaje.";
        echo $error_envio;
    }
}