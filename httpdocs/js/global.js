$(document).ready(function(){ 
	$("ul.sf-menu").superfish(); 
	
	//if mobile browser, prevent click on parent nav item from redirecting to URL
	if(is_touch_device()) {	
		$('#nav > li > a').attr('href' ,'#');
	}
	
	function is_touch_device() {
	  return !!('ontouchstart' in window);
	}

});

