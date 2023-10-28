
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

var currentSection = 1;
var numSections = 4; // Change this if you have more sections

function updateProgressBar() {
    var width = (currentSection - 1) / numSections * 100;
    $('.progress-bar').css('width', width + '%');
}

function nextSection(current) {
    document.getElementById('section' + current).classList.remove('active');
    currentSection = current + 1;
    document.getElementById('section' + currentSection).classList.add('active');
    updateProgressBar();
}

function prevSection(current) {
    document.getElementById('section' + current).classList.remove('active');
    currentSection = current - 1;
    document.getElementById('section' + currentSection).classList.add('active');
    updateProgressBar();
}

function submitForm() {
    // Capture the selected option in the current section and store it in the hidden input field
    var selectedOption = document.querySelector('input[name="radio' + currentSection + '"]:checked');
    document.getElementById('selectedOption' + currentSection).value = selectedOption ? selectedOption.value : '';

    // Submit the form
    document.getElementById('multiSectionForm').submit();
}