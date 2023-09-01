<?php

require_once('../config/config.php');

$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';

if($contentType === "application/json"){
  $content = trim(file_get_contents("php://input"));
  $decoded = json_decode($content, true);

  if(!is_array($decoded)){
    echo '{"error":"not_decoded"}'; die();
  } else {
    $fullname = $decoded['fullname'];
    $promo = $decoded['promo'];
    $username = $decoded['username'];
    $avatar = $decoded['avatar'];
    $email = $decoded['email'];
    $passwd = $decoded['passwd'];

    $cost = ['cost' => 12];
    $passwd = password_hash($passwd, PASSWORD_BCRYPT, $cost);

    $token = bin2hex(openssl_random_pseudo_bytes(5));
    $verif_code = bin2hex(openssl_random_pseudo_bytes(3));

    // check if email already used or not
    $request = $db->prepare('SELECT id FROM users_infos WHERE email = ?');
    $request->execute(array($email));
    $count = $request->rowCount();
    if($count > 0){
      echo '{"error":"email_exist"}'; die();
    }

    // check if username already used or not
    $request = $db->prepare('SELECT id FROM users_infos WHERE username = ?');
    $request->execute(array($username));
    $count = $request->rowCount();
    if($count > 0){
      echo '{"error":"username_exist"}'; die();
    }

    
  }
}