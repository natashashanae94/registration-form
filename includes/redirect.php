<p>The form submitted succesfully!.</p>
<p>Click <a href="index.php">here</a> to return to Home page.</p>

<?php
    if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
        $uri = 'https://';
    } else {
        $uri = 'http://';
    }
    
    $uri .= $_SERVER['HTTP_HOST'];
    header('Location: ../index.html');
    exit;
?>