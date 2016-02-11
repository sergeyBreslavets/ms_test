$(function() {
    var edin_ros = $('#part1');
    var ldpr = $('#part2');
    var kprf = $('#part3');
    var sprav_ros = $('#part4');
    var boxid = $('#sobit-box');
    var allsob = $('#sobit-box div ');
    var connectClass = '.module-connect';
    var addClassInPart = 'module__card-inpart';
    var btnsol = $('#solution');


    boxid.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            remClassToElInBox();
        }
    });

    edin_ros.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
        }
    });
    ldpr.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
        }
    });
    kprf.sortable({
        connectWith: connectClass,
        receive: function(event, ui) {
            addClassToElInBox(this);
        }
    });
    sprav_ros.sortable({
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
            if ($(el).hasClass(addClassInPart) == false) {
                $(el).addClass(addClassInPart);
            }
        };
        showbtn();
    }

    function remClassToElInBox() {
        var list = boxid.sortable("toArray");
        for (var i = 0; i < list.length; i++) {
            var id = list[i];
            var el = document.getElementById(id);
            if ($(el).hasClass(addClassInPart) == true) {
                $(el).removeClass(addClassInPart);
            }
        };
    }

    function showbtn() {
        var list = boxid.sortable("toArray");
        if (list.length == 0) {
            btnsol.removeClass('hidden');

        }
    }

    /*получить значение id в каждой партии */
    // $('#btn').click(function(){
    //  edin_ros.sortable("toArray"));
    //  
    // });
});


if (mobile === true) {
    console.log("mobile detect");
    $('#help_scr').removeClass('hidden');
}

$('#btn_next').click(function() {
    $('#help_scr').addClass('hover_scr_on_mob-no');
});






$('#btn_next-part').click(function() {
    if (mobile === true) {
        $('#part_scr').removeClass('hover_scr_on_mob-left-on');
    }
});

/* mob-ver-js */
var bnt_edros = $('#part_ed_rs');
var btn_ldpr = $('#part_ldpr');
var bnt_kprf = $('#part_kprf');
var btn_sp_ros = $('#part_sp_rs');
var bnt_back = $('#btn_next-part');
var nowid = 'sob_1'; // текуший id 
bnt_back.click(function() {
    if (mobile === true) {
        $('#part_scr').removeClass('hover_scr_on_mob-left-on');
    }
});
$('#btn_back_solution').click(function() {
    if (mobile === true) {
        $('#part_scr_solutio').removeClass('hover_scr_on_mob-left-on');
    }
});


$('#sob_1').click(function() {
    chosesobie('sob_1');
});
$('#sob_2').click(function() {
    chosesobie('sob_2');
});
$('#sob_3').click(function() {
    chosesobie('sob_3');
});
$('#sob_4').click(function() {
    chosesobie('sob_4');
});
$('#sob_5').click(function() {
    chosesobie('sob_5');
});
$('#sob_6').click(function() {
    chosesobie('sob_6');
});
$('#sob_7').click(function() {
    chosesobie('sob_7');
});
$('#sob_8').click(function() {
    chosesobie('sob_8');
});
$('#sob_9').click(function() {
    chosesobie('sob_9');
});
$('#sob_10').click(function() {
    chosesobie('sob_10');
});
$('#sob_11').click(function() {
    chosesobie('sob_11');
});
$('#sob_12').click(function() {
    chosesobie('sob_12');
});



bnt_edros.click(function() {
    var name_part = 'единая россия';
    var attr_part = "1"
    addhovertocard(nowid, name_part, attr_part);
    bnt_back.click();
})
btn_ldpr.click(function() {
    var name_part = 'лдпр';
    var attr_part = "2"
    addhovertocard(nowid, name_part, attr_part);
    bnt_back.click();
})
bnt_kprf.click(function() {
    var name_part = 'кпрф';
    var attr_part = "3"
    addhovertocard(nowid, name_part, attr_part);
    bnt_back.click();
})
btn_sp_ros.click(function() {
    var name_part = 'справедливая россия';
    var attr_part = "4"
    addhovertocard(nowid, name_part, attr_part);
    bnt_back.click();
})

function addhovertocard(idcard, name_part, attr_part) {
    var sob = document.getElementById(idcard);
    $(sob).find('.module__card').append("<div class='choice_part' part=" + attr_part + "><div class='choice_part-name open-sans-exboltit'>" + name_part + "</div><div class='choice_part__bnt_cansel open-sans-exboltit'>отменить</div></div>");
    console.log(endSolution());
}

function removehovercard(idcard) {
    var sob = document.getElementById(idcard);
    $(sob).find('.choice_part').remove();
}

function hashoveriinid(idcard) {
    var sob = document.getElementById(idcard);
    if ($(sob).find('.choice_part').hasClass('choice_part') === true) {
        return true;
    } else {
        return false;
    }
}

function getattrpart(idcard) {
    var sob = document.getElementById(idcard);
    return $(sob).find('.choice_part').attr("part");
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
    var sobid = ['sob_1', 'sob_2', 'sob_3', 'sob_4', 'sob_5', 'sob_6', 'sob_7', 'sob_8', 'sob_9', 'sob_10', 'sob_11', 'sob_12'];
    for (var i = 0; i < sobid.length; i++) {
        if (hashoveriinid(sobid[i]) === false) {
            return false;
        }
    };
    $('#part_scr_solutio').addClass('hover_scr_on_mob-left-on');
    return true;
}


/* fix for ipad */
if (mobile === true) {
    $('#allpart').addClass('hidden');
}
/*  функция получия id в каждой партии
 ed_ros =1 
 ldpr =2
 kprf =3
 sp_ros =4 
*/
function getidInPart(nomer_part) {
    var sobid = ['sob_1', 'sob_2', 'sob_3', 'sob_4', 'sob_5', 'sob_6', 'sob_7', 'sob_8', 'sob_9', 'sob_10', 'sob_11', 'sob_12'];
    var idMas = [];
    for (var i = 0; i < sobid.length; i++) {
        if (getattrpart(sobid[i]) === nomer_part) {
            idMas.push(sobid[i]);
        };

    }
    return idMas;
}
$('#solut_mob').click(function() {
    console.log(getidInPart('1'));
});
