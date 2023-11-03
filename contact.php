<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST["con_fname"];
    $lname = $_POST["con_lname"];
    $phone = $_POST["con_phone"];
    $email = $_POST["con_email"];
    $message = $_POST["con_message"];

    $to = "youremail@example.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $messageBody = "First Name: $fname\n";
    $messageBody .= "Last Name: $lname\n";
    $messageBody .= "Phone Number: $phone\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Message: $message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message sending failed. Please try again later.";
    }
}
