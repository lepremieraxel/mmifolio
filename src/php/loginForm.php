<?php

require_once('../config/config.php');

if(isset($_POST['login']) && isset($_POST['passwd'])){

  $login = htmlspecialchars(strtolower($_POST['login']));
  $passwd = htmlspecialchars($_POST['passwd']);

  $request = $db->prepare('SELECT token, password FROM users_infos WHERE email = ? OR username = ?');
  $request->execute(array($login, $login));
  $count = $request->rowCount();
  $data = $request->fetch();

  if($count > 0){
    if(password_verify($passwd, $data['password'])){
      echo $data['token']; die;
    } else echo 'password-incorrect'; die;
  } else echo 'login-incorrect'; die;
}