<?php

require_once '../config/config.php';

if(isset($_POST['year'])){
  $year = $_POST['year'];
  $request = $db->query('SELECT name FROM year WHERE name = '.$year);
  $count = $request->rowCount();
  if($count <= 0){
    $request = $db->query('INSERT INTO year(name) VALUES('.$year.')');
  } else {

  }
} else {
  $request = $db->query('SELECT name FROM year');
  $data = $request->fetchAll();
  echo json_encode($data);
}