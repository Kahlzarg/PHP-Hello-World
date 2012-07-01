<?php

sleep(2);

if(isset($_POST['action']) && !empty($_POST['action'])) {

	$action = $_POST['action'];
	
	switch($action) {
		case 'getIP' : $data['ip'] = getIP();break;
		// ...etc...
	}
	
	//echo json_encode(array('data' => $data));
	echo json_encode($data);
}


function getIP()
{

	if (!empty($_SERVER['HTTP_CLIENT_IP']))
	{
		$ip=$_SERVER['HTTP_CLIENT_IP'];
	}
	elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
	{
		$ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
	}
	else
	{
		$ip=$_SERVER['REMOTE_ADDR'];
	}
	return $ip;
}

?>