<?php
ob_start();
  //start a session -- needed for Securimage Captcha check
  session_start();
 
  
 require_once 'google/appengine/api/mail/Message.php';
 require 'FirePHPCore/fb.php';
 use google\appengine\api\mail\Message;
 
FB::setEnabled(false);  

FB::log('Log message');
FB::info('Info message');
FB::warn('Warn message');
FB::error('Error message');
  //add you e-mail address here
  define("MY_EMAIL", "josh.tharakan@gmail.com");
  define("TO_MAIL","support@edudefine.com");
 
  /**
   * Sets error header and json error message response.
   *
   * @param  String $messsage error message of response
   * @return void
   */
  function errorResponse ($messsage) {
    header('HTTP/1.1 500 Internal Server Error');
    die(json_encode(array('message' => $messsage)));
  }
 
  /**
   * Return a formatted message body of the form:
   * Name: <name of submitter>
   * Comment: <message/comment submitted by user>
   *
   * @param String $name     name of submitter
   * @param String $message message/comment submitted
   */
  function setMessageBody ($name, $message) {
  	/*
	  $message_body = "Thanks for the below enquiry. We will reach to you shortly."."\n\n";
		  $message_body .= "If you didn't receive any communication within next 2 days, please miss-call to 9444 413 35."."\n";
		  $message_body .= "We will call you back shortly."."\n";*/
	  /*
		  
	  */
	  
	$message_body = "Name: " . $name."\n\n";
	$message_body = "Email: " . $email."\n\n";
    $message_body .= "Comment:"."\n\n" . nl2br($message);
    return $message_body;
  }
 
  $email = $_POST['email']; 
  $message = $_POST['message'];
  $subject ="EduDefine - Contact us";
  $message_body = setMessageBody($_POST["name"], $message);
 
  header('Content-type: application/json');
  //do some simple validation. this should have been validated on the client-side also
  if (empty($email) || empty($message)) {
    errorResponse('Email or message is empty.');
  }
 
  //do Captcha check, make sure the submitter is not a robot:)...
  include_once 'form/library/vender/securimage/securimage.php';
  $securimage = new Securimage();
  if (!$securimage->check($_POST['captcha_code'])) {
    errorResponse('Invalid Security Code');
  }
/*
 
  //try to send the message
  if(mail(MY_EMAIL, "Feedback Form Results", setMessageBody($_POST["name"], $message), "From: $email")) {
    echo json_encode(array('message' => 'Your message was successfully submitted.'));
  } else {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(array('message' => 'Unexpected error while attempting to send e-mail.'));
  }*/
  
  
 	//echo json_encode(array('message' => 'Sending the message'));
	try {
    $message = new Message();
    $message->setSender(MY_EMAIL);
    $message->addTo(TO_MAIL);
	$message->setSubject($subject);
    $message->setTextBody($message_body);
    $message->send();
    echo json_encode(array('message' => 'E-mail sent successfully. We will reach to you shortly.'));
} catch (InvalidArgumentException $e) {
    header('HTTP/1.1 500 Internal Server Error');
    echo json_encode(array('message' => 'Unexpected error while attempting to send e-mail.'));
	}	
?>