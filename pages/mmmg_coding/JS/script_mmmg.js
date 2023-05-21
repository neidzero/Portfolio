
let asideBtn = $('.mobileBtn').children('.asideBtn');
let closeBtn = $('.mobileBtn').children('.closeBtn');
let Btn  = $('.mobileBtn').children('button');
let tabBtn = $('aside').children('.tabBtn').children('button');
let tabMenu = $('aside').children('.tabMenu').children('ul');

let openBook = $('header').children('.hWrap').children('.pcBtn').find('.openBtn');
let closeBook = $('header').children('.hWrap').children('.pcBtn').find('.closeBtn');
let pcBtn = $('header').children('.hWrap').children('.pcBtn').children('div');



console.log(pcBtn);


// common func()
function common(){

    /*공통 */
    $('a').on('click',function(e){
        e.preventDefault();
    });

    
    //tabBtn click > ul fadeIn,Out- COMMON
    
    tabBtn.on('click',function(){
    
        $(this).addClass('active')
        .siblings().removeClass('active');
    
        let i = $(this).index();
    
        tabMenu.eq(i).stop().fadeIn()
        .siblings().stop().fadeOut();
    
        tabMenu.eq(i).siblings().children('li').children('a').removeClass('active');
        tabMenu.eq(i).siblings().children('li').find('.subMenu').stop().slideUp();
    
    }); 
    
    //accordian Menu - COMMON
    
    tabMenu.children('li').children('a').on('click',function(){
        
        $(this).toggleClass('active');
        $(this).parent('li').siblings('li').children('a').removeClass('active');
    
       $(this).parent('li').find('.subMenu').stop().slideToggle();
    
       $(this).parent('li').siblings('li').find('.subMenu').stop().slideUp();
    
    });
    

}

common();


//common func() END

//mobile func()
function mobile(){

    // mobile func

    //asideBtn click > aside left0
    //closeBtn click > aside left -100%

    asideBtn.on('click',function(){

        $('aside').stop().animate({
            'left' : 0,
        });

        $(this).removeClass('active');
        closeBtn.addClass('active');

    });

    closeBtn.on('click',function(){

        $('aside').stop().animate({
            'left' : '-100%'
        });

        $(this).removeClass('active');
        asideBtn.addClass('active');

        tabBtn.eq(0).addClass('active')
        .siblings().removeClass('active');

        tabMenu.eq(0).stop().fadeIn()
        .siblings().stop().fadeOut();

        $('aside').find('.subMenu').stop().slideUp();
        tabMenu.children('li').children('a').removeClass('active');

    });

}
//mobile func() END

//pc func()
function pc(){

    let menu = $('.c2').children('.menuList').children('.menu').find('.pcVer');
    let menuBox = $('.c2').children('.menuList').children('.menu');

    let solidImg = ['img/menulist/solid/2ptSolid_stationery.png', 'img/menulist/solid/2ptSolid_living_pcVer.png', 'img/menulist/solid/2ptSolid_furniture.png'];
    let outlineImg = ['img/menulist/outline/1ptOutline_stationery.png','img/menulist/outline/1ptOutline_living.png','img/menulist/outline/1ptOutline_furniture.png'];

    let btMenuBox = $('.c2').children('.bottomMenu').children('.box');

    let redPot = btMenuBox.find('.redPot');
    let checkBook = btMenuBox.find('.note');
    let checkBox = $('.c2').children('.checkbox');


pcBtn.on('click',function(){
    $(this).removeClass('active')
    .siblings().addClass('active');
});

console.log(openBook);
console.log(closeBook);

openBook.on('click',function(){
    $('aside').stop().animate({
        'left' : 0,
    });
}); 

closeBook.on('click',function(){
    
    $('aside').stop().animate({
        'left' : '-100%'
    });

    tabBtn.eq(0).addClass('active')
    .siblings().removeClass('active');

    tabMenu.eq(0).stop().fadeIn()
    .siblings().stop().fadeOut();

    $('aside').find('.subMenu').stop().slideUp();
    tabMenu.children('li').children('a').removeClass('active');

});


//c2 : attr

    menuBox.on('mouseover',function(){
        let i = $(this).index();
        menu.eq(i).attr('src', solidImg[i]);
    }).on('mouseleave',function(){
        let i = $(this).index();
        menu.eq(i).attr('src', outlineImg[i]);
    }).on('click',function(){
        $(this).children('.obj').css({
            'animationName' : 'up'
        });
    });

    //C2 bottomMenu activeClass

    btMenuBox.on('mouseover',function(){
        $(this).addClass('active');
        $(this).children('h5').addClass('active');
        $(this).children('img').addClass('active');
    }).on('mouseleave',function(){
        $(this).removeClass('active');
        $(this).children('h5').removeClass('active');
        $(this).children('img').removeClass('active');
    });

}
//pc func() END


// REACT SETTING

let winWidth = $(window).width();

if (winWidth < 1200){
    mobile();
} else{
    pc();
}

//resize setting
$(window).resize(function(){
    let winWidth2 = $(window).width();

    if (winWidth2 < 1200){
        mobile();
    } else{
        setTimeout(function(){
            location.reload();
        },500);
        pc();
    }
});

/*

// react setting

let winWidth = $(window).width();


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

*/