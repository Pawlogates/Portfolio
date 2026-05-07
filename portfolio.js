/*Zmień poniższą wartość żeby włączyć tryb debug.
(usunie/ukryje elementy przeszkadzające w testowaniu strony*/

let debug_state

debug_state = "tutaj cokolwiek poza tym tekstem włączy debug";

if(debug_state == "tutaj cokolwiek poza tym tekstem włączy debug"){
    void(0);
    
}

else{
    $(".start_msg").remove();
    $(".bg_cover").remove();
    $(".main_overlay").remove();


}

/*teraz poniżej już normalne funkcje*/


/*
document.querySelector("#textbox1").style.display = "none"
*/

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


/* debug */
$('.bg_cover').toggleClass('hide_this');
$('#start_msg_closer').toggleClass('hide_this');
$('.start_msg').toggleClass('start_box_hide');

$('.elements_container').toggleClass('elements_container_active');
$('.on_start_scale').toggleClass('on_start_scale_active');


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

console.log(Math.floor(Math.random() * 3))
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

if(document.getElementsByTagName("HTML")[0].dir=="ltr")
{
    document.getElementsByClassName("first")[0].style.backgroundColor="cyan";
}