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

