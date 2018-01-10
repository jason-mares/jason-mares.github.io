///////////////////////////
////////// LAZY LOAD IMAGES
///////////////////////////

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);





///////////////////////////
////////// SMOOTH SCROLLING
///////////////////////////
document.addEventListener("DOMContentLoaded",function(){var e=function(){if("scrollingElement"in document)return document.scrollingElement;var a=document.documentElement,b=a.scrollTop;a.scrollTop=b+1;var c=a.scrollTop;a.scrollTop=b;return c>b?a:document.body}(),h=function(a){var b=e.scrollTop;if(2>a.length)a=-b;else if(a=document.querySelector(a)){a=a.getBoundingClientRect().top;var c=e.scrollHeight-window.innerHeight;a=b+a<c?a:c-b}else a=void 0;if(a)return new Map([["start",b],["delta",a]])},m=function(a){var b=
a.getAttribute("href"),c=h(b);if(c){var d=new Map([["duration",800]]),k=performance.now();requestAnimationFrame(function l(a){d.set("elapsed",a-k);a=d.get("duration");var f=d.get("elapsed"),g=c.get("start"),h=c.get("delta");e.scrollTop=Math.round(h*(-Math.pow(2,-10*f/a)+1)+g);d.get("elapsed")<d.get("duration")?requestAnimationFrame(l):(history.pushState(null,null,b),e.scrollTop=c.get("start")+c.get("delta"))})}},n=function b(c,d){var e=c.item(d);e.addEventListener("click",function(b){b.preventDefault();
m(e)});if(d)return b(c,d-1)},f=document.querySelectorAll("a.scroll"),g=f.length-1;0>g||n(f,g)});




///////////////////////////
/////// STICKY FIXED FOOTER
///////////////////////////

// When the user scrolls the page, execute myFunction 
//window.onscroll = function() {myFunction()};
//
//// Get the header
//var header = document.getElementById("site-nav");
//var wrapper = document.getElementById("wrapper");
//
//// Get the offset position of the navbar
//var sticky = header.offsetTop;
//
//// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    header.classList.add("sticky");
//    wrapper.classList.add("wrapper-padding");
//  } else {
//    header.classList.remove("sticky");
//    wrapper.classList.remove("wrapper-padding");
//  }
//}








///////////////////////////
/////// STICKY FIXED FOOTER
///////////////////////////
//...
/*
		By Osvaldas Valutis, www.osvaldas.info
		Available for use under the MIT License
	*/

	
	;( function ( document, window, index )
	{
		'use strict';

		var elSelector	= '.header',
			element		= document.querySelector( elSelector );

		if( !element ) return true;

		var elHeight		= 0,
			elTop			= 0,
			dHeight			= 0,
			wHeight			= 0,
			wScrollCurrent	= 0,
			wScrollBefore	= 0,
			wScrollDiff		= 0;

		window.addEventListener( 'scroll', function()
		{
			elHeight		= element.offsetHeight;
			dHeight			= document.body.offsetHeight;
			wHeight			= window.innerHeight;
			wScrollCurrent	= window.pageYOffset;
			wScrollDiff		= wScrollBefore - wScrollCurrent;
			elTop			= parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

			if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the bottom
				element.style.top = '0px';

			else if( wScrollDiff > 0 ) // scrolled up; element slides in
				element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';

			else if( wScrollDiff < 0 ) // scrolled down
			{
				if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very top; element slides in
					element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

				else // scrolled down; element slides out
					element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
			}

			wScrollBefore = wScrollCurrent;
		});

	}( document, window, 0 ));


//Grab our current Url
	var url = window.location.toString();
	//Remove anchor from url using the split
	url = url.split('#')[0];

