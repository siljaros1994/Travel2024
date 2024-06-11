document.querySelectorAll('.fa-heart-o').forEach(heart => {
    heart.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('active');
    });
});