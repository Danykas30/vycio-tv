<?php
$host = "localhost";  // Change this if using a remote server
$user = "root";       // Change this to your database username
$pass = "";           // Change this to your database password
$dbname = "vytio_tv"; // Your database name

// Connect to MySQL
$conn = new mysqli($host, $user, $pass, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
