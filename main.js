(function (jQuery){
    "use strict";
    jQuery(document).ready(function(){
        function activaTav(pill){
            jQuery(pill).addClass('active show');
        }




        



        $('#home-slider').slick({
            autoplay : true,
            speed : 750,
            lazyload : 'progressive',
            arrows : true,
            dots : true,
            responsive : [
                {
                    breakpoint : 992,
                    settings : {
                        dots : true,
                        arrows : true,
                    }
                }
            ]
        }).slickAnimation();
        $(".slick-nav").on("click touch", function (e){
            e.preventDefault();

            var arrow = $(this);

            if(!arrow.hasClass('animate')){
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }
        });



        jQuery('.favorites-slider').slick({
            dots: true,
            arrow : true,
            infinite : true,
            speed : 300,
            autoplay : true,
            slidesToShow : 4,
            slidesToScroll :1,
            responsive : [
                {
                    breakpoint:1200,
                    settings : {
                        slidesToShow : 4,
                        slidesToScroll : 1,
                        infinite : true,
                        arrows : true,
                        dots : true
                    }
                },
                {
                    breakpoint:768,
                    settings : {
                        slidesToShow : 2,
                        slidesToScroll : 1
                    }
                },
                {
                    breakpoint:480,
                    settings : {
                        slidesToShow : 1,
                        slidesToScroll : 1
                    }
                },
            ]
        });
    });
})(jQuery);