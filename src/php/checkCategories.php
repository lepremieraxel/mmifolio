<?php

require_once '../config/config.php';

$request = $db->query('SELECT name FROM categories');
$data = $request->fetchAll();

echo json_encode($data);