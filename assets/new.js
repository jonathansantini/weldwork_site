/*$(document).ready(function(){
  $('.slickDivMain').slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1.2,
    initialSlide: 0.7,
    slidesToScroll: 1.2,
    dots: true,
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true
  });
});*/
$(document).ready(function(){
  var parentElement = document.querySelector('.divCol-41');
  var childElement = document.querySelector('.scrollToMe');
  try {
  parentElement.scrollTop = childElement.offsetTop - parentElement.offsetTop - 100;
  }catch(e){}
  $(".slickNumber").click(function(){
    $(".slickNumber").removeClass("active");
    $(this).addClass("active");
  	let cl = "scrollTo"+$(this).attr("number");
    var parentElementz = document.querySelector('.divCol-41');
    var childElementz = document.querySelector('#'+cl);
    let offz = childElementz.offsetTop - parentElementz.offsetTop - 40;
    $('.divCol-41').animate({scrollTop: offz}, 40);
    //parentElementz.scrollTop = childElementz.offsetTop - parentElementz.offsetTop - 100;
  });
});
$(document).ready(function(){
if ($(window).width() > 1009) {
let i = 1;
let limit = $(".subSlick").attr("blocklimit");
let parentElements = document.querySelector('.divCol-41');
let cls = ""
let childElements = "";
let off = 0;
let inter = setInterval(function(){
  cls = "scrollTo"+i;
  childElements = document.querySelector('#'+cls);
  if (i == limit){
    try {
    off = childElements.offsetTop - parentElements.offsetTop - 100;
    }catch(e){}
    $('.divCol-41').animate({scrollTop: off}, 2000, "easeOutExpo");
  	//parentElements.scrollTop = childElements.offsetTop - parentElements.offsetTop - 100;
    $(".slickNumber").removeClass("active");
    $(".slickNumber-"+i).addClass("active");
    i = 1;
  }else{
    try {
    off = childElements.offsetTop - parentElements.offsetTop - 100;
    }catch(e){}
    $('.divCol-41').animate({scrollTop: off}, 2000, "easeOutExpo");
  	//parentElements.scrollTop = childElements.offsetTop - parentElements.offsetTop - 100;
    $(".slickNumber").removeClass("active");
    $(".slickNumber-"+i).addClass("active");
    i++;
  }
}, 4000);
$(".slickNumber").click(function(){
  clearInterval(inter);
});
}
});
$(document).ready(function(){
  $(".collectionButtonMain").click(function(){
	$('html, body').animate({scrollTop: $(".productImageHolder").first().offset().top}, 2000, "easeOutExpo");
  });
  });
$(document).ready(function(){
  $(".portfolioButtonMain").click(function(){
	$('html, body').animate({scrollTop: $(".galleryHolder").first().offset().top}, 2000, "easeOutExpo");
  });
  });
$(document).ready(function(){
  $(".facilityButtonMain").click(function(){
	$('html, body').animate({scrollTop: $(window).height()}, 2000, "easeOutExpo");
  });
  });
$(document).ready(function(){
if ($(window).width() > 1009) {
const lottieEl = $('.noCursor .lottieDiv');
$(document).on('mousemove', function(e){
  	let top = $(document).scrollTop();
    lottieEl.css({
       left:  e.pageX,
       top:   e.pageY-top
    });
});
$(document).on('scroll', function(e){
  	let top = $(document).scrollTop();
    lottieEl.css({
       left:  e.pageX,
       top:   e.pageY-top
    });
});
}
});

window.addEventListener('load', (event) => {
  if ($(window).width() < 1009) {
  	if ($(".emptyDiv").length > 0) {
  		$(".emptyDiv").css("height",$(".index-sections").children().first().outerHeight()+"px");
  	}
  }
});

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".applyAnimation");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});


window.addEventListener('load', (event) => {
  let initialColor = "";
  let initialBg = "";
  let initialStroke = "";
	$(".imageLink svg").hover(function(){
      initialColor = $(this).find("path").first().attr("stroke");
      if ($(this).find("rect").first().is("[fill]")){
      	initialBg = $(this).find("rect").first().attr("fill");
      }else{
      	initialBg = "transparent";
      }
      if ($(this).find("rect").first().is("[stroke]")){
      initialStroke = $(this).find("rect").first().attr("stroke");
      }else{
      	initialStroke = "transparent";
      }
      if ((initialColor == "#ffffff" || initialColor == "white") && initialBg == "transparent"){
      	$(this).find("path").attr("stroke","#ffffff");
      }
      else if (initialColor == "#ffffff" || initialColor == "white"){
      	$(this).find("path").attr("stroke","#000000");
      }else{
      	$(this).find("path").attr("stroke","#ffffff");
      }
      if (initialBg == "#ffffff" || initialBg == "white" || initialBg == "transparent"){
      	$(this).find("rect").attr("fill","#000000");
      }else{
      	$(this).find("rect").attr("fill","#ffffff");
      }
      if (initialStroke == "transparent"){
        $(this).find("rect").attr("stroke","#000000");
      }
      else if (initialStroke == "#ffffff" || initialStroke == "white"){
      	$(this).find("rect").attr("stroke","#000000");
      }else{
      	$(this).find("rect").attr("stroke","#ffffff");
      }
    }, function() {
        $(this).find("path").attr("stroke",initialColor);
      	$(this).find("rect").attr("fill",initialBg);
      	$(this).find("rect").attr("stroke",initialStroke);
    });
});
