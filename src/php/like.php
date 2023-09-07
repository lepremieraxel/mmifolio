<?php

require_once '../config/config.php';

if(isset($_POST['token_user']) && isset($_POST['token_creation'])){
  $token_user = $_POST['token_user'];
  $token_creation = $_POST['token_creation'];

  $request = $db->prepare('SELECT id FROM likes WHERE token_creation = ? AND token_user = ?');
  $request->execute(array($token_creation, $token_user));
  $count = $request->rowCount();

  if($count == 0){
    $request1 = $db->prepare('INSERT INTO likes(token_creation, token_user) VALUES(:token_creation, :token_user)');
    $request1->execute(array(
      'token_creation' => $token_creation,
      'token_user' => $token_user
    ));
    $request1 = $db->prepare('SELECT id FROM likes WHERE token_creation = ?');
    $request1->execute(array($token_creation));
    $count1 = $request1->rowCount();
    $response = '{"state":"liked", "nb":"'.$count1.'"}';
  }
  if($count == 1){
    $request1 = $db->prepare('DELETE FROM likes WHERE token_creation = ? AND token_user = ?');
    $request1->execute(array($token_creation, $token_user));
    $request1 = $db->prepare('SELECT id FROM likes WHERE token_creation = ?');
    $request1->execute(array($token_creation));
    $count1 = $request1->rowCount();
    $response = '{"state":"unliked", "nb":"'.$count1.'"}';
  }
  if($count !== 0 && $count !== 1){
    $response = '{"state":"error"}';
  }
  echo $response;
} else echo '{"state":"error"}';