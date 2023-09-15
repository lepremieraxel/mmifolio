<?php

require_once '../config/config.php';

if(isset($_POST['token'])){
  $token = $_POST['token'];

  $request = $db->prepare('SELECT token_user,title,category,description,year,link,main_img,img1,img2,img3,img4,img5 FROM creations WHERE token = ?');
  $request->execute(array($token));
  $count = $request->rowCount();
  $data = $request->fetch();

  if($count > 0){

    $request2 = $db->prepare('SELECT username,fullname,avatar FROM users_infos WHERE token = ?');
    $request2->execute(array($data['token_user']));
    $userInfos = $request2->fetch();

    $request1 = $db->prepare('SELECT token_user FROM likes WHERE token_creation = ?');
    $request1->execute(array($token));
    $nbLikes = $request1->rowCount();
    $userLikes = $request1->fetchAll();

    $formattedData = ["data"=>"exist", "username"=>$userInfos['username'], "fullname"=>$userInfos['fullname'], "avatar"=>$userInfos['avatar'], "nbLikes"=>$nbLikes, "userLikes"=>$userLikes, "title"=>$data['title'], "category"=>$data['category'], "year"=>$data['year'], "mainImg"=>$data['main_img'], "description"=>$data['description'], "img1"=>$data['img1'], "img2"=>$data['img2'], "img3"=>$data['img3'], "img4"=>$data['img4'], "img5"=>$data['img5']];

    if($request && $request1 && $request2){
      echo json_encode($formattedData);
    } else echo '{"data":"error"}';
  } else echo '{"data":"inexist"}';
} else echo '{"data":"error"}';