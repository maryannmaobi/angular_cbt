<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_GET['course_id'];
$papertype = $_POST['papertype'];
$question = $_POST['question'];
$optionA = $_POST['optionA'];
$optionB = $_POST['optionB'];
$optionC = $_POST['optionC'];
$optionD = $_POST['optionD'];
$correctans = $_POST['correctans'];
$marks = $_POST['marks'];


$insert = "UPDATE questionss SET question = '$question', optionA = '$optionA', optionB = '$optionB', optionC = '$optionC', optionD = '$optionD', correctans = '$correctans',
         marks = '$marks' WHERE `course_id` = '$id' LIMIT 1";

$myinsert = mysqli_query($mysqli, $insert);

$response;
$response['success'] = "true"; 
echo json_encode($response);