<?php 
    $conn = mysqli_connect("localhost", "root", "", "gwc_baltimore");
    if (!$conn) {
        die("Connection failed!" .mysqli_connect_error());
    }
?>

