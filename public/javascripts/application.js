$(document).ready(function(){

	// Initialize the tagit plugin
	$('#tags').tagit({triggerKeys: ['enter', 'comma', 'tab'] });
	

	//change the formatting on the tags to remove editing on page load
	$(".tagit-choice a").html("");
	$(".tagit-choice").css("padding", "2px 6px 3px 4px");
	$(".tagit-new").hide();

	// stop edit form from submitting 
	// add new user submitted tag to list of tags
	// put code to submit tag to database here
	$('#addTagForm').submit(function(e){
           e.preventDefault();
           var tagText = $("#edit_text_field input").val();
	 		$("#tags_div ul").append("<li class=\"tagit-choice\" style=\"padding: 2px 16px 3px 4px\">" + tagText + " <a class=\"tagit-close\">x</a></li>");
	 		$("#edit_text_field input").val("");
	});

	
	
 	
 	// Formatting changes to add editing
 	function toggleEditOn(){
		$(".tagit-choice a").html('x');
		$(".tagit-choice").css("padding","2px 16px 3px 4px");
		$("#edit_text_field").show();
		
		// To add additional formatting on edit, create a css class and put it in addClass below 
		// $(".tags_div").addClass("");

		// If you want to allow typing in the box with the other tags, uncomment the line below
		// $(".tagit-new").show();
 	}


 	// Formatting changes to remove editing
 	function toggleEditOff(){
 		$("#edit_text_field").hide();
		$(".tagit-choice a").html('');
		$(".tagit-choice").css("padding","2px 6px 3px 4px");
		
		// If you added any css class in the toggleEditOn function, remove it here to toggle
		// $(".tags_div").removeClass("");

		// If you added typing in the box with the other tags, uncomment below to toggle
 		// $(".tagit-new").hide();
		
 	}

 	// Toggle and make changes when clicking the edit button
	var toggle_link_location = ".edit_toggle_link";

	$(toggle_link_location).click(function(){
		if ($(toggle_link_location).hasClass('toggle_edit_off')){
			$(toggle_link_location).addClass('toggle_edit_on');
			$(toggle_link_location).removeClass('toggle_edit_off');

			// To re-enable sliding, uncomment the two lines below and the three in the below else statement
			// Also, change the "0" in the setTimeout to 300
			// $("#tags_div").slideUp(300);
			setTimeout(toggleEditOn,0);
			// $("#tags_div").delay(300).slideDown();			
		}
		else {
			$(toggle_link_location).addClass('toggle_edit_off');
			$(toggle_link_location).removeClass('toggle_edit_on');

			// To re-enable sliding, uncomment the two lines below and the three in the below else statement
			// Also, change the "0" in the setTimeout to 300
			// $("#tags_div").slideUp(300);
			setTimeout(toggleEditOff,0);
			// $("#tags_div").delay(300).slideDown();
		}
	});
});


