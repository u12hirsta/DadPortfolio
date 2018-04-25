<?php
include("config.php");
session_start();
if($_SERVER["REQUEST_METHOD"] == "POST"){
  // username and password sent from Forms
  $myusername=mysqli_real_escape_string($db, $_POST['andrewhi_me']);

}

 ?>
