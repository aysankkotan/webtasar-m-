$(function(){
    $(".menu").on({
        mouseover: function(){
            $(this).css("color", "antiquewhite");
            $(this).css("background-color", "palevioletred");
            $(this).css("border-radius", "10px");
        },
        mouseleave: function(){
            $(this).css("color", "palevioletred");
            $(this).css("background-color", "antiquewhite");
        }
    });

    animasyon();


    function animasyon() {

        var sayı = 1;
    
        setInterval(function() {
            
            var a = "resim" + sayı + ".jpg";
    
            $("#img").fadeOut(4000, function(){
                $(this).queue(function(){
                    $(this).attr("src", a);
                    $(this).dequeue();
                });
    
                $(this).fadeIn(4000);
            });
    
            sayı++;
            if(sayı==3){
                sayı = 1;
            }
    
        },4000);
    }

    $("#kapama").on({
        mouseover: function(){
            $(this).css("curser", "pointer");
        },

        click: function(){
            $("#çerez").css("display", "none");
        }
    });



});



