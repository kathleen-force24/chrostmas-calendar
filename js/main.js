var app
$(function(){

	LOGIN = function(el){
	    var obj = this;
	    this.el = $(el);

	    this.init = function(){
	    	REMOVEOVERLAY(obj, el);
	    	obj.el.each(function(){
	    		$(this).on("click", 'a', obj.onSkipClick); 
	    	});

	    };
	    this.onSkipClick = function(e){
	    	e.preventDefault();
	    	$('#calendar').removeClass('hidden');
	    	obj.el.addClass('hidden');
	    }
	    this.init();
	};

	REMOVEOVERLAY = function(obj, el){
		var cur = obj.el.find('.overlay').bind('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
		    function(e) {
		    	$(this).remove();
		    	if( obj.el.hasClass('login-screen') ){
		    		obj.el.find('#skip-intro').removeClass('hidden');
		    	}
		});
	}

	INTRO = function(el){
	    var obj = this;
	    this.el = $(el);

	    this.init = function(){
	    	obj.el.each(function(){
	    		$(this).on("click", 'a', obj.onNavClick); 
	    	});
	    };
	    this.onNavClick = function(e){
	    	e.preventDefault();
	    	obj.el.toggleClass('off-screen');
	    }
	    this.init();
	};

	CALENDAR = function(el){
	    var obj = this;
	    this.el = $(el);

	    this.init = function(){
	    	obj.el.each(function(){
	    		$(this).on("click mouseenter mouseleave", 'ul a', obj.onNavClick); 
	    	});
	    };

	    this.onNavClick = function(e){
	    	e.preventDefault();
	    	if(e.type == "mouseenter") {
	    		$(this).addClass('animated tada');
	    	}else if(e.type == "mouseleave") {
	    		$(this).removeClass('tada');
	    	}
	    	else {
	    		$(this).addClass('magictime perspectiveRight');
	    	}
	    }


	    this.init();
	};



	app = {
		init: function(){
			$(window).load(function(){
				$('html, body').removeClass('loading');
				$('#login').removeClass('loading');
			});

			$('.north-pole-sign').on('mouseenter mouseleave', function(e){
				if(e.type == "mouseenter"){
					$(this).addClass('shake');
				}else{
					$(this).removeClass('shake')
				}
			});

			app.login = new LOGIN( $('#login') );
			app.intro = new INTRO( $('#intro') );
			app.calendar = new CALENDAR( $('#calendar') );
		}
	}
	app.init();
});

