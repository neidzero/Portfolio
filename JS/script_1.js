// projects section 에서는 header txt color : #fff

let oft5 = $('.c5').offset().top; 
// oft 5 : aesop project 시작
let oft6 = $('.c6').offset().top;
let oft7 = $('.c7').offset().top;
let oft8 = $('.c8').offset().top;
let oft7_2 = $('.c7_2').offset().top;
let oft7_3 = $('.c7_3').offset().top;
// oft 8 : gallery 


let oft2 = $('.c2').offset().top; //about me
let oft3 = $('.c3').offset().top; //skills
let oft4 = $('.c4').offset().top; //index section

let oft9 = $('.c9').offset().top; //contact

let logo = $('header').find('.logo');
let gnb = $('header').find('.gnb');

let menuAbout = gnb.find('.1st');
let menuProject = gnb.find('.2nd');
let menuContact = gnb.find('.3rd');


let aesop = $('.c5').offset().top;
let louis = $('.c6').offset().top;
let react = $('.c7').offset().top;
let mmmg = $('.c7_2').offset().top;
let webApp = $('.c7_3').offset().top;

let Projects = [aesop, louis, react, mmmg, webApp];

let galImg = $('.c8').find('.box4');
let viewImg = $('.c8').find('.viewImg');



function common(){

// mousewheel > d<0 : header top -10%, 
// mousewheel > d>0 : header top 0,

$('section:not(.c1)').on('mousewheel',function(e,d){
    if(d>0){
        // header top0
        $('header').stop().animate({
            'top' : 0,
        });
    } else if(d<0){
        // header top-10%
        $('header').stop().animate({
            'top' : '-10%',
        });
    }
});



$(window).scroll(function(){
    let scr = $(window).scrollTop(); 
   
    if(scr >= oft5 && scr <= oft8){
        logo.css({'color' : '#fff'});
        gnb.css({'color' : '#fff'});
    }  else {
        logo.css({'color' : '#385a62'});
        gnb.css({'color' : '#385a62'});
    }


let scrForAnimation = $(window).scrollTop();

if(scrForAnimation >= oft3 && scrForAnimation <= oft4){
    $('.c3').find('.container').addClass('active');
} else{
    $('.c3').find('.container').removeClass('active');
}
});



$('.c5').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

$('.c6').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

$('.c7').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

$('.c7_2').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});


$('.c7_3').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

//Gallery img

galImg.on('click',function(e){
   viewImg.css({'display' : 'block'});
});

viewImg.on('click',function(){
    viewImg.css({'display' : 'none'});
});
}

common();

//common function end✨✨✨


//pc function : navi function / HEADER funtion();

function pc(){
    
// HEADER logo click > main 
logo.on('click',function(){
    $('html,body').stop().animate({
        'scrollTop' : 0
    });
});


// HEADER About click> about
menuAbout.on('click',function(e){
    e.preventDefault();
    $('html,body').stop().animate({
        'scrollTop' : oft2,
    });
});


// HEADER Projects click>index
menuProject.on('click',function(e){
    e.preventDefault();
    $('html,body').stop().animate({
        'scrollTop' : oft4,
    });
});

// HEADER Contact click > contact
menuContact.on('click',function(e){
    e.preventDefault();
    $('html,body').stop().animate({
        'scrollTop' : oft9,
    });
});




$('.navi').find('span').on('mouseover',function(){


    $(this).parent('.navBtn').addClass('active');
    $(this).parent().siblings().removeClass('active');


    $(this).siblings().children('h5').animate({
        'right' : 0,
    });

    $(this).parent().siblings().find('h5').animate({
        'right' : '-100%',
    });

});


$('.navi').find('span').on('click',function(){

    $(this).addClass('active')
    .parent().siblings().children('span').removeClass('active');

    $(this).siblings().children('h5').animate({
        'right' : 0,
    });

    $(this).parent().siblings().find('h5').animate({
        'right' : '-100%',
    });

    let i = $(this).parent().index();
    $('html,body').animate({
        'scrollTop' : Projects[i]});
        
});


$(window).scroll(function(){

    let scrForNavi = $(window).scrollTop();

    if(scrForNavi >= oft5 && scrForNavi <= oft8){

        $('.navi').css({
            'opacity' : 1,
        });

        if(scrForNavi >= oft5 && scrForNavi < oft6){

            $('.navi').children('.navBtn').eq(0).addClass('active');
            $('.navi').children('.navBtn').eq(0).siblings().removeClass('active');
    

        } else if (scrForNavi >= oft6 && scrForNavi < oft7){

            $('.navi').children('.navBtn').eq(1).addClass('active');
            $('.navi').children('.navBtn').eq(1).siblings().removeClass('active');

        } else if (scrForNavi >= oft7 && scrForNavi < oft7_2){

            $('.navi').children('.navBtn').eq(2).addClass('active');
            $('.navi').children('.navBtn').eq(2).siblings().removeClass('active');

        } else if (scrForNavi >= oft7_2 && scrForNavi < oft7_3){
            $('.navi').children('.navBtn').eq(3).addClass('active');
            $('.navi').children('.navBtn').eq(3).siblings().removeClass('active');
        } else if (scrForNavi >= oft7_3){
            $('.navi').children('.navBtn').eq(4).addClass('active');
            $('.navi').children('.navBtn').eq(4).siblings().removeClass('active');
        }

    } else if (scrForNavi < oft5 || scrForNavi > oft8){
        $('.navi').css({
            'opacity' : 0,
        });
    }
});
}
//pc func end ✨✨✨✨✨

function mobile(){
    
//asideBtn click > left 0

$('.asideBtn').click(function(){

    $('aside').stop().animate({
        'left' : '0',
    });

});

//closeBtn click > left -100

$('.closeBtn').click(function(){
    $('aside').stop().animate({
        'left' : '-100%',
    });
});


//topMenu li click > left 0 , scrTop

let topMenu = $('aside').find('.topMenu');

topMenu.find('a').on('click',function(e){
    e.preventDefault();
});

let oftList = [oft2, oft4];

topMenu.children('li').click(function(){
    let i = $(this).index();

    if (i < 2){
        
        $('aside').stop().animate({
            'left' : '-100%',
        });

        $('html,body').stop().animate({
            'scrollTop' : oftList[i]
        });
    } else{
        $(this).find('.contactBtn').toggleClass('active');
        $(this).find('.subMenu').stop().slideToggle();
    }

});


let infoMiddle = $('.c2').find('.c2_middle').find('.title');
let infoBottom = $('.c2').find('.c2_bottom').find('.title');

infoMiddle.on('click',function(){
    
    $(this).siblings('.contents').slideToggle();
    $(this).toggleClass('active');

    $(this).parent().siblings().find('.contents').stop().slideUp();
    $(this).parent().siblings().find('.title').removeClass('active');

    $('.c2_bottom').find('.contents').stop().slideUp();
    infoBottom.removeClass('active');

});



infoBottom.on('click',function(){
     
    $(this).siblings('.contents').slideToggle();
    $(this).toggleClass('active');

    $(this).parent().siblings().find('.contents').stop().slideUp();
    $(this).parent().siblings().find('.title').removeClass('active');

    $('.c2_middle').find('.contents').stop().slideUp();
    infoMiddle.removeClass('active');
});


// projects~gallery : asieBtn color #fff

$(window).scroll(function(){

    let scrForaside = $(window).scrollTop();
    //oft5, oft9

    if(scrForaside >= oft5 && scrForaside < oft9){
        $('.asideBtn').css({
            'color' : '#fff',
            'borderColor' : '#fff',
        });
    } else{
        $('.asideBtn').css({
            'color' : '#617475',
            'borderColor' : '#385a62',
        });
    }

});



}//mobile func() end 🐹🐹🐹🐹


//🐹 Responsive Setting

let wW = $(window).width();

if(wW < 1200){
    mobile();
} else{
    pc();
}

//resize
$(window).resize(function(){
    let wW2 = $(window).width();
    if(wW2 < 1200){
        mobile();
    } else{
        setTimeout(function(){
            location.reload();
        },500);
        pc();
    }
});
