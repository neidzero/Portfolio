let allBtn = $('header').find('.Btn').find('.allBtn');
let closeBtn = $('aside').children('.asideTop').children('.closeBtn');

let tabBtn = $('aside').children('.tabBtn').children('button');
let menu = $('aside').children('.asideMenu').children('.gnb');

let category = menu.children('li').children('a');
let subMenu = menu.find('.subMenu');

function common(){

    $('a').on('click',function(e){
        e.preventDefault();
    });

    $('button').on('click',function(e){
        e.preventDefault();
    });

    $('aside').find('.closeBtn').on('click',function(){
        $('aside').find('.subMenu').stop().slideUp();
        category.removeClass('active');
    });

    // hWrap > Btn i(allBtn) click>aside left0
    // aside asideTop i(closeBtn) click>aside left-100%

    
    allBtn.on('click',function(){
        $('aside').stop().animate({'left' : 0 });
    });

    closeBtn.on('click',function(){
        $('aside').stop().animate({'left' : '-100%'});
    });

    // headerLogo click > offset().top -> 0 

    let headerLogo = $('header').children('.hWrap').find('.logo');

    headerLogo.on('click',function(){
    $('html, body').stop().animate({'scrollTop' : 0,});
    });

    // gnb > li click : gnb>li>a : active addClass
    category.on('click',function(){

    $(this).parent('li').find('.subMenu').slideToggle();
    $(this).parent('li').siblings().find('.subMenu').slideUp();

    $(this).parent('li').parent('.gnb').siblings('.gnb').find('.subMenu').slideUp();

    $(this).toggleClass('active');
    $(this).parent('li').siblings().children('a').removeClass('active');

    });

    // C3 itemSlide mobileVer slick
    // C3 txtSlide mobileVer slick

    let itemSlide = $('.c3').find('.itemSlide.mobileVer');
    console.log(itemSlide); 

    let prvArrow = $('.c3').find('.prvArrow').children('i');
    let nxtArrow = $('.c3').find('.nxtArrow').children('i');

    let txtSlide = $('.c3').find('.txtSlide.mobileVer');

    itemSlide.slick({
        'infinite' : true,
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'nextArrow' : nxtArrow,
        'prevArrow' : prvArrow,
        'asNavFor' : txtSlide,
    });

    txtSlide.slick({
        'infinite' : true,
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'arrows' : false,
        'asNavFor' : itemSlide,
    });

}

common();
//common func 끝




// mobile func
function mobile(){

    tabBtn.on('click',function(){

    // tabBtn button click>addClass, siblings removeClass
    $(this).addClass('active').siblings().removeClass('active');
    

    // aside ul ->2, 
    // tabBtn button index i > ul eq(i) fadeIn, sibling fadeOut
    
    let i = $(this).index();

    menu.eq(i).stop().fadeIn()
    .siblings().stop().fadeOut();

    menu.eq(i).siblings().find('.subMenu').slideUp();
    menu.eq(i).siblings().find('a').removeClass('active');

    });

    // gnb > li click : gnb>li>a : active addClass
    category.on('click',function(){

    });

}
//mobile func 끝

//pc func
function pc(){

    // PC
    // allBtn click > fadeOut, closeBtn click>allBtn fadeIn

    let pcBtn = $('header').children('.hWrap').children('.Btn').find('.pcVer');
    let pcCloseBtn = $('aside').children('.asideTop').find('.closeBtn');

    pcBtn.on('click',function(){
    $(this).stop().fadeOut();
    });

    pcCloseBtn.on('click',function(){
        pcBtn.stop().fadeIn();
    });

    //c2 name mouseover > addClass active

    let c2Box = $('.c2').children('.c2Wrap').children('.c2Products').children('.box');

    c2Box.on('mouseover',function(){
        $(this).children('.name').addClass('active');
        $(this).siblings().children('.name').removeClass('active');
    }).on('mouseleave',function(){
        $(this).children('.name').removeClass('active');
    });

    
    // promotion img box mouseover > animationName
    // .c4 .promotion .photo1

    let promoPic = $('.c4').children('.promotion').find('.photo');
    promoPic.on('mouseover',function(){
        $(this).css({'animationName' : 'up'});
    }).on('mouseleave',function(){
        $(this).css({'animationName' : 'down'});
    });


    // promotion button mouseover > addClass active
    //.c4 .promotion .txt .loadBtn

    let promoBtn = $('.c4').children('.promotion').find('.loadBtn');
    promoBtn.on('mouseover',function(){
        $(this).addClass('active');
    }).on('mouseleave',function(){
        $(this).removeClass('active');
    });

    
    // c5 loadBtn mouseover > addClass active

    let c5Btn = $('.c5').find('.loadBtn');
    c5Btn.on('mouseover',function(){
        $(this).addClass('active');
    }).on('mouseleave',function(){
        $(this).removeClass('active');
    });

    $('section').on('click',function(){
        $('aside').stop().animate({'left' : '-100%'});
        $('header').find('.allBtn.pcVer').stop().fadeIn();
        $('aside').find('.subMenu').stop().slideUp();
        category.removeClass('active');
    });

}
//pc func 끝 

// react setting

let winWidth = $(window).width();
console.log(winWidth);

//function tablet(){}

//  if(winWidth<768){
//      mobile();}
//         else if(winWidth<1200){
//      tablet();
//  }   else{ pc(); }


if (winWidth < 1200){
    mobile();
} else{
    pc();
}

// resize
$(window).resize(function(){
    let winWidth2 = $(window).width();

    if(winWidth2 < 1200){
        mobile();
    } else{
        setTimeout(function(){
            location.reload();
        },500);
        pc();
    }
});



