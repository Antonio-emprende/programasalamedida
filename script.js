console.log("Script cargado correctamente.");

// ** FUTURAS FUNCIONES JAVASCRIPT **

// 1. Validación del Formulario de Contacto (antes de enviar a Formspree)
//    - Comprobar que los campos no estén vacíos.
//    - Validar formato de email.
//    - Mostrar mensajes de error.
/*
const contactForm = document.querySelector('#contacto form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // Prevenir envío inmediato para validar
        // event.preventDefault();
        console.log("Validando formulario...");
        let isValid = true;
        // ... Lógica de validación aquí ...
        if (!isValid) {
            // Mostrar errores
            console.log("Formulario inválido");
             event.preventDefault(); // Detener envío si no es válido
        } else {
            console.log("Formulario válido, enviando...");
            // El form se enviará (si no se usó preventDefault permanentemente)
        }
    });
}
*/

// 2. Menú Móvil (Hamburguesa)
//    - Detectar clic en el botón de menú.
//    - Mostrar/ocultar la lista de navegación (`nav ul`).

// 3. Efectos visuales sutiles (opcional)
//    - Animaciones al hacer scroll (ScrollReveal.js u Intersection Observer API).
//    - Pequeños efectos hover.

// 4. Integración Adsterra
//    - Algunos códigos de Adsterra pueden requerir inicialización o manipulación vía JS,
//      aunque muchos son solo pegar el script tag en el HTML. Revisa su documentación.

// 5. Carga de videos de YouTube de forma diferida (Lazy Loading)
//    - Para mejorar el rendimiento inicial, puedes cargar los iframes de YouTube
//      solo cuando el usuario hace scroll hasta ellos.