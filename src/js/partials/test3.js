$(function() {
    var excellent = $('#excellent');
    var well = $('#well');
    var bad = $('#bad');
    var boxid = $('#sobit-box');
    var allsob = $('#sobit-box div ');
    var connectClass = '.module-connect';
    var addClass = 'module__card-inbox';
    var btnsol = $('#solution');


    boxid.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            remClassToElInBox();
        }
    });

    excellent.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
        }
    });
    well.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
        }
    });
    bad.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
        }
    });


    function addClassToElInBox(part) {
        var list = $(part).sortable("toArray");
        for (var i = 0; i < list.length; i++) {
            var id = list[i];
            var el = document.getElementById(id);
            if ($(el).hasClass(addClass) == false) {
                $(el).addClass(addClass);
            }
        };
        showbtn();
    }

    function remClassToElInBox() {
        var list = boxid.sortable("toArray");
        for (var i = 0; i < list.length; i++) {
            var id = list[i];
            var el = document.getElementById(id);
            if ($(el).hasClass(addClass) == true) {
                $(el).removeClass(addClass);
            }
        };
    }

    function showbtn() {
        var list = boxid.sortable("toArray");
        if (list.length == 0) {
            btnsol.removeClass('hidden');

        }
    }

    /*получить значение id в каждой ячейке */
    // 
    //  excellent.sortable("toArray"));
    //  
    // 
});


if (mobile === true) {
    $('#help_scr').removeClass('hidden');
}
var MOUSE_CLICK = "click";
var MOUSE_DOWN = "mousedown";
var MOUSE_UP = "mouseup";
var isTouch = false;

if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) {
    MOUSE_CLICK = "touchstart";
    MOUSE_DOWN = "touchstart";
    MOUSE_UP = "touchend";
    isTouch = true;
}


$('#btn_next').on(MOUSE_CLICK, function() {
    $('#help_scr').addClass('hover_scr_on_mob-no');
});

$('#btn_next-part').on(MOUSE_CLICK, function() {
    if (mobile === true) {
        $('#part_scr').removeClass('hover_scr_on_mob-left-on');
    }
});

/* mob-ver-js */
var bnt_excell = $('#bnt_excell');
var bnt_well = $('#btn_well');
var bnt_bad = $('#btn_bad');
var bnt_back = $('#btn_next-part');
var sobid = ['sob_1', 'sob_2', 'sob_3', 'sob_4', 'sob_5', 'sob_6', 'sob_7', 'sob_8', 'sob_9', 'sob_10', 'sob_11', 'sob_12', 'sob_13'];

var nowid = 'sob_1'; // текуший id 

bnt_back.on(MOUSE_CLICK, function() {
    if (mobile === true) {
        $('#part_scr').removeClass('hover_scr_on_mob-left-on');
    }
});
$('#btn_back_solution').on(MOUSE_CLICK, function() {
    if (mobile === true) {
        $('#part_scr_solutio').removeClass('hover_scr_on_mob-left-on');
    }
});


$('#sob_1').on(MOUSE_CLICK, function() {
    chosesobie('sob_1');
});
$('#sob_2').on(MOUSE_CLICK, function() {
    chosesobie('sob_2');
});
$('#sob_3').on(MOUSE_CLICK, function() {
    chosesobie('sob_3');
});
$('#sob_4').on(MOUSE_CLICK, function() {
    chosesobie('sob_4');
});
$('#sob_5').on(MOUSE_CLICK, function() {
    chosesobie('sob_5');
});
$('#sob_6').on(MOUSE_CLICK, function() {
    chosesobie('sob_6');
});
$('#sob_7').on(MOUSE_CLICK, function() {
    chosesobie('sob_7');
});
$('#sob_8').on(MOUSE_CLICK, function() {
    chosesobie('sob_8');
});
$('#sob_9').on(MOUSE_CLICK, function() {
    chosesobie('sob_9');
});
$('#sob_10').on(MOUSE_CLICK, function() {
    chosesobie('sob_10');
});
$('#sob_11').on(MOUSE_CLICK, function() {
    chosesobie('sob_11');
});
$('#sob_12').on(MOUSE_CLICK, function() {
    chosesobie('sob_12');
});
$('#sob_13').on(MOUSE_CLICK, function() {
    chosesobie('sob_13');
});


bnt_excell.on(MOUSE_CLICK, function() {
    var name_part = 'отлично';
    var attr_part = "1"
    addhovertocard(nowid, name_part, attr_part);
    $('#part_scr').removeClass('hover_scr_on_mob-left-on');
})
bnt_well.on(MOUSE_CLICK, function() {
    var name_part = 'хорошо';
    var attr_part = "2"
    addhovertocard(nowid, name_part, attr_part);
    $('#part_scr').removeClass('hover_scr_on_mob-left-on');
})
bnt_bad.on(MOUSE_CLICK, function() {
    var name_part = 'плохо';
    var attr_part = "3"
    addhovertocard(nowid, name_part, attr_part);
    $('#part_scr').removeClass('hover_scr_on_mob-left-on');
})


function addhovertocard(idcard, name_part, attr_part) {
    var sob = document.getElementById(idcard);
    $(sob).find('.module__card').append("<div class='choice_cart' part=" + attr_part + "><div class='choice_cart-name open-sans-exboltit'>" + name_part + "</div><div class='choice_cart__bnt_cansel open-sans-exboltit'>отменить</div></div>");
    if (endSolution() === true) {
        $('#part_scr_solutio').addClass('hover_scr_on_mob-left-on');
    }
}

function removehovercard(idcard) {
    var sob = document.getElementById(idcard);
    $(sob).find('.choice_cart').remove();
}

function hashoveriinid(idcard) {
    var sob = document.getElementById(idcard);
    if ($(sob).find('.choice_cart').hasClass('choice_cart') === true) {
        return true;
    } else {
        return false;
    }
}

function getattrpart(idcard) {
    var sob = document.getElementById(idcard);
    return $(sob).find('.choice_cart').attr("part");
}

function chosesobie(idcard) {


    nowid = idcard;
    // var top = $(document.getElementById(nowid)).offset().top;  
    // $('#part_scr').css({"padding-top": top*1.6+"px" });
    if (mobile === true) {
        if (hashoveriinid(nowid) === true) {
            removehovercard(nowid);
        } else {
            $('#part_scr').addClass('hover_scr_on_mob-left-on');

        }
    }
}

function endSolution() {

    for (var i = 0; i < sobid.length; i++) {
        if (hashoveriinid(sobid[i]) === false) {
            return false;
        }
    };
    // 
    return true;
}


/* fix for ipad */
if (mobile === true) {
    $('#allScore').addClass('hidden');
}
/*  функция получия id в каждой партии
 отлично =1 
 хорошо =2
 плохо =3
*/
function getidInPart(nomer_part) {

    var idMas = [];
    for (var i = 0; i < sobid.length; i++) {
        if (getattrpart(sobid[i]) === nomer_part) {
            idMas.push(sobid[i]);
        };

    }
    return idMas;
}
// $('#solut_mob').on(MOUSE_CLICK, function() {
//     console.log(getidInPart('1'));
// });
