<?php
// Saves the Class 10 form into MySQL using a prepared statement.
$conn = new mysqli('localhost', 'root', '', 'krishna');
if ($conn->connect_error) { die('Connection Failed : ' . $conn->connect_error); }
$stmt = $conn->prepare("INSERT INTO registration(`Roll-No`,Name,address,PhoneNumber,Gender,Email,father_name,Mother_name,DOB) VALUES (?,?,?,?,?,?,?,?,?)");
$stmt->bind_param("sssssssss", $_POST['Roll_No'], $_POST['Name'], $_POST['address'], $_POST['PhoneNumber'],
  $_POST['Gender'], $_POST['Email'], $_POST['father_name'], $_POST['Mother_name'], $_POST['DOB']);
$stmt->execute();
echo "Registration successful. <a href='form.html'>Back to form</a>";
$stmt->close(); $conn->close();
?>
