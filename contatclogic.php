<?php
include_once('./database.php');
$uname = $_POST['uname'];
$uemail = $_POST['uemail'];
$uphone = $_POST['uphone'];

echo $uname,$uemail,$uphone;

$contquery = "INSERT INTO `contactform`(`name`, `email`, `phone`) VALUES ('$uname','$uemail','$uphone')";

?>