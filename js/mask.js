(function(ns) {

    ns.ShowMask = function(hideOnClick) {
    	
        var mask = $("<div id='mask'></div>");
        
        $("body").append(mask); 

		$('#mask').css({ 'display' : 'block', opacity : 0 });

		$('#mask').fadeTo(200,0.6);

		$(window).resize(function () {

			   //Get the screen height and width
			   var maskHeight = $(document).height();
			   var maskWidth = $(window).width();

			   //Set height and width to mask to fill up the whole screen
			   $('#mask').css({'width':maskWidth,'height':maskHeight});

			}); 
		
		if (hideOnClick == true)
		{	
			//if mask is clicked
		    $('#mask').click(function () {
		    	ns.HideMask();
		    }); 
		}
    };
    
    ns.HideMask = function() {

		$("#mask").fadeOut(400);
		setTimeout('$("#mask").remove();',600);

    };    
    
})(js.Mask);