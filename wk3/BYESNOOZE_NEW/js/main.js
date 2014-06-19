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
		.find("#model")
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

	$('#login').on('click', function(event){
		event.preventDefault();

		$(".sin-overlay")
		.fadeIn()
		.find("#sin-modal")
		.fadeIn()
		.find("#signIn")
		.fadeIn();
		

	});

	$(".sin-close").on("click", function(event){
		event.preventDefault();
		$(".sin-overlay")
		.fadeOut()
		.find("#sin-modal")
		.fadeOut();

	});

	// Login php--------------------------------------------
	// $("#sinBtn").click(function(){
	// 	var user = $("#user").val();
	// 	var pass = $("#pass").val();
	// 	console.log("ahhhh~its working")
	// 	$.ajax({
	// 	url:"../xhr/login.php",
	// 	type:"post",
	// 	dataType:"json",
	// 	data:{
	// 		username: user,
	// 		password: pass
	// 	},
	// 	success:function(response){
	// 			if(response.error){
	// 				alert(response.error)
	// 			}else{
	// 				window.location.assign("dash.html")
	// 			};
	// 		}
	// 	});
	// })

	$("#sinBtn").click(function(){
			console.log('blah');
			var username = $('#usernameInput').val();
			var pass = $('#passwordInput').val();

			console.log(username,pass);

			$.ajax({
				url: 'xhr/login.php',
				data:{
					username: username,
					password: pass
				},
				type:'post',
				dataType: 'json',
				success: function(response){
					console.log(response);
					if(response.user){
						console.log('success');
						username = response.user.user_n;
						userId = response.user.id;
						window.location.assign("dash.html")
					}else{
						console.log("invalid username and/or password");
					}
				}
			});

			var checkLogin = function(){
			$.ajax({
				url:'xhr/check_login.php',
				type: 'get',
				dataType: 'json',
				success: function(r){
					if(r.user){
						console.log('logged in');
						username = r.user.user_n;
					}else{
						console.log('try again');
					}
				}
			});
		};
		});

	// log out!!!!!!!!!!!!!!!!!!!!!
	$("#submit").click(function(e){
		e.preventDefault();
		var user = $('#username').val();
		var pass = $('#password').val();
		var email = $('#email').val();

			$.ajax({
				url: 'xhr/register.php',
				data: {
					username: user,
					password: pass,
					email: email,
				},
				type: 'post',
				dataType:'json',
				success: function(response){
					if(response.error){
						console.log('somethings wrong')
					}else{
						console.log('your are registered');
						usernmae = response.user.user_n
						window.location.assign("dash.html")
					}
				}
			});
	})



// accordian for breif description

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
		.find("#add-modal")
		.fadeOut();

	});
});

// check login
// $.getJSON("xhr/check_login.php", function(data){
// 	$.each(data, function(key, value){
// 		$(".userid").html("welcome user:" value.username);
// 	})
// })













