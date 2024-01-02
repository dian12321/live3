// toggle 

function openNav(){

    document.getElementById("myNav").style.width = "100%";

}

// close

function closeNav(){

    document.getElementById("myNav").style.width = "0%";

}

// popup 

$(function(){

    $(".btn").on("click",function(){

        $("#popup, .bg").fadeIn();

    });

    $(".close").on("click",function(){

        $("#popup, .bg").fadeOut();

    });

    $("#popup, .bg").on("click",function(){
        $("#popup, .bg").fadeOut(); 
    });


});