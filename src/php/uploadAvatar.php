<?php

if(isset($_POST['avatar']) && isset($_POST['name'])){
  $name = $_POST['name'];
  $avatar = $_FILES['avatar'];

  if(move_uploaded_file($avatar["tmp_name"], "/assets/img/".basename($avatar['name']))){
    echo 'upload';
  } else {
    echo 'not upload';
  }
}