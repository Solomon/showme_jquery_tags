// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function(){
	
	

	
	// Toggle Hide Quote Topics



	//var taglist = "<%= escape_javascript(@tags.map(&:name)) %>";
	//console.log(taglist)

	var availableTags = ["something", "blargh"];

	$('#tags').tagit();
	$('#edit_tags').tagit({triggerKeys: ['enter', 'comma', 'tab'] });
	$('#test_tags').tagit({triggerKeys: ['enter', 'comma', 'tab'] });
	$('#demo3').tagit({tagSource: availableTags, triggerKeys: ['enter', 'comma', 'tab']});

	// $('#demo3GetTags').click(function(){showTags($('#demo3').tagit('tags'))});

 //            function showTags(tags){
 //                var string = "Tags\r\n";
 //                    string +="--------\r\n";
 //                for(var i in tags)
 //                string += tags[i]+"\r\n";
 //                alert(string);
 //            }

	// Take out remove tag links and resize javascript

// $(".tagit-choice a").html('');
// $(".tagit-choice").css("padding","2px 6px 3px 4px");


// Add back remove tag links and resize on edit javascript

// $(".tagit-choice a").html('x');
// $(".tagit-choice").css("padding","2px 13px 3px 4px");

var toggle_link_location = "#edit_toggle_link";

$(toggle_link_location).click(function(){
		if ($(toggle_link_location).hasClass('toggle_edit_off')){
			$(toggle_link_location).addClass('toggle_edit_on');
			$(toggle_link_location).removeClass('toggle_edit_off');
			$("#show_tags").slideUp();
			$("#editing_tags").delay(600).slideDown();			
		}
		else {
			$(toggle_link_location).addClass('toggle_edit_off');
			$(toggle_link_location).removeClass('toggle_edit_on');
			$("#editing_tags").slideUp();
			$("#show_tags").delay(600).slideDown();
		}
		});
	});


