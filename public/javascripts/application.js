// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function(){

	var availableTags = ["something", "blargh"];

	$('#tags').tagit({triggerKeys: ['enter', 'comma', 'tab'] });
	
	$(".tagit-choice a").html("");
	$(".tagit-choice").css("padding", "2px 6px 3px 4px");
	$(".tagit-new").hide();
	
 	
 	function toggleEditOn(){
 		$(".tagit-new").show();
		$(".tagit-choice a").html('x');
		$(".tags_div").addClass("box");
		$(".tagit-choice").css("padding","2px 16px 3px 4px");
		$("#edit_label").html('<h3>Edit Tags</h3>');
 	}

 	function toggleEditOff(){
 		$(".tagit-new").hide();
		$(".tagit-choice a").html('');
		$(".tags_div").removeClass("box");
		$(".tagit-choice").css("padding","2px 6px 3px 4px");
		$("#edit_label").html('');
 	}


	var toggle_link_location = "#edit_toggle_link";

	$(toggle_link_location).click(function(){
		if ($(toggle_link_location).hasClass('toggle_edit_off')){
			$(toggle_link_location).addClass('toggle_edit_on');
			$(toggle_link_location).removeClass('toggle_edit_off');
			$("#tags_div").slideUp(300);
			setTimeout(toggleEditOn,300);
			$("#tags_div").delay(300).slideDown();			
		}
		else {
			$(toggle_link_location).addClass('toggle_edit_off');
			$(toggle_link_location).removeClass('toggle_edit_on');
			$("#tags_div").slideUp(300);
			setTimeout(toggleEditOff,300);
			$("#tags_div").delay(300).slideDown();
		}
	});
});


