var li1_flag = 0;
var li2_flag = 0;
var li4_flag = 0;
var pointy1_flag = 0;
var pointy2_flag = 0;
var pointy4_flag = 0;

$(document).ready(function() {
	$("#cat1").click(function() {

		$(".sublinks:not(#sub1)").slideUp(100);
		$(".colorbar:not(#colorbar1)").slideUp(100);
		$(".topli:not(#li1)").css("background-color", "");
		$(".topa:not(#cat1)").css("color", "");
		$(".pointy:not(#pointy1)").hide(); 
		pointy2_flag = 0;
		pointy4_flag = 0;
		li2_flag = 0;
		li4_flag = 0;

		//1
		$("#sub1").slideToggle(300);
		$("#colorbar1").slideToggle(300);
		if (!li1_flag) {
			$("#li1").css("background-color", "#ff0048");
			$("#cat1").css("color", "#fff");
			li1_flag = 1;
			pointy1_flag = 1;
		}
		else {
			$("#li1").css("background-color", "");
			$("#cat1").css("color", "");
			li1_flag = 0;
			pointy1_flag = 0;
		}


	});


	$("#cat2").click(function() {

		$(".sublinks:not(#sub2)").slideUp(100);
		$(".colorbar:not(#colorbar2)").slideUp(100);
		$(".topli:not(#li2)").css("background-color", "");
		$(".topa:not(#cat2)").css("color", "");
		$(".pointy:not(#pointy2)").hide(); 
		pointy1_flag = 0;
		pointy4_flag = 0;
		li1_flag = 0;
		li4_flag = 0;

		//2
		$("#sub2").slideToggle(300);
		$("#colorbar2").slideToggle(300);
		if (!li2_flag) {
			$("#li2").css("background-color", "#0077ff");
			$("#cat2").css("color", "#fff");
			li2_flag = 1; 
			pointy2_flag = 1;
		}
		else {
			$("#li2").css("background-color", "");
			$("#cat2").css("color", "");
			li2_flag = 0;
			pointy2_flag = 0;
		}

	});

	$("#cat4").click(function() {

		$(".sublinks:not(#sub4)").slideUp(100);
		$(".colorbar:not(#colorbar4)").slideUp(100);
		$(".topli:not(#li4)").css("background-color", "");
		$(".topa:not(#cat4)").css("color", "");
		$(".pointy:not(#pointy4)").hide(); 
		pointy1_flag = 0;
		pointy2_flag = 0;
		li1_flag = 0;
		li2_flag = 0;

		//4
		$("#sub4").slideToggle(300);
		$("#colorbar4").slideToggle(300);
		if (!li4_flag) {
			$("#li4").css("background-color", "#ff2a00");
			$("#cat4").css("color", "#fff");
			li4_flag = 1; 
			pointy4_flag = 1;
		}
		else {
			$("#li4").css("background-color", "");
			$("#cat4").css("color", "");
			li4_flag = 0; 
			pointy4_flag = 0;
		}

	});

	//hovers

	//1
	$("#li1").hover(
	function() {
		$("#cat1").css("color", "#fff");
		$("#pointy1").css("display", "inline-block");
		$("#pointy1").show();
	},
	function() {
		if (!pointy1_flag) { $("#pointy1").hide(); $("#cat1").css("color", ""); }
	});

	//2
	$("#li2").hover(
	function() {
		$("#cat2").css("color", "#fff");
		$("#pointy2").css("display", "inline-block");
		$("#pointy2").show();
	},
	function() {
		if (!pointy2_flag) { $("#pointy2").hide(); $("#cat2").css("color", ""); }
	});

	//3
	$("#li3").hover(
	function() {
		$("#cat3").css("color", "#fff");
	},
	function() {
		$("#cat3").css("color", "");
	});

	//4
	$("#li4").hover(
	function() {
		$("#cat4").css("color", "#fff");
		$("#pointy4").css("display", "inline-block");
		$("#pointy4").show();
	},
	function() {
		if (!pointy4_flag) { $("#pointy4").hide(); $("#cat4").css("color", ""); }
	});


});

