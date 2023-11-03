<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];

    $to = "priyeshchaturvedi757@gmail.com"; // Replace with your email address
    $subject = "Consultation";
    $message = "Email: $email\nMobile: $mobile";

    // You can add additional headers here if needed
    $headers = "From: $email";

    error_log("Subscription request received.");
    if (mail($to, $subject, $message, $headers)) {
        error_log("Email sent successfully.");
        echo "Thank you for subscribing! We have sent a confirmation to your email address.";
    } else {
        error_log("Email sending failed.");
        echo "There was an error sending your subscription request. Please try again.";
    }
}
