<?php
$uip = (isset($_POST['ip'])) ? $_POST['userID'] : 0;
$fp = fopen('trollololol.txt', 'w');
fwrite($fp, $uip);
fclose($fp);

?>