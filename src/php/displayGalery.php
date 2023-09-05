<?php

require_once '../config/config.php';

if(isset($_POST['nb']) && isset($_POST['category']) && isset($_POST['year'])){
  $nb = $_POST['nb'];
  $category = $_POST['category'];
  $year = $_POST['year'];

  if($category == 'all' && $year == 'all'){
    $where = '';
  }
  if($category == 'all' && $year !== 'all'){
    $where = 'WHERE year = "'.$year.'"';
  }
  if($category !== 'all' && $year == 'all'){
    $where = 'WHERE category = "'.$category.'"';
  }

  $arr = [];

  $request = $db->prepare('SELECT token, token_user, title, category, miniature FROM creations '.$where.' ORDER BY created_at DESC LIMIT '.$nb);
  $request->execute();
  $data = $request->fetchAll();
  $count = $request->rowCount();

  if($count > 0){
    foreach($data as $line){
      $request1 = $db->prepare('SELECT username, fullname, promo, avatar FROM users_infos WHERE token = ?');
      $request1->execute(array($line['token_user']));
      $user = $request1->fetch();
  
      $request2 = $db->prepare('SELECT token_user FROM likes WHERE token_creation = ?');
      $request2->execute(array($line['token']));
      $likes = $request2->rowCount();
      $userLikes = $request2->fetchAll();
      $arrLikes = ["likes" => $likes, "user_likes" => $userLikes];
  
      array_push($arr, array_merge($line, $user, $arrLikes));
    }
    if($request && $request1){
      echo json_encode($arr);
    } else echo '{"data":"error"}';
  } else {
    if($request){
      echo json_encode($arr);
    } else echo '{"data":"error"}';
  }


}