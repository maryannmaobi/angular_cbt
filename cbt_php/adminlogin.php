<?php
include_once("database.php");
$_POST = json_decode(file_get_contents('php://input'), true);

$identification = mysqli_real_escape_string($mysqli,$_POST['identification']);
$pwd = mysqli_real_escape_string($mysqli,$_POST['password']); 

$sql = "SELECT identification, password FROM users where identification = '$identification' and password = '$pwd'";
$result = mysqli_query($mysqli,$sql);
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
?>