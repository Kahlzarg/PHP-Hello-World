<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>PHP Modal & Ajax Test</title>

<head>
<?php
include( "controls/header.php" );
?>
</head>

<body>
<?php
echo "Hello World via PHP!"
?>
<br/>
<input type="button" id="button" value="Mask Toggle" onclick="js.Mask.ShowMask(true);">
<br/>
<input type="button" id="button" value="Submit Ajax" onclick="js.Pages.Index.Ajax();">
<br/>
<div id="ip"></div>
</body>