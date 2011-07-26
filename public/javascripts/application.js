// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function(){
	
	

	
	// Toggle Hide Quote Topics


	$('#tags').tagit();
	$('#edit_tags').tagit({triggerKeys: ['enter', 'comma', 'tab']});
	

	// Take out remove tag links and resize javascript

// $(".tagit-choice a").html('');
// $(".tagit-choice").css("padding","2px 6px 3px 4px");


// Add back remove tag links and resize on edit javascript

// $(".tagit-choice a").html('x');
// $(".tagit-choice").css("padding","2px 13px 3px 4px");

});
