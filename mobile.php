<?php
$pageTitle="Mobile PHP Page";
$pageJs= true;
$jQueryMobile= true;
include( "controls/header.php" );
?>

<div data-role="page">

	<div data-role="header">
		<h1>Coalesce</h1>
	</div><!-- /header -->
	
<!--
	<div data-role="content">	
		<p>Hello world</p>		
	</div>
<--
	<!-- /content -->
<div data-role="content">
	<ul data-role="listview" data-theme="c">
	<li><a onclick="alert('click');"><img src="http://cdn.dustball.com/disconnect.png" alt="User" class="ui-li-icon">Housekeeping<br/><small>Yesterday</small></a></li>
	<li><a href="acura.html"><img src="http://cdn.dustball.com/disconnect.png" alt="User" class="ui-li-icon">Vault Locations<br/><small>9:42AM 12th May</small></a></li>
	<li><a href="acura.html"><img src="http://cdn.dustball.com/user.png" alt="User" class="ui-li-icon">J. Keppel</a></li>
	<li><a href="acura.html"><img src="http://cdn.dustball.com/user.png" alt="User" class="ui-li-icon">A. Gholipour</a></li>
	<li><a href="acura.html"><img src="http://cdn.dustball.com/user.png" alt="User" class="ui-li-icon">S. Craze</a></li>
	<li><a href="acura.html"><img src="http://cdn.dustball.com/user_add.png" alt="User Add" class="ui-li-icon">Change User</a></li>
	<li><a href="acura.html"><img src="http://cdn.dustball.com/cog.png" alt="Settings" class="ui-li-icon">Settings</a></li>
</ul>
	
<a href="index.html" data-role="button">Link button</a>
</div>	
</div><!-- /page -->

<?php
include( "controls/footer.php" );
?>