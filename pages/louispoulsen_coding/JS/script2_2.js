// HEADER

$('a').on('click',function(e){
    e.preventDefault();
});

$('button').on('click',function(e){
    e.preventDefault();
});


let Menu = $('header').find('.gnb>li');

Menu.on('mouseover',function(){
    
    $(this).children('.subMenu').stop().slideDown();
    $(this).siblings().children('.subMenu').stop().slideUp();

    $(this).addClass('active').siblings().removeClass('active');

}).on('mouseleave',function(){
    
    $(this).children('.subMenu').stop().slideUp();

    $(this).removeClass('active');

});

$('.subMenu').on('mouseleave',function(){
    $(this).stop().slideUp();
});

// HEADER LOGO 클릭하면 젤 위로 올라가기

let logo = $('header').children('.hWrap').find('.logo');
logo.on('click',function(){
    $('html,body').stop().animate({
        'scrollTop' : 0,
    });
});


let scr = $(window).scrollTop();
let oft2 = $('.c2').offset().top;


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


// ASIDE

let searchBtn = $('header').find('.gnb').find('.searchBtn');

searchBtn.on('click',function(){

    $('aside').find('input').val('');

    $('aside').stop().animate({
        'right' : 0,
    },800);
});

let closeBtn = $('aside').find('.asideBtn');

closeBtn.on('click',function(){
    $('aside').stop().animate({
        'right' : '-100%',
    },800);
});

$('section').on('click',function(){
    $('aside').stop().animate({
        'right' : '-100%',
    },800);
});

// C2-PRODUCT 

// product > slick 

let productSlide = $('.c2').find('.product');
let productName = $('.c2').find('.productName');

productSlide.slick({
    'arrows' : false,
    'infinite' : true,
    centerMode : true,
    slidesToShow : 3,
    'autoplay' : true,
    'autoplaySpeed' : 2000,
    'asNavFor' : productName,
});

// product > hover : span fadeIn

let item = productSlide.find('.item');
item.on('mouseover',function(){
    $(this).find('span').fadeIn();
}).on('mouseleave',function(){
    $(this).find('span').fadeOut();
});


// productName > slick
// product Slide + productName Slide asNavFor


productName.slick({
    'arrows' : false,
    'asNavFor' : productSlide,
    'autoplay' : true,
    'autoplaySpeed' : 2000,
    'asNavFor' : productSlide,
});


// C3-DISPLAY

// C3Btn button mouseover>addClass active
// C3Btn button click>addClass active

let c3Btn = $('.c3').children('.c3Contents').find('.c3Btn').children('button');
let c3RoomTitle = $('.c3').children('.c3RoomTitle').children('h1');
let c3BtnTitle = $('.c3').children('.c3Contents').find('.c3BtnTitle').children('h3');
let c3DisplayImg = $('.c3').children('.c3Contents').find('.c3DisplayImg').children('div');
let c3DisplayTxt = $('.c3').children('.c3Contents').find('.c3DisplayTxt').children('h5');



let i= 0;
let c3Bg = ['#3e3c3a','#596363','#636259','#3f2323','#343e44'];

function Click(q){

        c3Btn.eq(q).addClass('active').siblings().removeClass('active');
        
    // 버튼 index 번호랑 같은 c3RoomTitle fadeIn, 다른거 fadeOut
        c3RoomTitle.eq(q).fadeIn().siblings().fadeOut();
    
    // 버튼 index 번호랑 같은 c3DisplayImg fadeIn, 다른거 fadeOut
        c3DisplayImg.eq(q).fadeIn(300).siblings().stop().fadeOut(300);
    
    // 버튼 index 번호랑 같은 c3Displaytxt fadeIn, 다른놈 fadeOut
        c3DisplayTxt.eq(q).stop().fadeIn().siblings().stop().fadeOut();
    

    // 배경색깔 배열 객체 >>>> 걔 index 번호 c3 bgcolor 바꿔
        $('.c3').css({'backgroundColor' :c3Bg[q]});
    
    // // c3BtnTitle paddingLeft 0, 다른놈들 120px
    
        c3BtnTitle.eq(q).stop().animate({
            'paddingLeft' : 0,
        }).siblings().stop().animate({
            'paddingLeft' : '120px',
        });
        }
    

    setInterval(function(){

        i++;
        let paging = i % 5;
        Click(paging);
        console.log(paging);

        i = paging;

    },3000);
    


c3Btn.on('mouseover',function(){

    $(this).addClass('active').siblings().removeClass('active');
    
}).on('click',function(){

    $(this).addClass('active').siblings().removeClass('active');

    q = $(this).index();
    Click(q);

    i = q;

});

let oft3 = $('.c3').offset().top;

// C3-c3DispalyImg mouseover > scale up + rotate


// C4-GUIDE !!!!!!

let guide = $('.c4').children('.c4Contents').children('.guide');

guide.on('mouseover',function(){
    $(this).children('.txt').stop().fadeIn();
}).on('mouseleave',function(){
    $(this).children('.txt').stop().fadeOut();
});


// C5-JOURNAL

let book = $('.c5').children('.c5Contents').find('.book');
let Bbook = $('.c5').children('.c5Contents').children('.left');


book.on('mouseover',function(){
    $(this).children('span').animate({
        'bottom' : 0,
    });
}).on('mouseleave',function(){
    $(this).children('span').animate({
        'bottom' : '-20%',
    });
});


Bbook.on('mouseover',function(){
    $(this).children('span').animate({
        'bottom' : 0,
    });
}).on('mouseleave',function(){
    $(this).children('span').animate({
        'bottom' : '-20%',
    });
});

let c5Btn = $('.c5').children('.subBox').children('button');

c5Btn.on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});


$('.c4_c5_object').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});
