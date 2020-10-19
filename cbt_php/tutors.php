<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];
$insert = "INSERT INTO tutors ( `name`) VALUES ('$name')";
$myinsert = mysqli_query($mysqli, $insert);

 $response;
 $response['success'] = "true"; 
 echo json_encode($response);

?>