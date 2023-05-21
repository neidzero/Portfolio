   
nowSlide.slick({
    'arrows' : false,
    'infinite' : true,
    'autoplay' : true,
    'autoplaySpeed' : 2000,
    'slidesToShow' : 3,
    'responsive' : [
        {
            breakpoint : 1200,
            settings : {
                'slidesToShow' : 1
            }
        },
        {
        
        }
    ]
});

   
   exBtn.on('click',function(e){
        e.preventDefault();
        
        $(this).addClass('active')
        .siblings().removeClass('active');

        let i = $(this).index();

        let slickSetting = {
            'arrows' : false,
            'infinite' : true,
            'autoplay' : true,
            'autoplaySpeed' : 2000,
            'slidesToShow' : 3,
            'responsive' : [
                {
                    breakpoint : 1200,
                    settings : {
                        'slidesToShow' : 1
                    }
                },
            ]
        }

        let thisSlide = SlideCon.eq(i).children('.exSlide');
        console.log(thisSlide)
        
        if(! thisSlide.hasClass('.slick-initialized')){
            thisSlide.addClass('active');
            thisSlide.parent('.slideContainer').siblings().children('.exSlide').removeClass('active');

           thisSlide.slick(slickSetting);
                
            thisSlide.parent().siblings().children('.exSlide').slick('unslick');

        }else{
          
        }

    });
