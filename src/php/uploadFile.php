<?php

$name = $_POST['name'];
$file = $_FILES['file'];
$type = $_POST['type'];

if(!is_uploaded_file($file['tmp_name'])){
  echo 'not upload'; die;
}
if(!file_exists('../../assets/'.$type.'/'.$name)){
  move_uploaded_file($file["tmp_name"], '../../assets/'.$type.'/'.$name);
  echo 'moved'; die;
} else {
  echo 'not moved'; die;
}