<?php

require_once "../config/config.php";

if(isset($_POST['username'])){
  $username = $_POST['username'];

  $request = $db->prepare('SELECT token,username,fullname,avatar FROM users_infos WHERE username = ?');
  $request->execute(array($username));
  $userInfos = $request->fetch();
  $exist = $request->rowCount();

  if($exist !== 0){
    $request1 = $db->prepare('SELECT bio,website,portfolio,instagram,github,dribbble,behance,linkedin FROM users_links WHERE token_user = ?');
    $request1->execute(array($userInfos['token']));
    $userLinks = $request1->fetch();

    $formattedData = ["data"=>"exist", "token"=>$userInfos['token'], "username"=>$userInfos['username'], "fullname"=>$userInfos['fullname'], "avatar"=>$userInfos['avatar'], "bio"=>$userLinks['bio'], "socialLinks"=>["website"=>$userLinks['website'],"portfolio"=>$userLinks['portfolio'],"instagram"=>$userLinks['instagram'],"github"=>$userLinks['github'],"dribbble"=>$userLinks['dribbble'],"behance"=>$userLinks['behance'],"linkedin"=>$userLinks['linkedin']]];
    if($request && $request1){
      echo json_encode($formattedData);
    } else echo '{"data":"error"}';
  } else echo '{"data":"inexist"}';
} else echo '{"data":"error"}';