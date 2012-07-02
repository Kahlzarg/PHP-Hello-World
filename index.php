<?php
$pageTitle="Index PHP Page";
$pageJs= true;
include( "controls/header.php" );
?>
<?php
echo "Hello World via PHP!"
?>
<br/>
<input type="button" id="button" value="Mask Toggle" onclick="js.Mask.ShowMask(true);">
<br/>
<input type="button" id="button" value="Submit Ajax" onclick="js.Pages.Index.Ajax();">
<br/>
<div id="ip"></div>

<?php
include( "controls/footer.php" );
?>