(function(ns) {

    ns.ShowProgress = function(msg) {
    	    	
    	if (typeof msg == 'undefined'){
    		msg = "Loading";
    	}
    	
        var progress = $("<div id='progress' class='progress'><br/>" + msg + "...</div>");
        
        $("body").append(progress);
    	
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
               
        //Set the popup window to center
        $('#progress').css('top',  winH/2-$('#progress').height()/2);
        $('#progress').css('left', winW/2-$('#progress').width()/2);
    	$('#progress').fadeIn(1000);
    	ns.CycleElipsis(0);
    };
    
    ns.HideProgress = function(){
    	$("#progress").fadeOut(200);
    	setTimeout('$("#progress").remove();',250);
    };
    
    ns.CycleElipsis = function(pos){

    	if ($('#progress').length > 0) {
    		var text = $('#progress').text();
    		var msg = text.substring(0, text.length - 3);
    		var elipsis = text.substring(text.length - 3, text.length);

    		switch (pos){
    		case 0:
    			elipsis = "<span class='gray'>.</span>..";
    			pos = 1;
    			break;
    		case 1:
    			elipsis = ".<span class='gray'>.</span>.";
    			pos = 2;
    			break;
    		case 2:
    			elipsis = "..<span class='gray'>.</span>";
    			pos = 3;
    			break;
    		case 3:
    			elipsis = "...";
    			pos = 0;
    			break;
    		}
    		$('#progress').html("<br/>" + msg + elipsis);
    		setTimeout('js.Progress.CycleElipsis('+pos+');',150);
    	}
    }; 
    
})(js.Progress);