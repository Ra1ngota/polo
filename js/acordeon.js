// Selecciona todos los encabezados del acordeón
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        // Toggle de la clase "active" en el cuerpo del acordeón correspondiente
        const body = header.nextElementSibling;
        const isActive = body.classList.contains("active");

        // Cierra todos los elementos abiertos
        document.querySelectorAll(".accordion-body.active").forEach(openBody => {
            openBody.classList.remove("active");
        });

        // Abre el elemento seleccionado
        if (!isActive) {
            body.classList.add("active");
        }
    });
});
