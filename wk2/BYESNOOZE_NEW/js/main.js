// $('.projectsbtn').on('click', function(e){
// 	e.preventDefault();
// 	window.location.assign("projects.html")
// })

// $('#tabs p'),hide().eq(0).show();
// $('#tabs p:not(:first)').hide();

// $('#tabs-nav li').click(function(e){
// 	e.preventDefault();
// 	$('#tabs p').hide();

// 	$('#tabs-nav.current').removeClass('current');
// 		$(this).addClass('current');
// 		var clicked = $(this).find('a:first').attr('href');

// 		$('#tabs' + clicked).fadeIn('fast');
// 	}).eq(0).addClass('current');

$(function(){
	$('#supBtn').on('click', function(event){
		event.preventDefault();
		$(".overlay")
		.fadeIn()
		.find("#modal")
		.fadeIn();

	});

	$(".close").on("click", function(event){
		event.preventDefault();
		$(".overlay")
		.fadeOut()
		.find("#model")
		.fadeOut();

	});

	console.log("fjieoqjfieofqewq");

	// accirdian for description
	// $("ul .tabs").each(function(){
	// 	var $active , $content, $links = $(this).find('a');
	// 	$active = $($links.filter('[href='+'location.hash'+']')[0] || $links[0]);
	// 	$active.addClass('active');
	// 	$content = $($active[0].hash);
	// 	$links.not($active).each(function(){
	// 		$(this.hash).hide();
	// 	})

		$(".tabs li").click(function(e){
			e.preventDefault();
			console.log("aaaaaaaaaaaa");
			//hide all divs
			$(".des").hide();
			var project = $(this).find('a').attr('data');

			$('#'+project).show();

			// e.preventDefault();
			// $(".brief div").hide();
			// $(".active").removeClass('active');
			// $(this).addClass("active")
			// var $clicked = $(this).find("a:first").attr("href")
			// $(".brief" + $clicked).fadeIn()
			// console.log($clicked);
			// $content.hide();

			// $active = $(this);
			// console.log("blah")
			// $content = $(this.hash);

			// $active.addClass('active');
			// $content.show();

		}).eq(0).addClass("active");

		// Add project

		$('#plus').on('click', function(event){
		event.preventDefault();
		$(".overlay")
		.fadeIn()
		.find("#add-modal")
		.fadeIn();

	});

	$(".close").on("click", function(event){
		event.preventDefault();
		$(".overlay")
		.fadeOut()
		.find("#add-model")
		.fadeOut();

	});
});
















