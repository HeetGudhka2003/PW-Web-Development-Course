const carouselImages = document.querySelector('.carousel-images');

const images = document.querySelectorAll('.carousel-images img');

const prevButton = document.querySelector('.prev-button');

const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showImage(index) {

    const offset = -index * 100;

    carouselImages.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % images.length;

    showImage(currentIndex);
});

prevButton.addEventListener('click', () => {

    currentIndex = (currentIndex - 1 + images.length) % images.length;

    showImage(currentIndex);
});

// Show the first image initially

showImage(currentIndex);