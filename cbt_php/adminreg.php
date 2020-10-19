
<?php
require 'database.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];
$email = $_POST['email'];
$identification = $_POST['identification'];
$password = $_POST['password'];
    $insert = "INSERT INTO `users`( `name`,`email`, `identification`, `password`)
    VALUES ( '$name','$email','$identification','$password')";

    if(mysqli_query($mysqli, $insert)){
        echo "Inserted Successful";
    }
    else {
        echo "not Inserted";
    }
    

?>