$(function() {
	//header_box
	$('.nav_open').click(function() {
		$(this).hide();
		$('.nav_close').show();
		$('header').animate({'left' : '0'});
	});
	$('.nav_close').click(function() {
		$(this).hide();
		$('.nav_open').show();
		$('header').animate({'left' : '-250px'});
	});
	// navigation
	$('header li').click(function() {
		$('header').animate({'left' : '-250px'});
		$('.nav_open').show();
		$('.nav_close').hide();
	});

	//오른쪽 메뉴
	$('#aside_gnb .tabs button').click(function() {
		$('#aside_gnb').animate({'right' : '-400px'})
		var n = $(this).attr('class').slice(-1);
		var pos = 0;
		switch(n) {
			case '1' : pos = -400; break;
			case '2' : pos = 0; break;
		}
		$('#aside_gnb .cont2').animate({
			'margin-left' : pos
		})
	})

	var state = 'close', aside_pos = -800;
	$('#aside_gnb .menu_trigger').click(function() {
		if(state == 'close') {//닫힌
			aside_pos = -400; state = 'open';			
		}
		else {//열린
			aside_pos = -800; state = 'close';
		}
		$('#aside_gnb').animate({'right' : aside_pos})
	})
	$('#aside_gnb .cont2 dt').click(function() {
		$('#aside_gnb .cont2 dd').stop().animate({'height' : '0'})
		$(this).nextUntil('dt').stop().animate({'height' : '50px'})
	})

	// Portfolio 탭메뉴
	/*
	$('.tab1').click(function() {
		$('.cont').hide();
		$('.web_pf').show();
		$('.tabs li').css({
			'background' : '#FFF', 'color' : '#23466A'
		});
		$(this).css({
			'background' : '#23466A', 'color' : '#FFF'
		})
	});
	$('.tab2').click(function() {
		$('.cont').hide();
		$('.uiux_pf').show();
		$('.tabs li').css({
			'background' : '#FFF', 'color' : '#23466A'
		});
		$(this).css({
			'background' : '#23466A', 'color' : '#FFF'
		})
	});
	$('.tab3').click(function() {
		$('.cont').hide();
		$('.visual_pf').show();
		$('.tabs li').css({
			'background' : '#FFF', 'color' : '#23466A'
		});
		$(this).css({
			'background' : '#23466A', 'color' : '#FFF'
		});
	});*/
	$('.tabs li').click(function() {
		//alert($(this).index()) 0, 1, 2
			
		$('.tabs li').css({
			'background' : '#FFF', 'color' : '#23466A'
		});
		$(this).css({
			'background' : '#23466A', 'color' : '#FFF'
		});
		$('.cont').hide();
		$('.cont').eq($(this).index()).show();
	});


		
	//console.log($('.web_pf li').width())
	
});//ready()
