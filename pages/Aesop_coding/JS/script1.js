
// HEADER

let onOff = true;
$('.allBtn').click(function(){

    onOff = !onOff

    // active class toggle
    $(this).toggleClass('active');

    //aside right 0
    if(onOff == false){
        // right 0
        $('aside').animate({
            'right' : 0,
        });
    } else {
        // right -100
        $('aside').animate({
            'right' : '-100%'
        });
    }
});

let headerLogo = $('header').find('.headerLogo');
headerLogo.click(function(){
    $('html, body').stop().animate({
        'scrollTop' : 0,
    });
});

let headerMenu = $('header').find('.headerMenu').children();
headerMenu.click(function(e){
    e.preventDefault();
});

// ASIDE

let gnb = $('aside .gnb>li');

gnb.on('mouseover',function(){
    $(this).children('a').addClass('on');
});

gnb.on('mouseleave',function(){
    $(this).children('a').removeClass('on');
});

gnb.on('click',function(e){
    e.preventDefault();
    
    $(this).children('a').addClass('click');
    $(this).siblings().children('a').removeClass('click');

    let i = $(this).index();
    let subMenu = $('.asideWrap').children('.subMenu');
    let bg = ['#f2f1e9','#efe7d4','#e4e8dd','#f0eeed','#f2e9dd','#f0eeed','#e5ded6','#f2f1e9','#f2f1e9'];
    let bgImg = ['img/popular/bg1.jpg','img/popular/bg2.jpg','img/popular/hair.jpg','img/popular/fragnance.jpg','img/background/home.jpg','img/background/glass.jpg','img/background/mogo.jpg','img/popular/bg1.jpg','img/background/brown.jpeg'];

    subMenu.children().eq(i).stop().fadeIn()
    .siblings().stop().fadeOut();

    $('.asideWrap').css({
        'backgroundColor' : bg[i],
    });

    $('.asideWrap').children('.bgImg').find('img').attr('src',bgImg[i]);
});

$(window).scroll(function(){
    let scr = $(window).scrollTop();
    let oft2 = $('.c2').offset().top;

    if(scr >= oft2){
        $('.c1').find('.mainLogo').css({
            'animationName' : 'unset',
        });
    } else if(scr == 0){
        $('.c1').find('.mainLogo').css({
            'animationName' : 'fade',
        });
    }
});

// C2 - ProductSlide

let productSlide = $('.c2 .productSlide').find('a');
productSlide.on('click',function(e){
    e.preventDefault();
});

$('.c2 .productSlide').slick({
    'autoplay' : true,
    'autoplaySpeed' : 2500,
    'arrows' : false,
    'slidesToShow' : 4,
    'slidesToScroll' : 1,
    'asNavFor' : '.txtBox',
}).on('afterChange',function(s,c){
    let i = c.currentSlide;
    let prvSlid = 0;

    if( i != 0 ){
    prvSlid = i - 1;
    }else{ 
    prvSlid = 5;
    }

    $('.bgSlide').children().fadeOut();
    $('.bgSlide').children().eq(i).fadeIn();
}); 

$('.txtBox').slick({
    'autoplay' : true,
    'autoplaySpeed' : 2500,
    'arrows' : false,
    'slidesToShow' : 1,
    'asNavFor' : '.productSlide',
    'fade' : true,
});


// C3 - Philosophy 

$(window).scroll(function(){
    let scr = $(window).scrollTop();
    let oft3 = $('.c3').offset().top;
    let oft4 = $('.c4').offset().top;

    if(scr >= oft3 && scr < oft4){
        $('.c3 .box').fadeIn(500);
        $('.c3').addClass('active');
    } else {
        $('.c3 .box').fadeOut(500);
        $('.c3').removeClass('active');
    }
});

// C4 - Store

let storeSlide = $('.c4 .storeSlide');
storeSlide.slick({
    'arrows' : false,
    'asNavFor' : '.txtSlide',
    'autoplay' : true,
    'autoplaySpeed' : 3000,
});

let txtSlide = $('.c4 .TXT').find('.txtSlide');
let nextBtn = $('.c4 .TXT').children('.txtSlideBtn').children('.next');
let prevBtn = $('.c4 .TXT').children('.txtSlideBtn').children('.prev');

txtSlide.slick({
    'asNavFor' : '.storeSlide',
    'nextArrow' : nextBtn,
    'prevArrow' : prevBtn,
    'autoplay' : true,
    'autoplaySpeed' : 3000,
});

// Footer

$('.fWrap').find('a').click(function(e){
    e.preventDefault();
});