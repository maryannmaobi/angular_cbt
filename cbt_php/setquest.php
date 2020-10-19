<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$papertype = $_POST['papertype'];
$question = $_POST['question'];
$optionA = $_POST['optionA'];
$optionB = $_POST['optionB'];
$optionC = $_POST['optionC'];
$optionD = $_POST['optionD'];
$correctans = $_POST['correctans'];
$marks = $_POST['marks'];


$insert = "INSERT INTO `questionss`( `course_id`,`question`, `optionA`, `optionB`, `optionC`, `optionD`, `correctans`, `marks`) VALUES 
        ( '$papertype','$question','$optionA','$optionB','$optionC','$optionD','$correctans','$marks')";
 $myinsert = mysqli_query($mysqli, $insert);

 $response;
 $response['success'] = "true"; 
 echo json_encode($response);
?>
 