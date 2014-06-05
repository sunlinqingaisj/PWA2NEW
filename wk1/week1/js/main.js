
$(document).ready(function(){
	$("#paragraph").click(function(){
	$("#paragraph").hide();
	});

	$("#message").fadeIn(3000);

	alert("Document is ready");

	$("#window").load(function(){
		alert("loaded");
	})

	// $("#clickme").click(function(){
	// 	alert("selectors are great");
	// })

	$("#clickme").click(function(){
		alert("Yea...You have been clicked");
	})

})