$(function() {
    $('body').css({overflow: 'hidden'});
});

$(window).load(function() {

    //Deactivate loader
    $('.loader-screen').fadeOut();
    $('body').css({overflow: 'auto'}); //restore scrollability

    //BEGIN APP
    var onMobile = $(window).width() < 768;

    /*******************************************
                    NAVIGATION
    *******************************************/
    var nav = $('.navbar');
    var isNavOpen = false;

    //Mobile nav "toggle button"
    var toggleBtnHandler = (function() {

        var openNavBtn = $('.nav-open');
        var closeNavBtn = $('.nav-close');
        var overlay = $('.overlay');

        return function() {
            if (!isNavOpen) {
                openNavBtn.animate({opacity: 0});
                closeNavBtn.animate({opacity: 1});
                $('body').addClass('stop-scrolling');
                overlay.fadeIn();
            }
            else {
                closeNavBtn.animate({opacity: 0});
                openNavBtn.animate({opacity: 1});
                $('body').removeClass('stop-scrolling');
                overlay.fadeOut();
            }
            isNavOpen = !isNavOpen;
        };
    })();

    $('.nav-toggle-btn').click(toggleBtnHandler);

        var navIsSticky = false;

        var navWp = $('.main-header').waypoint(function(dir) {
            if (dir === 'down') {
                navIsSticky = true;
                nav.addClass('navbar-fixed-top navbar-sticky animated slideInDown');
            }
            else {
                navIsSticky = false;
                nav.addClass('animated slideOutUp');
            }
        }, { offset: '-100%' });

        nav.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            if (navIsSticky) {
                nav.removeClass('animated slideInDown slideOutUp');
            }
            else {
                nav.removeClass('navbar-fixed-top navbar-sticky animated slideInDown slideOutUp');
            }
        });

    //Navigation Scroll
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (onMobile && isNavOpen) $('.nav-toggle-btn').click(); //toggle the mobile navigation bar
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    //particles
    particlesJS('main-header',

        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#000000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#792e25"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 300,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 300,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#37b60b",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );


    $('#showcase-container').imagesLoaded(function() {

		var filtrOptions = {
			delay: 25,
			filterOutCss: {
				opacity: 0,
				transform: 'scale(0.75) skewY(20deg)'
			},
			filterInCss: {
				opacity: 1,
				transform: 'scale(1) skewY(0)'
			}
		};

		var filterizd = $('.showcase-container').filterizr(filtrOptions);

        $('.portfolio-nav li').click(function() {
            var item = $(this);

            $('.portfolio-nav li').removeClass('active-tab');
            item.addClass('active-tab');
        });

    });


    //typewriter
    $('.welcome-box p').type(function() {
        $('.welcome-box h1').animate({opacity: 1}, 2000, function() {
            $('.social-nav ul').removeClass('invisible').addClass('animated flipInX');
        });
    }, 70);

    /*******************************************
                    ANIMATIONS
    *******************************************/
    $('.about-me').waypoint(function(dir) {
        $('.feat-bg.bg-me').removeClass('invisible').addClass('animated slideInRight');
    }, {offset: '60%'});
    $('.about-me').waypoint(function(dir) {
        $('.feat-bg.bg-whatido').removeClass('invisible').addClass('animated slideInLeft');
    }, {offset: '30%'});
    $('.about-me').waypoint(function(dir) {
        $('.feat-bg.bg-facts').removeClass('invisible').addClass('animated slideInRight');
    }, {offset: '-5%'});

    $('.tools').waypoint(function(dir) {
        $('.js-tool-logo').removeClass('invisible').addClass('animated zoomIn');
    }, {offset: '40%'});
});
