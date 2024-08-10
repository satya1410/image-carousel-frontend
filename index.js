let currentIndex = 0;

function updateSlidePosition() {
    const slides = document.querySelector('.carousel-slide');
    const images = slides.querySelectorAll('img');
    const background = document.getElementById('carousel-background');

    images.forEach((img, index) => {
        img.classList.remove('prev', 'active', 'next');
        
        if (index === currentIndex) {
            img.classList.add('active');
            // Update background image
            background.style.backgroundImage = `url(${img.src})`;
        } else if (index === (currentIndex + images.length - 1) % images.length) {
            img.classList.add('prev');
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('next');
        }
    });
}

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const images = slides.querySelectorAll('img');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    updateSlidePosition();
}

window.onload = function() {
    updateSlidePosition();
};
