<?php

require_once '../config/config.php';

if(isset($_POST['token'])){
  $token = htmlspecialchars($_POST['token']);

  $request = $db->prepare('SELECT * FROM users_infos WHERE token = ?');
  $request->execute(array($token));
  $count = $request->rowCount();
  $data = $request->fetch();

  $formattedData = ["data"=>"exist","id"=>$data['id'],"token"=>$data['token'],"username"=>$data['username'],"fullname"=>$data['fullname'],"email"=>$data['email'],"promo"=>$data['promo'],"avatar"=>$data['avatar']];

  if($count > 0){
    echo json_encode($formattedData);
  } else echo "{'data':'inexist'}";
}