<?php


	header('Content-Description: File Transfer');
	header('Content-Type: application/octet-stream');
	header('Content-Disposition: attachment; filename="dl.html"');
	header('Expires: 0');
	header('Cache-Control: must-revalidate');
	header('Pragma: public');
	// header('Content-Length: ' . filesize($file));
	echo "<html>" . $_POST['html'] . "</html>";
	exit;

?>
