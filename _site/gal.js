$(document).ready(function() {

	$("section").hide();

	$.each($("section"), function(i, item) {
		
			$(item).delay(400*i).fadeIn(800);

	});
});
