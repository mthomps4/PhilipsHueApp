<?php
$myfile = fopen("bridgeTestConfig.json", "w") or die("Unable to open file!");

$bridgeIP = $_POST['bridgeIP'];
$bridgeURL = $_POST['bridgeURL'];
$username = $_POST['username'];

$text =
"{" .
  '"bridgeIP": ' . '"' . $bridgeIP . '"' . "," .
  '"bridgeURL": ' . '"' .  $bridgeURL . '"' .  "," .
  '"username": ' . '"' .  $username . '"' .
"}";

fwrite($myfile, $text);

fclose($myfile);
?>
