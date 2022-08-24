<?php
$Roll_No =$_POST['Roll_No'];
$name =$_POST['Name'];
$address =$_POST['address'];
$PhoneNumber =$_POST['PhoneNumber'];
$Gender=$_POST['Gender'];
$Email=$_POST['Email'];
$father_name=$_POST['father_name'];
$Mother_name=$_POST['Mother_name'];
$DOB=$_POST['DOB'];

$conn = new mysqli('localhost','root','','krishna');
if($conn->connect_error){
	die('Connection Failed : '.$conn->connect_error);
}else{
	$stmt = &conn->prepare(" insert into registration(Roll-No,Name,address,PhoneNumber,Gender,Email,father_name,Mother_name,DOB)")
}
?>