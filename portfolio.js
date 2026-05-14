/* A-TYPE BUTTONS */

$(function(){
    $('#btn1a').on('click', function(){

        $('#slider1').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer1').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer1').on('click', function(){

        $('#slider1').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer1').toggleClass('closer_active');

    });
});

$(function(){
    $('#btn2a').on('click', function(){

        $('#slider2').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer2').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer2').on('click', function(){

        $('#slider2').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer2').toggleClass('closer_active');

    });
});

$(function(){
    $('#btn3a').on('click', function(){

        $('#slider3').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer3').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer3').on('click', function(){

        $('#slider3').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer3').toggleClass('closer_active');

    });
});

$(function(){
    $('#btn4a').on('click', function(){

        $('#slider4').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer4').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer4').on('click', function(){

        $('#slider4').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer4').toggleClass('closer_active');

    });
});

$(function(){
    $('#btn5a').on('click', function(){

        $('#slider5').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer5').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer5').on('click', function(){

        $('#slider5').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer5').toggleClass('closer_active');

    });
});

/* LONG SLIDERS */

$(function(){
    $('#btn6a').on('click', function(){

        $('#slider6').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer6').toggleClass('closer_active');

    });
});

$(function(){
    $('#closer6').on('click', function(){

        $('#slider6').toggleClass('slider_active');
        $('.elements_container').toggleClass('elements_container_hidden');
        $('#closer6').toggleClass('closer_active');

    });
});

/* B-TYPE BUTTONS */

$(function(){
    $('#btn1b').on('click', function(){

        $('#item_moveup1').toggleClass('item_up');

    });
});


/* C-TYPE BUTTONS */

$(function(){
    $('#btn1c').on('click', function(){

        $('.textbox').toggleClass('textbox_appear');
        document.querySelector("#textbox1").style.display = "block"
        $('#btn1c_moveUp').toggleClass('btn_moveUp');
        
    });
});

/* OTHER STUFF BELOW */




$(function(){
    $('#start_msg_closer').on('click', function(){

        $('.bg_cover').toggleClass('hide_this');
        $('#start_msg_closer').toggleClass('hide_this');
        $('.start_msg').toggleClass('start_box_hide');

        $('.elements_container').toggleClass('elements_container_active');
        $('.on_start_scale').toggleClass('on_start_scale_active');

    });
});


/* debug
$('.bg_cover').toggleClass('hide_this');
$('#start_msg_closer').toggleClass('hide_this');
$('.start_msg').toggleClass('start_box_hide');

$('.elements_container').toggleClass('elements_container_active');
$('.on_start_scale').toggleClass('on_start_scale_active');
*/


var list_color_red = [
        "#FF6633",
        "#FFB399",
        "#FFFF99",
        "#E6B333",
        "#999966",
        "#809980",
        "#E6FF80",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#FF4D4D",
]

var list_color_green = [
        "#FF6633",
        "#FFB399",
        "#FFFF99",
        "#E6B333",
        "#999966",
        "#809980",
        "#E6FF80",
        "#166b20",
        "#999933",
        "#CCCC00",
        "#66E64D",
]

var list_color_blue = [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#809980",
        "#E6FF80",
        "#999933",
        "#CCCC00",
        "#4D80CC",
        "#99E6E6",
        "#6666FF",
]

var list_color = ["FF4D4D"]
var rolled_list_color_id = Math.floor(Math.random() * 3)

if (rolled_list_color_id == 0)
{
    list_color = list_color_red
}
else if (rolled_list_color_id == 1)
{
    list_color = list_color_green
}
else if (rolled_list_color_id == 2)
{
    list_color = list_color_blue
}


var list_display_general = document.getElementsByClassName("display_general")
var item_pos = 0

for (let x = 0; list_display_general[item_pos] != list_display_general[-1]; item_pos += 1)
{
    list_display_general[item_pos].style.outlineColor = list_color[Math.floor(Math.random() * list_color.length)];
}



$(function(){
    $('#display_1').on('mouseleave', function(){
        $('#display_1_hover_effect').toggleClass('display_general_hover_effect_active');
    });
    $('#display_1').on('mouseenter', function(){
        $('#display_1_hover_effect').toggleClass('display_general_hover_effect_active');
    });

    $('#display_2').on('mouseleave', function(){
        $('#display_2_hover_effect').toggleClass('display_general_hover_effect_active');
    });
    $('#display_2').on('mouseenter', function(){
        $('#display_2_hover_effect').toggleClass('display_general_hover_effect_active');
    });

    $('#display_3').on('mouseleave', function(){
        $('#display_3_hover_effect').toggleClass('display_general_hover_effect_active');
    });
    $('#display_3').on('mouseenter', function(){
        $('#display_3_hover_effect').toggleClass('display_general_hover_effect_active');
    });

    $('#display_4').on('mouseleave', function(){
        $('#display_4_hover_effect').toggleClass('display_general_hover_effect_active');
    });
    $('#display_4').on('mouseenter', function(){
        $('#display_4_hover_effect').toggleClass('display_general_hover_effect_active');
    });

    $('#display_5').on('mouseleave', function(){
        $('#display_5_hover_effect').toggleClass('display_general_hover_effect_active');
    });
    $('#display_5').on('mouseenter', function(){
        $('#display_5_hover_effect').toggleClass('display_general_hover_effect_active');
    });
});

$(function(){
    $('#display_1').on('click', function(){
        $('.elements_container').toggleClass('black');
        $('html').toggleClass('black');

        $('#closer_display_1').toggleClass('closer_active');

        $('#display_1').toggleClass('display_1_focused');
        $('#display_1').toggleClass('display_general_focused');

        $('#display_2').toggleClass('display_general_unfocused');
        $('#display_3').toggleClass('display_general_unfocused');
        $('#display_4').toggleClass('display_general_unfocused');
        $('#display_5').toggleClass('display_general_unfocused');

    });
});

$(function(){
    $('#display_2').on('click', function(){
        $('.elements_container').toggleClass('black');
        $('html').toggleClass('black');

        $('#closer_display_2').toggleClass('closer_active');

        $('#display_2').toggleClass('display_2_focused');
        $('#display_2').toggleClass('display_general_focused');

        $('#display_1').toggleClass('display_general_unfocused');
        $('#display_3').toggleClass('display_general_unfocused');
        $('#display_4').toggleClass('display_general_unfocused');
        $('#display_5').toggleClass('display_general_unfocused');

    });
});

$(function(){
    $('#display_3').on('click', function(){
        $('.elements_container').toggleClass('black');
        $('html').toggleClass('black');

        $('#closer_display_3').toggleClass('closer_active');

        $('#display_3').toggleClass('display_3_focused');
        $('#display_3').toggleClass('display_general_focused');

        $('#display_1').toggleClass('display_general_unfocused');
        $('#display_2').toggleClass('display_general_unfocused');
        $('#display_4').toggleClass('display_general_unfocused');
        $('#display_5').toggleClass('display_general_unfocused');

    });
});

$(function(){
    $('#display_4').on('click', function(){
        $('.elements_container').toggleClass('black');
        $('html').toggleClass('black');

        $('#closer_display_4').toggleClass('closer_active');

        $('#display_4').toggleClass('display_4_focused');
        $('#display_4').toggleClass('display_general_focused');

        $('#display_1').toggleClass('display_general_unfocused');
        $('#display_2').toggleClass('display_general_unfocused');
        $('#display_3').toggleClass('display_general_unfocused');
        $('#display_5').toggleClass('display_general_unfocused');

    });
});

$(function(){
    $('#display_5').on('click', function(){
        $('.elements_container').toggleClass('black');
        $('html').toggleClass('black');

        $('#closer_display_5').toggleClass('closer_active');

        $('#display_5').toggleClass('display_5_focused');
        $('#display_5').toggleClass('display_general_focused');

        $('#display_1').toggleClass('display_general_unfocused');
        $('#display_2').toggleClass('display_general_unfocused');
        $('#display_3').toggleClass('display_general_unfocused');
        $('#display_4').toggleClass('display_general_unfocused');

    });
});

/* randomize display image

for (let x = 1; x < 6; x ++) {
    rolled_number = Math.floor(Math.random() * 5) + 1
    console.log(rolled_number)
    console.log(x)
    document.getElementById("display_" + String(x)).style.backgroundImage = "url('images/" + String(rolled_number) + ".png')";
}

*/