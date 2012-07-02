(function(ns) {
   
    ns.HK = function(){
    	
    	js.Progress.ShowProgress();
    	
    	$('#ip').html('');
    	
        var data = {
            "value":0
        };
        
        js.Ajax.Ajax("ajax.php", "getIP", data, ns.OnAjax);
    };
    
    ns.OnAjax = function(result){
    	js.Progress.HideProgress();
    	//var result = JSON.parse(result);
    	$('#ip').html("IP via Server : " + result.ip);
    };
    
})(js.Pages.Mobile);