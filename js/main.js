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

	    }
	    this.init();
	};

	REMOVEOVERLAY = function(obj, el){
		var cur = obj.el.find('.overlay').bind('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
		    function(e) {
		    	$(this).remove();
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


	app = {
		init: function(){
			$(window).load(function(){
				$('html, body').removeClass('loading');
				$('#login').removeClass('loading');
			});
			app.login = new LOGIN( $('#login') );
			app.intro = new INTRO( $('#intro') );
		}
	}
	app.init();
});

