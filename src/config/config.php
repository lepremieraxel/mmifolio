<?php

try {
  $db = new PDO('mysql:host=localhost;dbname=xesz8174_mmifolio;charset=utf8mb4_unicode_ci', 'xesz8174_bdd', 'pys3-pYwS-xF9?');
} catch (Exception $e) {
  die('Error : ' . $e->getMessage());
}