<?php

require_once('../config/config.php');

$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';

if($contentType === "application/json"){
  $content = trim(file_get_contents("php://input"));
  $decoded = json_decode($content, true);

  if(!is_array($decoded)){
    echo '{"error":"not_decoded"}'; die();
  } else {
    $email = $decoded['email'];
    
    $request = $db->prepare('SELECT email FROM users_infos WHERE email = ?');
    $request->execute(array($email));
    $count = $request->rowCount();

    if($count > 0){
      echo '{"error":"exist"}';
    } else {
      echo '{"error":"dont_exist"}';
    }
  }
}