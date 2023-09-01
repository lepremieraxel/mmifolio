<?php

require_once('../config/config.php');

$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';

if($contentType === "application/json"){
  $content = trim(file_get_contents("php://input"));
  $decoded = json_decode($content, true);

  if(!is_array($decoded)){
    echo '{"error":"not_decoded"}'; die();
  } else {
    $username = $decoded['username'];
    
    $request = $db->prepare('SELECT username FROM users_infos WHERE username = ?');
    $request->execute(array($username));
    $count = $request->rowCount();

    if($count > 0){
      echo '{"error":"exist"}';
    } else {
      echo '{"error":"dont_exist"}';
    }
  }
}