<?php

require_once('../config/config.php');

if(isset($_POST['fullname']) && isset($_POST['promo']) && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['passwd']) && isset($_POST['avatar'])){

  $fullname = htmlspecialchars($_POST['fullname']);
  $promo = htmlspecialchars($_POST['promo']);
  $username = htmlspecialchars($_POST['username']);
  $email = htmlspecialchars($_POST['email']);
  $passwd = htmlspecialchars($_POST['passwd']);
  $avatar = htmlspecialchars($_POST['avatar']);
  
  $cost = ['cost' => 12];
  $passwd = password_hash($passwd, PASSWORD_BCRYPT, $cost);
  $verified = 0;
  
  $token = bin2hex(openssl_random_pseudo_bytes(5));
  $verif_code = bin2hex(openssl_random_pseudo_bytes(3));

  // check if email already used or not
  $request = $db->prepare('SELECT id FROM users_infos WHERE email = ?');
  $request->execute(array($email));
  $count = $request->rowCount();
  if($count > 0){
    echo 'email_exist'; die();
  }
  
  // check if username already used or not
  $request = $db->prepare('SELECT id FROM users_infos WHERE username = ?');
  $request->execute(array($username));
  $count = $request->rowCount();
  if($count > 0){
    echo 'username_exist'; die();
  }

  $request = $db->prepare('INSERT INTO users_infos(token, verified, username, fullname, email, password, promo, avatar) VALUES(:token, :verified, :username, :fullname, :email, :password, :promo, :avatar)');
  $request->execute(array(
    'token' => $token,
    'verified' => $verified,
    'username' => $username,
    'fullname' => $fullname,
    'email' => $email,
    'password' => $passwd,
    'promo' => $promo,
    'avatar' => $avatar
  ));
  $request1 = $db->prepare('INSERT INTO verif_code(token_user, code) VALUE(:token_user, :code)');
  $request1->execute(array('token_user' => $token, 'code' => $verif_code));
  $request2 = $db->prepare('INSERT INTO users_links(token_user) VALUES(:token_user)');
  $request2->execute(array('token_user' => $token));
  if($request){
    echo 'user-insert';
    if($request1){
      echo ' code-insert ';
      if($request2){
        echo $token; die;
      } else echo 'links not insert'; die;
    } else echo 'code not insert'; die;
  } else echo 'user not insert'; die;
}