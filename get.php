<?php

	$u = $_GET['url'];

	// $h = file_get_contents($u);

	$h = file_get_contents($u);
	$data = file($u);

	$s = count($data);

	$html = '';

	echo $h;
?>
