<?php
session_start();
require 'database.php';
$username = "";
// $_POST = json_decode(file_get_contents('php://input'), true);
$_SESSION['student_id'] = $username;
print_r($_SESSION);

// if(isset($_SESSION['student_id'])) {
//    print_r($_SESSION['student_id']);
// }
// else{
// $score = $_POST['scores'];
// $sql = "INSERT INTO `score_tb` (`scores`) VALUES ('$score')";
// $newquery = mysqli_query($mysqli, $sql);
// echo json_encode($newquery);
// }


// $student =  $_SESSION['student_id'];
// echo $student;

