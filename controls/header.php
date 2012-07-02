<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<?php if ($pageTitle != null) { echo "<title>" . $pageTitle . "</title>";} ?>

<script type="text/javascript" src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>
<?php
//Reads $jQueryMobile, and if set adds the CDN
if ($jQueryMobile == true) { 
echo "<script type=\"text/javascript\" src='http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.js'></script>";
}
?>
<script type="text/javascript" src='js/json2.js'></script>
<script type="text/javascript" src='js/namespaces.js'></script>
<script type="text/javascript" src='js/ajax.js'></script>
<script type="text/javascript" src='js/mask.js'></script>
<script type="text/javascript" src='js/progress.js'></script>
<script type="text/javascript" src='js/timeout.js'></script>
<script type="text/javascript" src='js/exception.js'></script>
<?php
//Reads $pageJs, and if set uses the current php filename to add a js file of the same name in the pages folder
if ($pageJs == true) { 
	$currentUri = $_SERVER["PHP_SELF"];
	$parts = Explode('/', $currentUri);
	$fileName = $parts[count($parts) - 1];
	$fileNameParts = Explode('.', $fileName);
	echo "<script type=\"text/javascript\" src='js/pages/" . $fileNameParts[0] . ".js'></script>";
}
?>

<link type="text/css" href='css/page.css' rel="stylesheet">
<link type="text/css" href='css/mask.css' rel="stylesheet">
<link type="text/css" href='css/progress.css' rel="stylesheet">

<?php
//Reads $pageJs, and if set uses the current php filename to add a js file of the same name in the pages folder
if ($jQueryMobile == true) { 
echo "<link type=\"text/css\" href='http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css' rel=\"stylesheet\">".
"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">";
}
?>
</head>
<body>