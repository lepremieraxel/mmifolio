<?php

require_once '../config/config.php';

if(isset($_POST['year'])){
  $year = $_POST['year'];
  $request = $db->query('SELECT year FROM year WHERE year = '.$year);
  $count = $request->rowCount();
  if($count <= 0){
    $request = $db->query('INSERT INTO year(year) VALUES('.$year.')');
  } else {

  }
} else {
  $request = $db->query('SELECT year FROM year');
  $data = $request->fetchAll();
  echo json_encode($data);
}