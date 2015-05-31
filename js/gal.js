$(document).ready(function() {

	$("section").hide();

	$.each($("section"), function(i, item) {

		$("section").css("visibility", "visible");

		$(item).delay(400*i).fadeIn(800);

	});
});
