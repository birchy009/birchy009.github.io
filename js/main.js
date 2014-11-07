var $win = $(window);
var $bgSection = $('.bg-section');
var $main = $('.main');
var fadeStart=1 // 1px scroll or less will equiv to 1 opacity
    ,fadeUntil=250 // 250px scroll or more will equiv to 0 opacity
    ,fading = $('.fading');
var $contact = $('.contact-link');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity);
});


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$bgSection.css('background-position', 'center ' + scrollPos/2 + 'px');
});

$win.on('scroll', function () {
    var scrollPos = $win.scrollTop();

    $main.css('margin-top', '-' + scrollPos/2.5 + 'px');
});

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});