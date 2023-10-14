// Add your JavaScript code here
const thumbnails = document.querySelectorAll('.thumbnail img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

let currentImageIndex = 0;

// Function to open the lightbox
function openLightbox(index) {
    lightbox.style.display = 'block';
    lightboxImage.src = thumbnails[index].src;
    caption.innerHTML = thumbnails[index].alt;
    currentImageIndex = index;
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to navigate to the next image
function nextImage() {
    if (currentImageIndex < thumbnails.length - 1) {
        currentImageIndex++;
        openLightbox(currentImageIndex);
    }
}

// Function to navigate to the previous image
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        openLightbox(currentImageIndex);
    }
}

// Attach event listeners
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    }
});
