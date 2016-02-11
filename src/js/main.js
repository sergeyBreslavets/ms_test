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
  
    
});

function showList(){
    if ($(window).width() <= '768'){
        $('#wrap-map').transition({x:'-33.3333%'}, 500);
        $('#center-party-box').fadeIn();
        $('.wrap-map-bg').fadeIn();
    } else {
        $('#center-party-box').fadeIn();
    }
}

$("#center-party-box .btn-close").on(MOUSE_DOWN,function(){
    $('#wrap-map').transition({x:'0'}, 500);
    $('.wrap-map-bg').fadeOut();
});

$("#right-chang-box .btn-back").on(MOUSE_DOWN,function(){
    $('#wrap-map').transition({x:'-33.3333%'}, 500);
});

$("#party_list li").on(MOUSE_DOWN,function(){
    var text = $(this).text();
    if ($(window).width() <= '768'){
        $('#wrap-map').transition({x:'-66.6666%'}, 500);
        $('#right-chang-box').fadeIn();
        $('#select-name').text(text);
    } else {
        $('#right-chang-box').fadeIn();
    }
    console.log(text);
  
});

//$("#right-btn").on(MOUSE_DOWN,function(){
//    $('#wrap').transition({x:'0'}, 500);
//    $("#heros-bg").fadeOut();
//});

function closeAll(){
    $('#right-chang-box').fadeOut();
//    $('#center-party-box').fadeOut();
}


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


var partyArray = [{party:'единая россия',procent:'46,6',list:['Антошкин Николай Тимофеевич','Белых Ирина Викторовна','Волков Данил Владимирович','Выборный Анатолий Борисович','Гончар Николай Николаевич','Жарков Антон Викторович','Железняк Сергей Владимирович','Звагельский Виктор Фридрихович','Исаев Андрей Константинович','Кожевникова Мария Александровна','Крупенников Владимир Александрович','Кузин Сергей Павлович','Никонов Вячеслав Алексеевич','Панина Елена Владимировна','Ресин Владимир Иосифович']},
                  {party:'справедливая россия',procent:'10',list:['Волков Данил Владимирович','Выборный Анатолий Борисович','Гончар Николай Николаевич','Жарков Антон Викторович','Железняк Сергей Владимирович','Звагельский Виктор Фридрихович','Исаев Андрей Константинович','Кожевникова Мария Александровна','Крупенников Владимир Александрович','Кузин Сергей Павлович','Никонов Вячеслав Алексеевич','Панина Елена Владимировна','Ресин Владимир Иосифович']},
                  {party:'кпрф',procent:'12',list:['Антошкин Николай Тимофеевич','Белых Ирина Викторовна','Волков Данил Владимирович','Выборный Анатолий Борисович','Гончар Николай Николаевич','Жарков Антон Викторович']},
                  {party:'лдпр',procent:'15',list:['Антошкин Николай Тимофеевич','Белых Ирина Викторовна','Волков Данил Владимирович','Выборный Анатолий Борисович','Гончар Николай Николаевич','Жарков Антон Викторович','Железняк Сергей Владимирович','Звагельский Виктор Фридрихович','Исаев Андрей Константинович','Кожевникова Мария Александровна','Крупенников Владимир Александрович','Кузин Сергей Павлович','Никонов Вячеслав Алексеевич','Панина Елена Владимировна','Ресин Владимир Иосифович']}];

for (i = 0; i < partyArray.length; i++){
    $("#party"+i).text(partyArray[i].party);
    $("#party"+i).attr('data-val',i);
}

$('#procent').text(partyArray[0].procent);
//против часовой
//function changeTrianglesData(){
//    for (i = 0; i < partyArray.length; i++){
//        var k = $("#party"+i).attr('data-val');
//        k = parseInt(k);
//        console.log(typeof(k));
//        k = k + 1;
//        
//        console.log(k);
//        if ( k > 3 ){
//            k = k - 4;
//            $("#party"+i).text(partyArray[k].party);
//            $("#party"+i).attr('data-val',k);
//        } else {
//            $("#party"+i).text(partyArray[k].party);
//            $("#party"+i).attr('data-val',k);
//        }
//    }
//}

function createLi(e){
    var htmlLi = '';
    for (n = 0; n < partyArray[e].list.length;n++){
        htmlLi += '<li data-id="'+ n +'">' + partyArray[e].list[n] + '</li>';
    }
    $('#party_list').html(htmlLi);
    $("#party_list li").on(MOUSE_DOWN,function(){
        var topVal = $(this).position().top;
        var text = $(this).text();
        if ($(window).width() <= '768'){
            $('#wrap-map').transition({x:'-66.6666%'}, 500);
            $('#right-chang-box').fadeIn();
            $('#select-name').text(text);
        } else {
            $('#right-chang-box').fadeIn();
            topVal = topVal - 240;
            $('.modile__infoDep').transition({y:topVal},500);
        }
    });
}
createLi(0);
//по часовой
function changeTrianglesData(){
    $('#procent').fadeOut();
//    $('#center-party-box').fadeOut();
    for (i = partyArray.length -1; i >= 0; i--){
        var k = $("#party"+i).attr('data-val');
        k = parseInt(k);
        console.log(k);
        k = k - 1;
        
        console.log(k);
        if ( k < 0 ){
            k = k + 4;
            $("#party"+i).text(partyArray[k].party);
            $("#party"+i).attr('data-val',k);
        } else {
            $("#party"+i).text(partyArray[k].party);
            $("#party"+i).attr('data-val',k);
        }
        
    }
    var valProc = $("#party0").attr('data-val');
    valProc = parseInt(valProc);
    $('#procent').delay(300).text(partyArray[valProc].procent).fadeIn();
    createLi(valProc);
    
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







			
		