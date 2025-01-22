//slecte all images in gallery
const galleryImages = document.querySelectorAll('#gallery-container img');
const images = Array.from(galleryImages);
//elements for the light box
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;  //tracks the current display image

//opens lightbox and synchronize current index when image is clicked
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src=image.src;
        lightbox.classList.add('visible');
    });
});


//cloes lightbox when clicking outside
lightbox.addEventListener('click', (event) => {
    if(event.target === lightbox){
    lightbox.classList.remove('visible');
    }
});

//shows next image in the light box
document.getElementById('next').addEventListener( 'click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src=images[currentIndex].src;
});



//shows previous image in lightbox
document.getElementById('prev').addEventListener( 'click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src=images[currentIndex].src;
});


///keyboard nav for the lightbox
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
        currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src=images[currentIndex].src;
    } else if (event.key === 'ArrowLeft'){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src=images[currentIndex].src;
    } else if (event.key === 'Escape'){
        lightbox.classList.remove('visible');
    }
});


