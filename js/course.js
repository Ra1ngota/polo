document.addEventListener('DOMContentLoaded', () => {
    fetch('cursos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar los datos');
        }
        return response.json();
    })
    .then(cursos => {
        const urlParams = new URLSearchParams(window.location.search);
        const cursoId = urlParams.get("id");
        const curso = cursos.find(c => c.id === cursoId);

        if (curso) {
            // Llenar la imagen, nombre y descripción
            document.getElementById("curso-imagen").src = curso.imagen;
            document.getElementById("curso-nombre").textContent = curso.nombre;
            document.getElementById("curso-descripcion").textContent = curso.descripcion;

            const acordeonContainer = document.createElement('div');
            acordeonContainer.setAttribute('id', 'curso-acordeon');
            curso.contenido.forEach((item) => {
                const acordeon = document.createElement('div');
                acordeon.classList.add('accordion');

                acordeon.innerHTML = `
                    <button class="accordion-header">
                        <span>${item.titulo}</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="accordion-body">
                        <p>${item.texto}</p>
                    </div>
                `;
                
                acordeonContainer.appendChild(acordeon);
            });
            document.getElementById("accordion").appendChild(acordeonContainer);

            const accordionHeaders = acordeonContainer.querySelectorAll('.accordion-header');
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const body = header.nextElementSibling;
                    body.classList.toggle('active');

                    const icon = header.querySelector('i');
                    icon.classList.toggle('rotated');
                });
            });
        } else {
            document.getElementById("course-container").innerHTML = `<p>Curso no encontrado</p>`;
        }
    })
    .catch(error => console.error('Error ```javascript:', error));
});