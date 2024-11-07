let currentIndex = 0;
const itemsToShow = 4; // Número de elementos a mostrar al mismo tiempo

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Calcular el nuevo índice
    currentIndex += direction;

    // Asegurarse de que el índice esté dentro de los límites
    if (currentIndex < 0) {
        currentIndex = 0; // No permitir pasar de la primera imagen
    } else if (currentIndex > totalSlides - itemsToShow) {
        currentIndex = totalSlides - itemsToShow; // No permitir pasar de la última imagen visible
    }

    // Mover el carrusel
    const carouselTrack = document.getElementById('carousel-track');
    const offset = -currentIndex * (100 / itemsToShow); // Calcular el desplazamiento basado en el número de elementos visibles
    carouselTrack.style.transform = `translateX(${offset}%)`;
}

// click para visualizar contraseñas
function togglePasswordVisibility(passwordFieldId, iconElement) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleIcon = iconElement.querySelector("img");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "grupo1-img/html-socios-form/visibility-off.svg"; // Cambia a icono de ojo cerrado
    } else {
        passwordField.type = "password";
        toggleIcon.src = "grupo1-img/html-socios-form/visibility.svg"; // Cambia a icono de ojo abierto
    }
}



//  merch 
// Seleccionamos todos los botones dentro de la clase opciones-talles
const botonesTalles = document.querySelectorAll('.opciones-talles button');

// Añadimos un evento de clic a cada botón
botonesTalles.forEach(button => {
    button.addEventListener('click', () => {
        // Quitamos la clase 'active' de todos los botones
        botonesTalles.forEach(btn => btn.classList.remove('active'));
        
        // Añadimos la clase 'active' al botón seleccionado
        button.classList.add('active');
    });
});

