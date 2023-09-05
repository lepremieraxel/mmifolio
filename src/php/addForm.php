<?php

require_once '../config/config.php';

if(isset($_POST['tokenUser']) && isset($_POST['title']) && isset($_POST['category']) && isset($_POST['description']) && isset($_POST['link']) && isset($_POST['year']) && isset($_POST['miniature']) && isset($_POST['mainImg']) && isset($_POST['img1']) && isset($_POST['img2']) && isset($_POST['img3']) && isset($_POST['img4']) && isset($_POST['img5'])){

  $tokenUser = htmlspecialchars($_POST['tokenUser']);
  $token = bin2hex(openssl_random_pseudo_bytes(5));

  $title = htmlspecialchars($_POST['title']);
  $category = htmlspecialchars($_POST['category']);
  $description = htmlspecialchars($_POST['description']);
  $link = htmlspecialchars($_POST['link']);
  $year = htmlspecialchars($_POST['year']);
  $miniature = htmlspecialchars($_POST['miniature']);
  $mainImg = htmlspecialchars($_POST['mainImg']);
  $img1 = htmlspecialchars($_POST['img1']);
  $img2 = htmlspecialchars($_POST['img2']);
  $img3 = htmlspecialchars($_POST['img3']);
  $img4 = htmlspecialchars($_POST['img4']);
  $img5 = htmlspecialchars($_POST['img5']);

  if($img1 == 'undefined'){
    $img1 = null;
  }
  if($img2 == 'undefined'){
    $img2 = null;
  }
  if($img3 == 'undefined'){
    $img3 = null;
  }
  if($img4 == 'undefined'){
    $img4 = null;
  }
  if($img5 == 'undefined'){
    $img5 = null;
  }

  $request = $db->prepare('INSERT INTO creations(token, token_user, title, category, description, year, link, miniature, main_img, img1, img2, img3, img4, img5) VALUE(:token, :token_user, :title, :category, :description, :year, :link, :miniature, :main_img, :img1, :img2, :img3, :img4, :img5)');
  $request->execute(array(
    'token' => $token,
    'token_user' => $tokenUser,
    'title' => $title,
    'category' => $category,
    'description' => $description,
    'year' => $year,
    'link' => $link,
    'miniature' => $miniature,
    'main_img' => $mainImg,
    'img1' => $img1,
    'img2' => $img2,
    'img3' => $img3,
    'img4' => $img4,
    'img5' => $img5
  ));
  if($request){
    echo $token;
  } else echo 'not-insert';
} else echo 'not-insert';