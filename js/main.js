var $win = $(window);
var $bgSection = $('.bg-section');
var $main = $('.main');
var fadeStart=1 // 1px scroll or less will equiv to 1 opacity
    ,fadeUntil=300 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.fading');
var $contact = $('.contact');

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

$win.on('scroll', function () {
    var scrollPos = $win.scrollTop();

    $contact.css('background-position', 'center ' + scrollPos/4 + 'px');
});