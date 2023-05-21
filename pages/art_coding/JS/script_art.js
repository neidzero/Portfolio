
let scr = $(window).scrollTop();

let oft2 = $('.c2').offset().top;
let oft3 = $('.c3').offset().top;
let oft4 = $('.c4').offset().top;

let menu = $('.asideMenu').children('.menu').children('li');
let mobileNav = $('.mobileNav').children('.box');
let myPage = $('.sidePage').find('.mypage');

let sidePage = $('.sidePage').children('section');
let uploadBtn = $('.sidePage').children('.writing').find('.uploadBtn').find('button');
let backBtn = sidePage.find('.backBtn');

let exBtn = $('.c2').find('.c2Btn').children('button');
let Slide = $('.c2').find('.Slides').find('.exSlide');
let SlideCon = $('.c2').find('.slideContainer');

let nowSlide = $('.c2').find('.nowSlide');
let endSlide = $('.c2').find('.endSlide');
let upcomingSlide = $('.c2').find('.upcomingSlide');


let nowLookBtn = $('.c2').find('.nowSlide').find('.lookBtn');
let descriptPage = $('.extraPage').find('.info').find('section');
let readBtn = descriptPage.find('.list4').find('button');
let needBtn = descriptPage.find('.needBtn').find('button');

let artistSlide =  $('.c3').find('.Slides');

let colorBtn = $('.colorBtn').find('.circle');

//common func

function common(){

    //colorBtn circle mouseover addClass

    colorBtn.on('mouseover',function(){
        $(this).addClass('active');
    }).on('mouseleave',function(){
        $(this).removeClass('active');
    });



    function lightMode(){
        document.documentElement.style.setProperty('--bgimg','url(../img/background/backWhite.jpg)');
        document.documentElement.style.setProperty('--mainColor','#000');
        document.documentElement.style.setProperty('--subColor','#3d3d3d');
        document.documentElement.style.setProperty('--borderColor','#000');
        document.documentElement.style.setProperty('--contrastColor','#fff');
        document.documentElement.style.setProperty('--mainObj','url(../img/main/mainObj_smalllll.png)');
        document.documentElement.style.setProperty('--activeColor','#faf798');

    }

    function darkMode(){
        document.documentElement.style.setProperty('--bgimg','#111');    
        document.documentElement.style.setProperty('--mainColor','#fff');
        document.documentElement.style.setProperty('--subColor','#eee');
        document.documentElement.style.setProperty('--borderColor','#fff');
        document.documentElement.style.setProperty('--contrastColor','#111');
        document.documentElement.style.setProperty('--mainObj','url(../img/main/whiteObj_small.png)');
        document.documentElement.style.setProperty('--activeColor','#806c82');
    }

    //colorBtn

    
    let white = true; 
    let key = 'STATUS';
    let status = localStorage.getItem(key);

    
    if(status != null){
        status = eval(status);
        white = status;
        console.log(white,status);
    }else{
        white = true;
    }


    function paintTheme(){
        white = !white;

        if(white == true){
            $(this).css({
                'animationName' : 'slideLeft',
            });

            lightMode();   

        }else{
            $(this).css({
                'animationName' : 'slideRight',
            });
            darkMode();
        }

        localStorage.setItem(key,white);
    
    }

    function loadTheme(){

        if(white == true){
            $(this).css({
                'animationName' : 'slideLeft',
            });

            lightMode();
            

        }else{
            $(this).css({
                'animationName' : 'slideRight',
            });
            darkMode();
        }
     
    }   



    colorBtn.click(paintTheme);

    loadTheme(); 
   
    //asideMenu click > activeClass , scrollTop
    menu.on('click',function(){
        //addclass (black box) : common
        $(this).addClass('active')
        .siblings().removeClass('active');
    });

    menu.eq(0).on('click',function(){
        //home click > exhibition : common
        $('html,body').stop().animate({
            'scrollTop' : oft2,
        });
    });

    menu.eq(1).on('click',function(){
        //artist click > artist : common
        $('html,body').stop().animate({
            'scrollTop' : oft3,
        });
    });


    menu.eq(4).on('click',function(){
        //review click > review : common
        $('html,body').stop().animate({
            'scrollTop' : oft4,
        });
    });



    //writing page uploadBtn > animate right -100
    uploadBtn.on('click',function(){

        mobileNav.eq(0).addClass('active');
        mobileNav.eq(3).removeClass('active');

        $(this).parent('.uploadBtn').parent('.sideCon').parent('.writing')
        .stop().animate({'right' : '-100%'});

        $('.name').children('input').val('');
        $('.contents').children('textarea').val('');

    });

    
    //backBtn click > sidepage right -100
    backBtn.on('click',function(){
        $(this).parent('.top').parent('section')
        .stop().animate({
            'right' : '-100%'
        });
    });


let exDataNow = [

    {
        title : 'Claude Viallat 개인전',
        artist : 'Claude Viallat',
        gallery : '조현화랑',
        date : '23.03.09-23.04.23',
        image : 'cladue.jpg',
       summary : '조형적이지도, 기하학적이지도, 상징적이지도, 장식적이지도 않은,모든 특성을 갖춘 형태. 프랑스 대표 작가 클로드 비알라의 모호한 패턴이 이번에는 한국 전통 매체인 고요한 한지에 찍힌다.'
       },
   
       {
           title : '친숙한 기이한',
           artist : '금혜원 외 11명',
           gallery : '부산현대미술관',
           date : '22.12.09-23.03.26',
           image : 'familiarbut.jpg',
          summary : '섬뜩함(uncanny) 이라는 개념을 통해 팬더믹 이후 사회 전반에 스며든 불확실성에 주목하는 전시. 불안이 괴롭고 고통스러운 감정임은 부정할 수 없다. 하지만 그것이 전부는 아니라는 것에 방점을 둔다.'
          },
   
          {
           title : 'Enthusiasm:a Waking Mountain',
           artist : '이춘환',
           gallery : '서정아트부산',
           date : '23.03.09-23.04.13',
           image : 'enthusiasm.jpg',
          summary : '이춘환 화백이 지난 20년간 지속해온 산의 기운 연작의 최근 신작들을 두루 살피는 기획전. 산의 기운은 그의 작품세계를 관통하는 미학을 계승하는 동시에 작가의 전체 작품세계를 이해할 때 가장 중요한 시리즈로 꼽을 수 있다.' 
          },
   
          {
           title : '모든것은 서로를 만들어나간다',
           artist : '시민참여전시',
           gallery : '부산시립미술관',
           date : '22.07.15-23.05.07',
           image : 'allthings.jpg',
          summary :  '부산미술을 도시 부산의 출현과 성장의 역사 속에서 새롭게 꿰어보며 소장품을 중심으로 역사 인식과 그 기술 가능성을 실험하는 소장품 기획전. 부산과 미술을 자본주의가 내재한 한계와 모순이 드러나는 장소로 주목하고 그 관계를 살펴보는 것이 전시의 목표이다.'
          },
   
          {
           title : 'The Black Trilogy',
           artist : 'Lalph Gibson',
           gallery : '랄프깁슨사진미술관',
           date : '22.10.01-23.03.31',
           image : 'gibson.jpg',
          summary :'랄프 깁슨의 사진적 특징을 드러내는 대표작이자 그에게 세계적인 명성을 구축해 준 블랙 3부작. 랄프 깁슨의 매혹적인 블랙 3부작 120여 점을 빈티지 젤라틴 실버 프린트로 선보일 예정.'
          },
];

let NowSlideBox = $('.nowSlide .lookBtn').parent('.bottom').parent('.box');


NowSlideBox.click(function(){

    let i = $(this).children('.bottom').children('.lookBtn').data('object-index');
    
    i = parseInt(i);

    let tit = exDataNow[i].title;
    let art = exDataNow[i].artist;
    let gall = exDataNow[i].gallery;
    let date = exDataNow[i].date;
    let img = exDataNow[i].image;

    let url = `img/exhibitions/NOW/small/${img}`;
    let summ = exDataNow[i].summary;

    $('.dataTit').text(tit);
    $('.dataArt').text(art);
    $('.dataGall').text(gall);
    $('.dataDate').text(date);
    $('.dataSumm').text(summ);

    $('.info1 .pic').css({
        'backgroundImage' : `url(${url})`
    });

    $('.info .info1').animate({'right' : 0});

});


$('.nowSlide .lookBtn').click(function(){

    let i = $(this).data('object-index');
        i = parseInt(i);

    let tit = exDataNow[i].title;
    let art = exDataNow[i].artist;
    let gall = exDataNow[i].gallery;
    let date = exDataNow[i].date;
    let img = exDataNow[i].image;

    let url = `img/exhibitions/NOW/small/${img}`;
    let summ = exDataNow[i].summary;

    $('.dataTit').text(tit);
    $('.dataArt').text(art);
    $('.dataGall').text(gall);
    $('.dataDate').text(date);
    $('.dataSumm').text(summ);

    $('.info1 .pic').css({
        'backgroundImage' : `url(${url})`
    });

    $('.info .info1').animate({'right' : 0});

});



let exDataEnd = [
    {
     title : 'British Modern Line',
     artist : '한규화:Han Gyuhwa',
     gallery : '루트갤러리',
     date : '23.02.28-23.03.25',
     image : 'british.jpg',
    summary : '큰 캔버스에 대담한 선과 색상으로 표현하는 한규화 작가만의 독창적인 스타일이 인상적이다. 새롭게 탄생한 이미지와 상징적 사건들이 서로 만나 전혀 다른 의미를 전해주기도 한다. 작가가 자신의 모토로 삼고있는 철학자 비트겐슈타인의 아래 문장에서 작가의 그림을 관통하는 하나의 중요한 개념을 발견할 수 있다.'
    },

    {
        title : 'ICON A:최광렬 개인전',
        artist : '최광렬:Choi Gwangryul',
        gallery : '오브제후드',
        date : '23.03.03-23.03.26',
        image : 'icona.jpg',
       summary : `
       누군가의 우상이자 특정 분야를 대표하는 인물들을 한 자리에 모아둔다면 어떤 풍경이 펼쳐질까?
    강렬한 원색과 형태 그리고 나무에 붉은 색을 칠하는 등 전통적인 색채체계와 회화 기법을 파괴한 
    야수파 작가들의 작품은 현대를 살고 있는 우리에게 여전히 강렬하고 신선한 매력을 선사한다.`
       },

       {
        title : 'Artistart',
        artist : '예비작가 지원전시',
        gallery : '상상마당 부산',
        date : '23.02.28-23.03.26',
        image : 'artistart.jpg',
       summary : `
       <ARTISTART>는 ART(예술), ARTIST(작가), START(시작)의 합성어로 새로운 순간을 맞이한 예술대학 졸업생들이 작가로서 첫걸음을 내딛는 시작을 응원하기 위해 기획되었다.
        최선을 다해 전시를 준비한 64명의 예비 작가들에게 축하의 인사를 전하며 다시 한 번 새로운 시작을 향해 나아갈 젊은날의 잔상들을 소개한다.`
       },

       {
        title : 'Nostalgia of relations',
        artist : '지현:Jihyun',
        gallery : '아이테르',
        date : '23.03.06-23.03.19',
        image : 'nostal.jpg',
       summary : `
       지현 작가는 '관계의 노스텔지어'라는 주제로 작업을 진행했다. 
        경험적 기억과 포스트메모리로서의 영향을 표상화하는 데에 주안점을 두었다.
        우리가 과거의 경험과 연결되어 있는 것들에 대해 그리움을 느끼면서도, 이를 통해 
        우리의 현재와 미래를 보다 긍정적으로 바라볼 수 있는 희망을 갖게 되는 것이다`
       },

       {
        title : 'Find:김이태 개인전',
        artist : '김이태:Kim E Tae',
        gallery : '갤러리수정',
        date : '23.03.03-23.03.19',
        image : 'kimitae.jpg',
       summary : `
       김이태의 ‘FIND’는 무언가를 갈망하고 있는 작가의 마음을 표현한 것이라 생각된다. 내 눈앞이 현재라면 나의 눈에서 멀어질수록 내가 도달할 수 있는 시간의 거리는 더 멀어진다. 그것은 곧 그곳이 내 눈앞의 존재보다 더 미래에 있다는 것을 암시한다. 관광객의 호기심을 충족시켜 주기 위한 
        목적으로 설치된 망원경을 통해 김이태는 미래를 바라본다.`
       },
];

let EndSlideBox = $('.endSlide .lookBtn').parent('.bottom').parent('.box');
    

EndSlideBox.click(function(){  
    let i = $(this).children('.bottom').children('.lookBtn').data('object-index');

    i = parseInt(i);

    let tit = exDataEnd[i].title;
    let art = exDataEnd[i].artist;
    let gall = exDataEnd[i].gallery;
    let date = exDataEnd[i].date;
    let img = exDataEnd[i].image;

    let url = `img/exhibitions/PAST/small/${img}`;
    let summ = exDataEnd[i].summary;

    $('.dataTit').text(tit);
    $('.dataArt').text(art);
    $('.dataGall').text(gall);
    $('.dataDate').text(date);
    $('.dataSumm').text(summ);

    $('.info1 .pic').css({
        'backgroundImage' : `url(${url})`
    });

    $('.info .info1').animate({'right' : 0});

});

    $('.endSlide .lookBtn').click(function(){

        let i = $(this).data('object-index');
            i = parseInt(i);

        let tit = exDataEnd[i].title;
        let art = exDataEnd[i].artist;
        let gall = exDataEnd[i].gallery;
        let date = exDataEnd[i].date;
        let img = exDataEnd[i].image;

        let url = `img/exhibitions/PAST/small/${img}`;
        let summ = exDataEnd[i].summary;
    
        $('.dataTit').text(tit);
        $('.dataArt').text(art);
        $('.dataGall').text(gall);
        $('.dataDate').text(date);
        $('.dataSumm').text(summ);

        $('.info1 .pic').css({
            'backgroundImage' : `url(${url})`
        });

        $('.info .info1').animate({'right' : 0});

    });


    //descriptPage close Btn click > animate right 0
    descriptPage.find('.closeBtn').on('click',function(){
        $(this).parent('.top').parent('section').stop().animate({
            'right' : '-100%',
        });
    });


    //descriptPage readbtn click > slide Down
    readBtn.on('click',function(){
        
        $(this).parent('.title').siblings('.summary').stop().slideToggle();        
        $(this).find('i').toggleClass('active');

        $(this).parent('.title').toggleClass('active');

    });


    needBtn.on('click',function(){

        $('.info').find('section').stop().fadeOut();

        $('.docentPage').stop().animate({
            'right' : 0,
        });
        
        readBtn.parent('.title').siblings('.summary').stop().slideUp();
        readBtn.find('i').removeClass('active');
        readBtn.parent('.title').removeClass('active');


    });



    $('.docentPage').find('.closeBtn').on('click',function(){

        $('.docentPage').stop().animate({
            'right' : '-100%',
        });

    });

    $('.docentPage').find('.confirmBtn').find('button').on('click',function(){

        $('.docentPage').stop().animate({
            'right' : '-100%',
        });
    });

    //docent Page functions

let ticketYear = $('.docentPage').find('.ticketBox').find('.year');
let ticketMonth = $('.docentPage').find('.ticketBox').find('.month');
let ticketDate = $('.docentPage').find('.ticketBox').find('.date');
let ticketName = $('.docentPage').find('.ticketBox').find('.name');
let ticketGallery = $('.docentPage').find('.ticketBox').find('.gal');
let ticketPic = $('.docentPage').find('.ticketBox').find('img');


let Name = $('.docentPage').find('.form1').children('.list').children('div');

Name.on('click',function(){

    $(this).children('span').addClass('active');
    $(this).siblings().children('span').removeClass('active');


    let exName = ['이춘환<br>:Enthusiasm<br>:Waking Mountain','친숙한 기이한','Claude Viallat 개인전'];
    let exGallery = ['부산시립미술관','부산현대미술관','조현화랑'];
    let exPic = ['img/exhibitions/NOW/small/enthusiasm.jpg','img/exhibitions/NOW/small/familiarbut.jpg','img/exhibitions/NOW/small/cladue.jpg'];


    let i = $(this).index();
    
    ticketName.html(exName[i]);
    ticketGallery.text(exGallery[i]);
    ticketPic.attr('src',exPic[i]);

});


$('.list').on('submit',function(e){
    e.preventDefault();

    let year = $(this).find('.year').val();
    let month = $(this).find('.month').val();
    let date = $(this).find('.date').val();

    ticketYear.text(year);
    ticketMonth.text(month);
    ticketDate.text(date);

});

//c3 artist slick slide

    artistSlide.slick({
        'arrows' : false,
        'infinite' : true,
        'autoplay' : true,
        'autoplaySpeed' : 2000,
        'slidesToShow' : 6,
        'responsive' : [
            {
                breakpoint : 1200,
                settings : {
                    'slidesToShow' : 3
                }
            },
            {
            
            }
        ]
    });


}


common();



//mobile func
function mobile(){
    
    //aside functions
    let allBtn = $('.allBtn');
    let closeBtn = $('.asideMenu').find('.closeBtn');


    allBtn.on('click',function(){
        $('.asideMenu').stop().animate({
            'left' : 0,
        });
    });

    closeBtn.on('click',function(){
        $('.asideMenu').stop().animate({
            'left' : '-100%'
        });
    });

    menu.on('click',function(){
        //mobile only
        $('.asideMenu').stop().animate({'left':'-100%'});
    });

    
    menu.eq(2).on('click',function(){

        //mobile : right 0 : mobile
        $('.sidePage').find('.favorite').stop().animate({
            'right' : 0,
        });

        //mobile only
        mobileNav.eq(2).addClass('active')
        .siblings().removeClass('active');

    });

    menu.eq(3).on('click',function(){

        //mobile : right 0 : mobile
        $('.docentPage').stop().animate({
            'right' : 0,
        });

    });

    
    //dockbar functions
    mobileNav.on('click',function(){

        $(this).addClass('active')
        .siblings().removeClass('active');

        let i = $(this).index();



        if(i == 0){
            sidePage.stop().animate({
                'right' : '-100%',
            });
        } else{
            sidePage.eq(i-1).animate({
                'right' : 0,
            });

            sidePage.eq(i-1).siblings().animate({
                'right' : '-100%',
            });
        }

    });

    uploadBtn.on('click',function(){
        //mobile Only
        mobileNav.eq(0).addClass('active')
        .siblings().removeClass('active');

    });

    
    backBtn.on('click',function(){
        //mobileOnly
        mobileNav.eq(0).addClass('active')
        .siblings().removeClass('active');
    });


    
$('.c4').find('.titleBox').find('button').on('click',function(){

    //mobile only
    mobileNav.eq(3).addClass('active')
    .siblings().removeClass('active');
});


$('.c4').find('.review').find('.box6').find('i').on('click',function(){

    //mobile only
    mobileNav.eq(3).addClass('active')
    .siblings().removeClass('active');
});


 //C4 REVIEW

    //mobile : right 0

    $('.c4').find('.titleBox').find('button').on('click',function(){
        $('.sidePage').find('.writing').stop().animate({
            'right' : 0,
        });

    });


    $('.c4').find('.review').find('.box6').find('i').on('click',function(){
        $('.sidePage').find('.writing').stop().animate({
            'right' : 0,
        });

    });


}//mobile func END END END



//pc func
function pc(){

    let oft25 = oft2 / 2 ;

    $(window).on('scroll',function(){

        let nowScr = $(window).scrollTop();
       
        if(nowScr > oft25){

            $('.sidePage').find('.mypage').fadeIn();
            $('.asideMenu').fadeIn();
            $('.colorBtn').fadeIn();

        } else{
            
            $('.sidePage').find('.mypage').fadeOut();
            $('.asideMenu').fadeOut();
            $('.colorBtn').fadeOut();

        }

    });

    if(scr >= 0 && scr < oft25 ){
        $('.sidePage').find('.mypage').css({'display' : 'none'});
        $('.asideMenu').css({'display' : 'none'});
        $('.colorBtn').css({'display' : 'none'});
    } else{
        $('.sidePage').find('.mypage').css({'display' : 'block'})
        $('.asideMenu').css({'display' : 'block'});
        $('.colorBtn').css({'display' : 'block'});
    
    }

    

    menu.eq(2).on('click',function(e){
        e.preventDefault();
        $('.sidePage').find('.favorite').stop().animate({
            'right' : '5%',
        });
    });
    menu.eq(3).on('click',function(e){
        e.preventDefault();

        $('.docentPage').stop().fadeIn();
    });

    menu.on('mouseover',function(){
        $(this).addClass('hover')
        .siblings().removeClass('hover');
    }).on('mouseleave',function(){
        $(this).removeClass('hover');
    });

   $('.sidePage').find('.writing').find('input').val('');


   exBtn.on('mouseover',function(){
    $(this).addClass('hover')
    .siblings().removeClass('hover');
   }).on('mouseleave',function(){
    $(this).removeClass('hover');
   });

   
   
   descriptPage.find('.closeBtn').on('click',function(){
    $(this).parent('.top').parent('section').stop().fadeOut();
    });

    let exDataNow = [

        {
            title : 'Claude Viallat 개인전',
            artist : 'Claude Viallat',
            gallery : '조현화랑',
            date : '23.03.09-23.04.23',
            image : 'cladue.jpg',
           summary : '조형적이지도, 기하학적이지도, 상징적이지도, 장식적이지도 않은,모든 특성을 갖춘 형태. 프랑스 대표 작가 클로드 비알라의 모호한 패턴이 이번에는 한국 전통 매체인 고요한 한지에 찍힌다.'
           },
       
           {
               title : '친숙한 기이한',
               artist : '금혜원 외 11명',
               gallery : '부산현대미술관',
               date : '22.12.09-23.03.26',
               image : 'familiarbut.jpg',
              summary : '섬뜩함(uncanny) 이라는 개념을 통해 팬더믹 이후 사회 전반에 스며든 불확실성에 주목하는 전시. 불안이 괴롭고 고통스러운 감정임은 부정할 수 없다. 하지만 그것이 전부는 아니라는 것에 방점을 둔다.'
              },
       
              {
               title : 'Enthusiasm:a Waking Mountain',
               artist : '이춘환',
               gallery : '서정아트부산',
               date : '23.03.09-23.04.13',
               image : 'enthusiasm.jpg',
              summary : '이춘환 화백이 지난 20년간 지속해온 산의 기운 연작의 최근 신작들을 두루 살피는 기획전. 산의 기운은 그의 작품세계를 관통하는 미학을 계승하는 동시에 작가의 전체 작품세계를 이해할 때 가장 중요한 시리즈로 꼽을 수 있다.' 
              },
       
              {
               title : '모든것은 서로를 만들어나간다',
               artist : '시민참여전시',
               gallery : '부산시립미술관',
               date : '22.07.15-23.05.07',
               image : 'allthings.jpg',
              summary :  '부산미술을 도시 부산의 출현과 성장의 역사 속에서 새롭게 꿰어보며 소장품을 중심으로 역사 인식과 그 기술 가능성을 실험하는 소장품 기획전. 부산과 미술을 자본주의가 내재한 한계와 모순이 드러나는 장소로 주목하고 그 관계를 살펴보는 것이 전시의 목표이다.'
              },
       
              {
               title : 'The Black Trilogy',
               artist : 'Lalph Gibson',
               gallery : '랄프깁슨사진미술관',
               date : '22.10.01-23.03.31',
               image : 'gibson.jpg',
              summary :'랄프 깁슨의 사진적 특징을 드러내는 대표작이자 그에게 세계적인 명성을 구축해 준 블랙 3부작. 랄프 깁슨의 매혹적인 블랙 3부작 120여 점을 빈티지 젤라틴 실버 프린트로 선보일 예정.'
              },
    ];

    
let NowSlideBox = $('.nowSlide .lookBtn').parent('.bottom').parent('.box');


NowSlideBox.click(function(){

    let i = $(this).children('.bottom').children('.lookBtn').data('object-index');
    
    i = parseInt(i);

    let tit = exDataNow[i].title;
    let art = exDataNow[i].artist;
    let gall = exDataNow[i].gallery;
    let date = exDataNow[i].date;
    let img = exDataNow[i].image;

    let url = `img/exhibitions/NOW/small/${img}`;
    let summ = exDataNow[i].summary;

    $('.dataTit').text(tit);
    $('.dataArt').text(art);
    $('.dataGall').text(gall);
    $('.dataDate').text(date);
    $('.dataSumm').text(summ);

    $('.info1 .pic').css({
        'backgroundImage' : `url(${url})`
    });

    $('.info .info1').stop().fadeIn();

});
    
    $('.nowSlide .lookBtn').click(function(){
    
        let i = $(this).data('object-index');
            i = parseInt(i);
    
        let tit = exDataNow[i].title;
        let art = exDataNow[i].artist;
        let gall = exDataNow[i].gallery;
        let date = exDataNow[i].date;
        let img = exDataNow[i].image;
    
        let url = `img/exhibitions/NOW/small/${img}`;
        let summ = exDataNow[i].summary;
    
        $('.dataTit').text(tit);
        $('.dataArt').text(art);
        $('.dataGall').text(gall);
        $('.dataDate').text(date);
        $('.dataSumm').text(summ);
    
        $('.info1 .pic').css({
            'backgroundImage' : `url(${url})`
        });
    
        $('.info .info1').stop().fadeIn();
    
    });

     
let exDataEnd = [
    {
     title : 'British Modern Line',
     artist : '한규화:Han Gyuhwa',
     gallery : '루트갤러리',
     date : '23.02.28-23.03.25',
     image : 'british.jpg',
    summary : '큰 캔버스에 대담한 선과 색상으로 표현하는 한규화 작가만의 독창적인 스타일이 인상적이다. 새롭게 탄생한 이미지와 상징적 사건들이 서로 만나 전혀 다른 의미를 전해주기도 한다. 작가가 자신의 모토로 삼고있는 철학자 비트겐슈타인의 아래 문장에서 작가의 그림을 관통하는 하나의 중요한 개념을 발견할 수 있다.'
    },

    {
        title : 'ICON A:최광렬 개인전',
        artist : '최광렬:Choi Gwangryul',
        gallery : '오브제후드',
        date : '23.03.03-23.03.26',
        image : 'icona.jpg',
       summary : `
       누군가의 우상이자 특정 분야를 대표하는 인물들을 한 자리에 모아둔다면 어떤 풍경이 펼쳐질까?
    강렬한 원색과 형태 그리고 나무에 붉은 색을 칠하는 등 전통적인 색채체계와 회화 기법을 파괴한 
    야수파 작가들의 작품은 현대를 살고 있는 우리에게 여전히 강렬하고 신선한 매력을 선사한다.`
       },

       {
        title : 'Artistart',
        artist : '예비작가 지원전시',
        gallery : '상상마당 부산',
        date : '23.02.28-23.03.26',
        image : 'artistart.jpg',
       summary : `
       <ARTISTART>는 ART(예술), ARTIST(작가), START(시작)의 합성어로 새로운 순간을 맞이한 예술대학 졸업생들이 작가로서 첫걸음을 내딛는 시작을 응원하기 위해 기획되었다.
        최선을 다해 전시를 준비한 64명의 예비 작가들에게 축하의 인사를 전하며 다시 한 번 새로운 시작을 향해 나아갈 젊은날의 잔상들을 소개한다.`
       },

       {
        title : 'Nostalgia of relations',
        artist : '지현:Jihyun',
        gallery : '아이테르',
        date : '23.03.06-23.03.19',
        image : 'nostal.jpg',
       summary : `
       지현 작가는 '관계의 노스텔지어'라는 주제로 작업을 진행했다. 
        경험적 기억과 포스트메모리로서의 영향을 표상화하는 데에 주안점을 두었다.
        우리가 과거의 경험과 연결되어 있는 것들에 대해 그리움을 느끼면서도, 이를 통해 
        우리의 현재와 미래를 보다 긍정적으로 바라볼 수 있는 희망을 갖게 되는 것이다`
       },

       {
        title : 'Find:김이태 개인전',
        artist : '김이태:Kim E Tae',
        gallery : '갤러리수정',
        date : '23.03.03-23.03.19',
        image : 'kimitae.jpg',
       summary : `
       김이태의 ‘FIND’는 무언가를 갈망하고 있는 작가의 마음을 표현한 것이라 생각된다. 내 눈앞이 현재라면 나의 눈에서 멀어질수록 내가 도달할 수 있는 시간의 거리는 더 멀어진다. 그것은 곧 그곳이 내 눈앞의 존재보다 더 미래에 있다는 것을 암시한다. 관광객의 호기심을 충족시켜 주기 위한 
        목적으로 설치된 망원경을 통해 김이태는 미래를 바라본다.`
       },
];


let EndSlideBox = $('.endSlide .lookBtn').parent('.bottom').parent('.box');
    

EndSlideBox.click(function(){  
    let i = $(this).children('.bottom').children('.lookBtn').data('object-index');

    i = parseInt(i);

    let tit = exDataEnd[i].title;
    let art = exDataEnd[i].artist;
    let gall = exDataEnd[i].gallery;
    let date = exDataEnd[i].date;
    let img = exDataEnd[i].image;

    let url = `img/exhibitions/PAST/small/${img}`;
    let summ = exDataEnd[i].summary;

    $('.dataTit').text(tit);
    $('.dataArt').text(art);
    $('.dataGall').text(gall);
    $('.dataDate').text(date);
    $('.dataSumm').text(summ);

    $('.info1 .pic').css({
        'backgroundImage' : `url(${url})`
    });

    $('.info .info1').stop().fadeIn();

});


    $('.endSlide .lookBtn').click(function(){

        let i = $(this).data('object-index');
            i = parseInt(i);

        let tit = exDataEnd[i].title;
        let art = exDataEnd[i].artist;
        let gall = exDataEnd[i].gallery;
        let date = exDataEnd[i].date;
        let img = exDataEnd[i].image;

        let url = `img/exhibitions/PAST/small/${img}`;
        let summ = exDataEnd[i].summary;
    
        $('.dataTit').text(tit);
        $('.dataArt').text(art);
        $('.dataGall').text(gall);
        $('.dataDate').text(date);
        $('.dataSumm').text(summ);

        $('.info1 .pic').css({
            'backgroundImage' : `url(${url})`
        });

        $('.info .info1').stop().fadeIn();

    });

    //needBtn clcik > docentpage fadeIn

    
    needBtn.on('click',function(){
        $('.docentPage').stop().fadeIn();
    });


    //mypage docent click > docentPage fadeIn

    let bookingBtn = myPage.find('.bookingList').children('.booking').find('.box').eq(2);

    bookingBtn.on('click',function(){
        $('.docentPage').stop().fadeIn();
    });

    let docentQBtn = $('.docentPage').find('.service').find('.middleTitle').find('button');
    console.log(docentQBtn);

    docentQBtn.on('click',function(){

        $(this).parent('.middleTitle').toggleClass('active');
        $(this).toggleClass('active');
        $(this).parent('.middleTitle').siblings('.bottom').stop().slideToggle();
    
    });

    //C4 REVIEW

    //pc : right 5%

    $('.c4').find('.titleBox').find('button').on('click',function(){
        $('.sidePage').find('.writing').stop().animate({
            'right' : '5%',
        });

    });


    $('.c4').find('.review').find('.box6').find('i').on('click',function(){
        $('.sidePage').find('.writing').stop().animate({
            'right' : '5%',
        });

    });

    //docentPage
    $('.docentPage').find('.closeBtn').on('click',function(){

        //pc fadeOut
        $('.docentPage').stop().fadeOut();

    });

    $('.docentPage').find('.confirmBtn').find('button').on('click',function(){
        //pc fadeOut
        $('.docentPage').stop().fadeOut();

        $('.docentPage').find('textarea').val('');
        $('.docentPage').find('input').val('');

        menu.eq(0).addClass('active');
        menu.eq(3).removeClass('active');
    });

    let seeyouPop = $('.extraPage').find('.pop');
    
    function showSeeyou(){
        seeyouPop.stop().fadeIn();

        setTimeout(function(){
            seeyouPop.stop().fadeOut();
        },1500);
    }

    upcomingSlide.find('.box').click(function(){
        showSeeyou();
    })
    
}//pc func END END END



//setting - react

let winWidth = $(window).width();

if (winWidth < 1200){
    mobile();
} else{
    pc();
}

//resize

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














