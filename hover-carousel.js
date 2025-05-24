const artworks = Array.from(document.querySelectorAll('.artwork'));
let current = 0;
let canSwitch = true;

function showArtwork(index) {
    artworks.forEach((el, i) => {
        if (i === index) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

// Initial state
showArtwork(current);

function debounceSwitch() {
    canSwitch = false;
    setTimeout(() => canSwitch = true, 650); // ms pause between slides
}

document.addEventListener('mousemove', (e) => {
    const edge = 110; // px, edge zone
    if (canSwitch) {
        if (e.clientX < edge) {
            current = (current - 1 + artworks.length) % artworks.length;
            showArtwork(current);
            debounceSwitch();
        } else if (e.clientX > window.innerWidth - edge) {
            current = (current + 1) % artworks.length;
            showArtwork(current);
            debounceSwitch();
        }
    }
});
