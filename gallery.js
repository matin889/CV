const gallery = document.querySelector('.gallery-image');
const img = document.querySelectorAll('.gallery-image img');
const modal = document.querySelector(".modalOuter");
const modalImage = document.getElementById("popImage");
const close = document.querySelector(".close");

img.forEach(card => {
    card.onclick = function() {
        modal.style.display = 'block';
        modalImage.src = card.getAttribute('src');
    }
});

close.onclick = function() {
    modal.style.display = 'none';
}
modal.onclick = function() {
    modal.style.display = 'none';
}