const gallery = document.querySelector('.gallery-image');
console.log(gallery);
const img = document.querySelectorAll('.gallery-image img');
console.log(img);
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const close = document.querySelector('.close');


img.forEach(card => {
    card.onclick = function() {
        modal.style.display = 'block';
        modalImage.src = card.getAttribute('src');
        console.log('I was clicked');
    }
});

modal.onclick = function() {
    modal.style.display = 'none';
}

close.onclick = function() {
    modal.style.display = 'none';
}