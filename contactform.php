<?php
    
    
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $email_from = 'bryanchu7.com';
    
    $email_subject = "New Form Submission";
    
    $email_body = "From: $userName\n".
                    "Email: $userEmail\n".
                      "Subject: $subject\n".
                         "Message: $message\n";
    
    $to = "bryanpeterchu@gmail.com";
    
    $headers = "From: $email_from \r\n";
    
    $headers .= "Reply-To: $userEmail \r\n";
    
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");

?>

