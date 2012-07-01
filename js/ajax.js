(function(ns) {
	
	ns.LastAjaxCall = null; 

	ns.LastAjaxSucess = null; 
	
	ns.Ajax = function(url, action, data, callback, isAsync) {

	    js.Ajax.LastAjaxCall = url + ":" + action;

	    document.body.style.cursor = "wait";

	    //Disable Timeout
	    js.TimeOut.Disable();

	    /*
	    //DO NOT DELETE: AJAX ERROR 500 AUTH FIX
	    var cookie = js.Cookie.GetCookie('Login');
	    if (cookie > 0) {
	    	js.Cookie.DeleteCookie('Login');
	        if (window.ieversion != null && $global.ClearAuthenticationCache)
	        { document.execCommand("ClearAuthenticationCache", false); }
	    }
	    */
	    
	    /*
	    if (url.indexOf("/") == -1) {
	        url = location.pathname + "/" + url;
	    }
	    */
	    
	    
	    if (jQuery.isFunction(data)) {
	        callback = data;
	        data = {'action':action};
	    }
	    else {
	    	data['action'] = action;
	    }

	    // Allow some page method calls to be synchronus
	    if (isAsync == undefined) { isAsync = true; }

	    //Wraps success in handler so if error, nothing is fired
	    var onSuccess = function(resp, textS, xhr) {

	        document.body.style.cursor = "default";

	        if (xhr.status) {
	            callback(resp, textS, xhr);
	        } else {
	            nothing();
	        }
	    };

	    window.ajaxRequest = $.ajax({
	        type: "POST",
	        url: url,
	        data: data,
	        /*contentType: "application/json; charset=utf-8",*/
	        dataType: "json",
	        success: onSuccess,
	        error: js.Ajax.AjaxFailed,
	        complete:js.Ajax.AjaxComplete/*,
	        async: isAsync,
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader('Binary', '1');
	        }*/
	    });
    }; 
	/*
	ns.AjaxInit = function() {
		
		$.ajaxSetup({
		    type: "POST",
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    global: false
		});

    };    
    */
	ns.AjaxFailed = function(XMLHttpRequest, ajaxOptions, thrownError) {
		js.Progress.HideProgress();
		js.Exception.Log('Ajax Failed: ' + thrownError);		
	};
	
	ns.AjaxComplete = function(XMLHttpRequest, text) {

	    js.Ajax.LastAjaxSucess = js.Ajax.LastAjaxCall;

	    document.body.style.cursor = "default";

	    //Reset Timeout on Ajax Call
	    js.TimeOut.Reset();

	    if (XMLHttpRequest.responseText == '') {
	    	js.Exception.Log("Empty Ajax Response");
	    }
	};
    
})(js.Ajax);