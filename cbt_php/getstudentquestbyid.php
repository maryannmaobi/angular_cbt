<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT course_id as Exam_No, quest_id, question, optionA, optionB, optionC, optionD, correctans
        FROM questionss 
        JOIN courses 
        USING(course_id)";

$result = mysqli_query($mysqli, $sql);
//  $row = mysqli_fetch_assoc($result);
$res = mysqli_fetch_all($result, MYSQLI_ASSOC);

 echo $json = json_encode($res);

?>


