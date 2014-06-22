$(function(){
	// $("#photo").hover(function{
	// 	var caposition = 267 - $(this).height*2;
	// 	var iconPosition = caposition - 89;
	// 	$("#content").animate({top: caposition + "px"},250);
	// 	$("#icon").animate({top: iconPosition + "px" opacity:1},250);
	// },
	// function(){
	// 	$("#content").animate({top: "1160px"},250);
	// 	$("#icon").animate({top: "25px" opacity:.5},250);
	// })

	$('#photo').hover(function(){
		console.log("blahhhhhhhhhh")
		$("#content").animate({top:"-60px"},250)
					.show();
		$("#icon").animate({top:"-115px;", opacity:1},250)
	},
	function(){
		$("#content").hide();
		$("#icon").animate({top:"-115px;", opacity:.5},250)
	});
})