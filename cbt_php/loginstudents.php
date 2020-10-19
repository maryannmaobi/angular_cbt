<?php
session_start();
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$pwd = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
// echo $email;

$sql = "SELECT student_id,email,password FROM newusers";
$result = mysqli_query($mysqli,$sql);
$row = mysqli_fetch_all($result, MYSQLI_ASSOC);
// echo json_encode($row);
foreach ($row as $value) {
        $_SESSION['student_id'] = $value['student_id'];
        
    }
if(isset($_SESSION['student_id'])){
    $res ='{"success": true}';
    // echo $_SESSION['student_id'];
}else{
    $res ='{"success": false}';
}
if($row ){
    $res = array('success' => true);
}else{
    $res = array('success' => false);
}
echo json_encode($res);
// var_dump($result);
// if($result = mysqli_query($mysqli,$sql))
// {
// $rows = array();
// while($row = mysqli_fetch_assoc($result))
// {
// $rows[] = $row;
// $id = $row['student_id'];
//          session_start();
//          $_SESSION['student_id'] = $id;
//          echo $_SESSION['student_id'];
// }
// echo json_encode($rows);
// }
// else
// {
// http_response_code(404);
// }

?>