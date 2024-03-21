/*Zmień poniższą wartość żeby włączyć tryb debug.
(usunie/ukryje elementy przeszkadzające w testowaniu strony*/

let debug_state

debug_state = "Htutaj cokolwiek poza tym tekstem włączy debug";

if(debug_state == "tutaj cokolwiek poza tym tekstem włączy debug"){
    void(0);
    
}

else{
    $(".start_msg").remove();
    $(".bg_cover").remove();
    $(".main_overlay").remove();


}

/*teraz poniżej już normalne funkcje*/



document.querySelector("#textbox1").style.display = "none"

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

    });
});


