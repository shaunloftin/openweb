// Placeholder Animation, Written by Jacob Boldman and Shaun Loftin

$(document).ready(function() {

  var textbox = $('.textbox'),
    captionLength = 0,
    caption = '',
    id = setTimeout(TypingEffect, 1200); //call once and set an Id so it can be cleared


  function TypingEffect() {
    var tag = Math.floor((Math.random() * 8) + 1);

    if (tag == 1) {
      caption = "HTML5"
    }
    if (tag == 2) {
      caption = "CSS3"
    }
    if (tag == 3) {
      caption = "Javascript"
    }
    if (tag == 4) {
      caption = "PHP"
    }
    if (tag == 5) {
      caption = "mobile"
    }
    if (tag == 6) {
      caption = "jQuery"
    }
    if (tag == 7) {
      caption = "Color"
    }
    if (tag == 8) {
      caption = "SEO"
    }

    clearTimeout(id); //clear first clearTimeout(TypingEffect, 600) call
    captionLength = 1; //start at 0
    id = setInterval(type, 100); //call type every 50ms
  }

  function type() {
 //   console.log('type', caption, caption.substring(0, captionLength++));
    textbox.attr("placeholder", caption.substring(0, captionLength++));

    //when finshed typing clear interval and start erasing
    if (captionLength === caption.length + 1) {
   //   console.log('end type');
      clearInterval(id); //clear clearInterval(type, 50) 
      id = setTimeout(ErasingEffect, 1000); //start ErasingEffect call once after delay
    }
  }

  function ErasingEffect() {
   // console.log('ErasingEffect');
    clearTimeout(id); //clear clearTimeout(ErasingEffect, 2000); call 
    captionLength = caption.length; //start at end
    id = setInterval(erase, 100); //call erase every 50ms
  }

  function erase() {
   // console.log('erase');
    textbox.attr("placeholder", caption.substring(0, captionLength--));

    //when finshed erasing clear interval and call type
    if (captionLength < 0) {
   //   console.log('end erase');
      clearInterval(id); //clear clearInterval(erase, 50)
      id = setTimeout(TypingEffect, 1000); //start over
    }
  }

});

// Sticky Header Animation, Written by Shaun Loftin

window.onscroll = function() {stickyHeader()};

var height = (document.body.scrollHeight, document.documentElement.scrollHeight) * 0.8;

function stickyHeader() {
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        document.getElementById('sticky-header').style.opacity= '1';
        document.getElementById('sticky-header').style.zIndex= '11';
    } else {
        document.getElementById('sticky-header').style.opacity= '0';
        document.getElementById('sticky-header').style.zIndex= '-11';
    }
}

// Form Redirect, Written By Shaun Loftin

function redirect() {
  window.location.replace("../index.html");
  return false;
}

// Mobile Menu, Written By Shaun Loftin

$(document).ready(function(){
    $("#menu-open").click(function(){
        $("#mobile-menu").fadeIn(1000);
        $("#menu-close").fadeIn(1000);
        $("#menu-open").fadeOut(1000);
    });
    
    $("#menu-close").click(function(){
        $("#mobile-menu").fadeOut(1000);
        $("#menu-close").fadeOut(1000);
        $("#menu-open").fadeIn(1000);
    });
});

function mobileOpen() { 
    $("#mobile-menu").css('z-index', '11');
    $("#mobile-menu").css('opacity', '1');
    $("#menu-open").css('z-index', '-99');
    $("#menu-close").css('z-index', '11');
    $("header").css('position', 'fixed');
    $("header").css('z-index', '11');
    $("#sticky.header").css('opacity', '0');
}

function mobileClose() { 
    $("#mobile-menu").css('z-index', '-99');
    $("#mobile-menu").css('opacity', '0');
    $("#menu-open").css('z-index', '11');
    $("#menu-close").css('z-index', '-99');
    $("header").css('position', 'absolute');
    $("header").css('z-index', '1');
}

//function mobileOpen() {
//    document.getElementById('mobile-menu').style.zIndex= '11';
//    document.getElementById('menu-open').style.zIndex= '-99';
//    document.getElementById('menu-close').style.zIndex= '11';
//}

//function mobileClose() {
//    document.getElementById('menu-open').style.zIndex= '11';
//    document.getElementById('menu-close').style.zIndex= '-99';
//    document.getElementById('mobile-menu').style.zIndex= '-99';
//}




