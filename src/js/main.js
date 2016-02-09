var MOUSE_CLICK = "click";
var MOUSE_DOWN = "mousedown";
var MOUSE_UP = "mouseup";
var isTouch = false;

if  ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
	MOUSE_CLICK = "touchstart";
	MOUSE_DOWN = "touchstart";
	MOUSE_UP = "touchend";
	isTouch = true;
}

$("#left-btn").on(MOUSE_DOWN,function(){
    $('#wrap').transition({x:'-50%'}, 500);
//    $("#heros-bg").css("background-image","url(assets/images/geleznyak.jpg)");
    $("#heros-bg").fadeIn();
    
    
});
$("#right-btn").on(MOUSE_DOWN,function(){
    $('#wrap').transition({x:'0'}, 500);
    $("#heros-bg").fadeOut();
});

$(".modile__infoDep-like-but").on(MOUSE_DOWN,function(){
    $(".modile__infoDep-change").fadeOut();
    $(".modile__infoDep-after").delay(500).fadeIn();
});

$(".module__tringl_edros").on(MOUSE_DOWN,function(){
    if ($(window).width() <= '768'){
        $('#wrap-map').transition({x:'-33.3333%'}, 500);
        $('#center-party-box').fadeIn();
        $('.wrap-map-bg').fadeIn();
    } else {
        $('#center-party-box').fadeIn();
    }
//    
    
});

$("#center-party-box .btn-close").on(MOUSE_DOWN,function(){
    $('#wrap-map').transition({x:'0'}, 500);
    $('.wrap-map-bg').fadeOut();
});

$("#right-chang-box .btn-back").on(MOUSE_DOWN,function(){
    $('#wrap-map').transition({x:'-33.3333%'}, 500);
});

$(".module__list_party li").on(MOUSE_DOWN,function(){
    var text = $(this).text();
    if ($(window).width() <= '768'){
        $('#wrap-map').transition({x:'-66.6666%'}, 500);
        $('#right-chang-box').fadeIn();
        $('#select-name').text(text);
    } else {
        $('#right-chang-box').fadeIn();
    }
//      
    
});

//$("#right-btn").on(MOUSE_DOWN,function(){
//    $('#wrap').transition({x:'0'}, 500);
//    $("#heros-bg").fadeOut();
//});

var obj = {};

obj.peoples = [];
obj.peoples[0] = {party:"Единая россия",
                  name:"Сергей Железняк",
                  quote:"ОЧЕНЬ ВАЖНО, ЧТОБЫ ЦЕННОСТНЫЕ ОРИЕНТИРЫ, ЛЮБОВЬ К РОДИНЕ, ПАТРИОТИЗМ ФОРМИРОВАЛИСЬ С ДЕТСТВА И БЫЛИ НЕОТЪЕМЛЕМОЙ ЧАСТЬЮ ПРОЦЕССА ВОСПИТАНИЯ И СТАНОВЛЕНИЯ ГРАЖДАНИНА",
                  birthday:"30 ИЮЛЯ 1970 Г. (45 ЛЕТ)",
                  rating:"39",
                  skils:"СМИ ДЕРЖИТ В НАПРЯЖЕНИИ",
                  bg:"assets/images/geleznyak.jpg",
                  photo:"assets/images/face_zeleznyk.jpg",
                  likes:"55000",
                  dislikes:"66000",
                  info:"",
                  profit:[{year:"2011",money:"3434259",area:"392,4",transport:["car","bike"]},
                          {year:"2014",money:"5557259",area:"392,4",transport:["bike"]}]};

obj.peoples[1] = {party:"Единая россия",
                  name:"Кожвеникова Мария",
                  quote:"ОЧЕНЬ ВАЖНО, ЧТОБЫ ЦЕННОСТНЫЕ ОРИЕНТИРЫ, ЛЮБОВЬ К РОДИНЕ, ПАТРИОТИЗМ ФОРМИРОВАЛИСЬ С ДЕТСТВА И БЫЛИ НЕОТЪЕМЛЕМОЙ ЧАСТЬЮ ПРОЦЕССА ВОСПИТАНИЯ И СТАНОВЛЕНИЯ ГРАЖДАНИНА",
                  birthday:"30 ИЮНЯ 1980 Г. (35 ЛЕТ)",
                  rating:"25",
                  skils:"актриса",
                  bg:"assets/images/kozevnikova.jpg",
                  photo:"assets/images/face_kozevnikova.jpg",
                  likes:"55000",
                  dislikes:"66000",
                  info:"",
                  profit:[{year:"2011",money:"3434259",area:"392,4",transport:["car",""]},
                          {year:"2014",money:"5557259",area:"392,4",transport:["car","bike"]}]};

function changeHero(i){
    var party = obj.peoples[i].party;
    var name = obj.peoples[i].name;
    var quote = obj.peoples[i].quote;
    var birthday = obj.peoples[i].birthday;
    var rating = obj.peoples[i].rating;
    var skils = obj.peoples[i].skils;
    var bg = obj.peoples[i].bg;
    var profit = obj.peoples[i].profit;
    
    $("#party-left").delay(1000).fadeOut(
        1000,
        function () {
            $("#party-left").text(party).fadeIn(1000)
        }
    );
    
    $("#quote").delay(1000).fadeOut(
        1000,
        function () {
            $("#quote").text('«'+quote+'»').fadeIn(1000)
        }
    );
    
    $("#left-name").delay(1000).fadeOut(
        1000,
        function () {
            $("#left-name").text(name).fadeIn(1000)
        }
    );
    
    $("#party-right").text(party);
    $("#right-name").text(name);
    $("#birthday").text(birthday);
    $("#rating").text(rating);
    $("#skils").text(skils);
    
    
    
    $("#heros-bg").css("background-image","url("+bg+")");
    
    var htmlPro = "";
        var htmlCap = "";
    
    for(i = 0; i < profit.length; i++){
        
        if(i !== profit.length - 1){
            htmlPro += '<li><span class="year">' + profit[i].year + '</span> <span class="money">' + profit[i].money + '</span> </li>';
            
            var cars = "";
            for (j =0; j < profit[i].transport.length; j++){
                if (profit[i].transport[j] == "car"){
                    cars += '<div class="icon-two-car"> </div>';
                } else if (profit[i].transport[j] == "bike"){
                    cars += '<div class="icon-two-bike"></div>';
                }
            }
    
            htmlCap += '<li><span>' + profit[i].area + '<span><sup>2</sup></span></span>' + cars + '</li>';
        } else {
            htmlPro += '<li class="fix-li"><span class="year">' + profit[i].year + '</span> <span class="money">' + profit[i].money + '</span> </li>';
            
            
            var cars = "";
            for (j =0; j < profit[i].transport.length; j++){
                if (profit[i].transport[j] == "car"){
                    cars += '<div class="icon-two-car"> </div>';
                } else if (profit[i].transport[j] == "bike"){
                    cars += '<div class="icon-two-bike"></div>';
                }
            }
    
            htmlCap += '<li class="fix-li"><span>' + profit[i].area + '<span><sup>2</sup></span></span>' + cars + '</li>';
        }
        
    }
    $("#list-profit").html(htmlPro);
        $("#list-capital").html(htmlCap);
    
}


changeHero(1);


var partyArray = [{party:'единая россия',procent:'46,6'},
                  {party:'справедливая россия',procent:'10'},
                  {party:'кпрф',procent:'12'},
                  {party:'лдпр',procent:'15'}];

for (i = 0; i < partyArray.length; i++){
    $("#party"+i).text(partyArray[i].party);
}

$('#my-button').click(function() {
        var win_w = $(window).width();
        if (win_w < 768) {
            $('#left-menu').removeClass('menu');
            $('#left-menu').addClass('menu_smal');
            $('#left-menu').addClass('menu-open-smal');
        } else {
            $('#left-menu').removeClass('menu_smal');
            $('#left-menu').addClass('menu');
            $('#left-menu').addClass('menu-open');
        }

    });

    $('#btn_close').click(function() {
        var win_w = $(window).width();
        if (win_w < 768) {


            $('#left-menu').removeClass('menu-open-smal');
        } else {

            $('#left-menu').removeClass('menu-open');
        }
    });
    $(window).resize(function() {
        $('#left-menu').removeClass('menu');
        $('#left-menu').removeClass('menu_smal');
        $('#left-menu').addClass('menu');
        $('#left-menu').removeClass('menu-open-smal');
        $('#left-menu').removeClass('menu-open');
    });


    $('#test1').hover(function() {
        $('#test1_on').addClass('display-none');
        $('#test1_hov').removeClass('display-none');
    }, function() {
        $('#test1_on').removeClass('display-none');
        $('#test1_hov').addClass('display-none');

    });
    $('#test2').hover(function() {
        $('#test2_on').addClass('display-none');
        $('#test2_hov').removeClass('display-none');
    }, function() {
        $('#test2_on').removeClass('display-none');
        $('#test2_hov').addClass('display-none');

    });



//$.ajax({
//                url: 'data.json',
//                type: 'GET',
//                dataType: 'json',
//                beforeSend: function() {console.log("before");},  
//                complete: function() {console.log("work");},
//                success: function(obj) {
//                    
//                }});

//$.ajax({
//                url: url,
//                type: 'POST',
//                data: data,
//                dataType: 'json',
//                beforeSend: function() {},  
//                complete: function() {},
//                success: function(obj) {
//                    console.log(obj);
//                    //очищаем контент в форме 
//                    var html = '';
//                    var info_html = '';
//                    if(obj.success){
//                      html += '<h3>'+ obj.place_info.title +'</h3>';
//                      if(obj.place_image){
//                        html += '<div id="myMapCarousel" class="carousel slide col-lg-5 col-md-12" data-ride="carousel">';
//                        html += '<div class="carousel-inner" role="listbox">';
//                        html += '<div class="item active">';
//                        html += '<img src="'+obj.place_image+'" alt="">';
//                        html += '</div>';
//                        html += '</div>';
//                        html += '</div>';
//                        html += '<div class="col-lg-7  col-md-12">';
//                        html += obj.place_info.description;
//                        html += '</div>';
//
//                      }else{
//                        html += '<div class="col-lg-12  col-md-12">';
//                        html += obj.place_info.description;
//                        html += '</div>';
//                      }
//                      console.log(html);
//                      $('.map-popup-content').empty().html(html);
//                      
//                      info_html += '<div class="map-popup-info-center">';
//                      console.log('place_period' + obj.place_info.place_period);
//                      info_html += '<div class="popup-time">';
//                       if(obj.place_info.place_period){
//                        info_html += 'график работы<span>'+ obj.place_info.place_period + ' ' + obj.place_info.place_time+ '</span>';
//                      }
//                      info_html += '</div>';
//                      if(obj.place_info.address){
//                        info_html  += '<div class="popup-adress">адрес<span>Москва,'+ obj.place_info.address +'</span></div>';
//                      }
//                      if(obj.place_info.place_phone){
//                        info_html  += '<div class="popup-hotline">горячая линия<span>'+ obj.place_info.place_phone +'</span></div>';
//                      }
//                      
//                      info_html  += '</div>';
//                       if( parseInt(obj.place_info.type_id) == 17){
//                        info_html  += '<a href="https://pgu.mos.ru/ru/services/link/1056" target="_blank" class="how">как стать участником?</a>';
//                      }
//                      
//                      $('.map-popup-info').empty().html(info_html);
//                      
//                      $('#mapModal').modal('show');
//                        mapModal();
//                    }else{
//                       console.log('не удалось расшарить');
//                    }
//                },
//                error: function(xhr, ajaxOptions, thrownError) {
//                    console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText  + "\r\n" +xhr);
//                } 
//            });



			
		