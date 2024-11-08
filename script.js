document.addEventListener("DOMContentLoaded", () => {
    // Carrusel de imágenes
    let carouselIndex = 0; // Renombrado de currentIndex para evitar conflicto
    const itemsToShow = 4; // Número de elementos a mostrar al mismo tiempo

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        // Calcular el nuevo índice
        carouselIndex += direction;

        // Asegurarse de que el índice esté dentro de los límites
        if (carouselIndex < 0) {
            carouselIndex = 0; // No permitir pasar de la primera imagen
        } else if (carouselIndex > totalSlides - itemsToShow) {
            carouselIndex = totalSlides - itemsToShow; // No permitir pasar de la última imagen visible
        }

        // Mover el carrusel
        const carouselTrack = document.getElementById('carousel-track');
        const offset = -carouselIndex * (100 / itemsToShow); // Calcular el desplazamiento basado en el número de elementos visibles
        carouselTrack.style.transform = `translateX(${offset}%)`;
    }

    // Mostrar/Ocultar contraseñas
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

    // Selección de talles
    const botonesTalles = document.querySelectorAll('.opciones-talles button');
    botonesTalles.forEach(button => {
        button.addEventListener('click', () => {
            // Quitamos la clase 'active' de todos los botones
            botonesTalles.forEach(btn => btn.classList.remove('active'));

            // Añadimos la clase 'active' al botón seleccionado
            button.classList.add('active');
        });
    });

    // Menú hamburguesa
    function toggleMenu() {
        const menu = document.querySelector('.menu-horizontal');
        menu.classList.toggle('active');
    }

    // Galería en pantalla completa
    let galleryIndex = 0; // Renombrado de currentIndex para evitar conflicto
    const images = document.querySelectorAll('.gallery img');

    function openFullscreen(img) {
        const fullscreen = document.getElementById('fullscreenContainer');
        fullscreen.style.display = 'block';
        document.getElementById('fullscreenImage').src = img.src;
        galleryIndex = Array.from(images).indexOf(img);
    }

    function closeFullscreen() {
        document.getElementById('fullscreenContainer').style.display = 'none';
    }

    function showPrev() {
        galleryIndex = (galleryIndex - 1 + images.length) % images.length;
        document.getElementById('fullscreenImage').src = images[galleryIndex].src;
    }

    function showNext() {
        galleryIndex = (galleryIndex + 1) % images.length;
        document.getElementById('fullscreenImage').src = images[galleryIndex].src;
    }

    // Exponer funciones para usarlas en el HTML
    window.moveSlide = moveSlide;
    window.togglePasswordVisibility = togglePasswordVisibility;
    window.toggleMenu = toggleMenu;
    window.openFullscreen = openFullscreen;
    window.closeFullscreen = closeFullscreen;
    window.showPrev = showPrev;
    window.showNext = showNext;
});