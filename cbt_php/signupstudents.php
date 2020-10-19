<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$surname = $_POST['surname'];
$username = $_POST['username'];
$address = $_POST['address'];
$parentsno = $_POST['parentsno'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$password = $_POST['password'];
$email = $_POST['email'];

    $insert = "INSERT INTO `newusers`( `firstname`,`lastname`, `surname`, `username`, `address`,`parentsno`, `phone`, `gender`, `password`, `email`)
    VALUES ( '$firstname','$lastname','$surname','$username','$address','$parentsno', '$phone','$gender','$password', '$email')";
    if(mysqli_query($mysqli, $insert)){
        echo "Inserted Successful";
    }
    else {
        echo "not Inserted";
    }

?>

