document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const displayedImage = document.getElementById('displayed-image');

    gallery.addEventListener('click', (event) => {
        if (event.target.classList.contains('gallery-image')) {
            displayedImage.src = event.target.src;
        }
    });
});