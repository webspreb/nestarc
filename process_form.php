<?php
ob_start(); // Start output buffering

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the data from the form
    $name = $_POST["name"];
    $phoneNumber = $_POST["phoneNumber"];
    $email = $_POST["email"];
    $selectedOption1 = $_POST["radio1"];
    $selectedOption2 = $_POST["radio2"];
    $selectedOption3 = $_POST["radio3"];

    // Compose the email message
    $message = "Name: $name\n";
    $message .= "Phone Number: $phoneNumber\n";
    $message .= "Email: $email\n";
    $message .= "Selected Option in Section 1: $selectedOption1\n";
    $message .= "Selected Option in Section 2: $selectedOption2\n";
    $message .= "Selected Option in Section 3: $selectedOption3\n";

    // Set the recipient email address
    $to = "admin@bitsbytesbuzz.com"; // Change this to your recipient's email address

    // Set the subject of the email
    $subject = "Get Quote";

    // Send the email
    if (mail($to, $subject, $message)) {
        // Email sent successfully
        echo "Email sent successfully.";
    } else {
        // Email sending failed
        echo "Email sending failed.";
    }
}
