<?php
$myfile = fopen("bridgeTestConfig.json", "w") or die("Unable to open file!");

$bridgeIP = $_POST['bridgeIP'];
$bridgeURL = $_POST['bridgeURL'];
$username = $_POST['username'];

$text =
"{ \n" .
  '"bridgeIP": ' . '"' . $bridgeIP . '"' . ",\n" .
  '"bridgeURL": ' . '"' .  $bridgeURL . '"' .  ",\n" .
  '"username": ' . '"' .  $username . '"' . "\n" .
"}";

fwrite($myfile, $text);

fclose($myfile);
?>
