// Function to show the content section
function showContentSection() {
    var contentSection = document.querySelector('.hide');
    contentSection.style.visibility = 'visible';
}

// Call the function after your animation is ready, for example, after 2 seconds
setTimeout(showContentSection, 1000);

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
document.getElementById("subscription-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var form = this;
    var formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
    })
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then(function (result) {
        // Show the result in the resultPopup
        document.getElementById("resultMessage").textContent = result;
        document.getElementById("resultPopup").style.display = "block";
        form.reset(); // Reset the form
    })
    .catch(function (error) {
        console.error("Fetch error: ", error);
        // Handle the error, e.g., display an error message in the resultPopup
        document.getElementById("resultMessage").textContent = "An error occurred. Please try again later.";
        document.getElementById("resultPopup").style.display = "block";
    });
});
    // JavaScript to handle the modal
    const openPopupLink = document.getElementById("openPopupLink");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModalButton");

    openPopupLink.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });