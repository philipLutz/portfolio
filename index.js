// SHOW/HIDE NAV

// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
let delta = 6;
let navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    let st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').fadeOut();
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').fadeIn();
        }
    }

    lastScrollTop = st;
}