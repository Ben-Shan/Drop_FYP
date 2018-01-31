<?php

$user = 'root';
$pass = '';
$db = 'droptestdb';

$db = new mysqli('localhost', $user, $pass, $db)
					or die("Y'all messed up");

echo"Ye, its good, ye";
?>