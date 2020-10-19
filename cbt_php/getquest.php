<?php

require 'database.php';
// $query = "SELECT * from questionss join courses on questionss.course_id = courses.id";
$query = "SELECT * FROM questionss join courses on questionss.course_id = courses.course_id";

$allquery = mysqli_query($mysqli, $query);

echo json_encode(mysqli_fetch_all($allquery, MYSQLI_ASSOC));