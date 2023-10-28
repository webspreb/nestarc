
var modal = document.getElementById('modal');
var openModalLink = document.getElementById('openPopupLink');
var closeModalButton = document.getElementById('closeModalButton');

openModalLink.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
