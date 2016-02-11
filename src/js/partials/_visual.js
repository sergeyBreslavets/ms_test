var mouse_down = "click";

var time = 500;

var transitions_av = true;
var min_window_h = 1100;
var navbar = $('.navbar-custom'),
	navHeight   = navbar.height(),
    modules = $('.module '),
    windowWidth = Math.max($(window).width(), window.innerWidth),
    navbatTrans;
var visual = {
    init: function() {
        visual.initColorNavbar(navbar);
        visual.navbarCheck(navbar);
        visual.navbarAnimation(navbar);
        visual.moduleInit(); //
        visual.scaleContent();
        
       // document.ontouchmove = function(event) {
            // event.preventDefault();
        //}
        // if (!Modernizr.csstransitions || !Modernizr.cssanimations) {
        //     transitions_av = false;
        //     $.fn.transition = $.fn.animate;
        //     $.fn.transitionStop = $.fn.stop;
        // }

        if (mobile) {
            mouse_down = "touchstart";
        }
		/* ---------------------------------------------- */
		$(document).on(mouse_down,'.section-scroll',function(e){
			e.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);

		});
        $(document).on(mouse_down,'.dropdown-toggle',function(e){
            e.preventDefault();

        });
        


    },
    scrolling: function() {
        visual.navbarAnimation(navbar);
    },
    resize: function() {
        visual.moduleResize();
        visual.scaleContent();
    },
    moduleInit: function() {
        modules.each(function() {
        	/* ---------------------------------------------- /*
			 * Set module backgrounds
			/* ---------------------------------------------- */
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
            /* ---------------------------------------------- /*
			 * Set height module
			/* ---------------------------------------------- */
            if ($(this).hasClass('module--hero')) {
                if ($(window).height() > min_window_h) {
                    $(this).height($(window).height() *0.6);
                } else {
                    $(this).height(min_window_h *0.6);
                }
            }
            /* ---------------------------------------------- /*
			 * Set full-height module
			/* ---------------------------------------------- */
            if ($(this).hasClass('module--full-height')) {
                if ($(window).height() > min_window_h) {
       
                 $(this).css('height', $(window).height());  
                   
                } else {
                    $(this).height(min_window_h );
                }
            }
           
          

             /* ---------------------------------------------- /*
			 * Set parallax module
			/* ---------------------------------------------- */
            if (mobile === true) {
                if ($(this).hasClass('.module--parallax')) {
                    $(this).css({
                        'background-attachment': 'scroll'
                    });
                }
            } else {
                if ($(this).hasClass('.module--parallax')) {
                    $(this).css({
                        'background-attachment': 'fixed'
                    });
                }
            }
        });
    },

    moduleResize: function() {
        visual.moduleInit(); 

    },
    initColorNavbar:function(navbar){
        if ($('.module--initnavbar').attr('data-navbar')) {
            navbar.addClass($('.module--initnavbar').attr('data-navbar'));
        }
    },
    navbarAnimation: function(navbar) {
    	/* ---------------------------------------------- /*
		 * Transparent navbar animation
		/* ---------------------------------------------- */
        var topScroll = $(window).scrollTop();
        if (navbar.length > 0 && navbatTrans !== false) {
            if (topScroll >= navHeight) {
                navbar.removeClass('navbar-transparent');
            } else {
                navbar.addClass('navbar-transparent');
            }
        }

    },
    navbarCheck: function() {
        if (navbar.length > 0 && navbar.hasClass('navbar-transparent')) {
            navbatTrans = true;
        } else {
            navbatTrans = false;
        }
    },
    preloader: function() {
        console.log('preload');
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    },


    scaleContent: function() {}
};


// var mobile = function(){
//     if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//             return true;
//         }
//     else return false
// }

var mobile  = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) mobile  = true;