<?php
include 'config.php'; // Connect to database

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $comment = htmlspecialchars($_POST['comment']);

    if (!empty($username) && !empty($comment)) {
        $stmt = $conn->prepare("INSERT INTO comments (username, comment) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $comment);
        $stmt->execute();
        $stmt->close();
    }
}

header("Location: index.html"); // Redirect back to the main page
exit();
?>

