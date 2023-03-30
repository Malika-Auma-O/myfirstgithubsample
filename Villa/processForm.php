<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Build email content
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    // Send email
    $to = "mom220107@gmail.com";
    $headers = "From: $email";
    mail($to, $subject, $body, $headers);
    
    // Redirect to thank you page
    header("Location: thank-you.html");
    exit();
}
?>
