var Application = function() {


    function mainContainerHeight() {

        var windowHeight = $(window).height();
        var mainContainer = $(".main-container");

        mainContainer.css("height", windowHeight);
    }

    function colorLetter() {

        var letter = $(".letter");
        var randomColor = Math.floor(Math.random()*16777215).toString(16);

        letter.on("mouseenter", function(){

            $(this).css("color", "#" + randomColor);

            randomColor = Math.floor(Math.random()*16777215).toString(16);
        });

        letter.on("mouseleave", function(){

            $(this).css("color", "black");
        });
    }

    function rotateLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).toggleClass("rotate");

        });
    }


    function turnLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).toggleClass("turn");
        });


    }

    function scaleLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).toggleClass("scale");
        });

    }

    function threeDLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).addClass("three-d");
        });


    }


    function knowMe() {


        $(".letter-1").on("mouseenter", function(){
            $(".portrait").fadeIn(1000);
        });
        $(".letter-1").on("mouseleave", function(){
            $(".portrait").fadeOut();
        });

        $(".letter-3").on("mouseenter", function(){
            $(".edu").fadeIn(1000);
        });
        $(".letter-3").on("mouseleave", function(){
            $(".edu").fadeOut();
        });

        $(".letter-5").on("mouseenter", function(){
            $(".skills").fadeIn(1000);
        });
        $(".letter-5").on("mouseleave", function(){
            $(".skills").fadeOut();
        });

        $(".letter-7").on("mouseenter", function(){
            $(".experience").fadeIn(1000);
        });
        $(".letter-7").on("mouseleave", function(){
            $(".experience").fadeOut();
        });


    }







    function chooseOption() {

        var optionButton = $(".option-button");
        var letters = $(".letter");


        optionButton.on("click", function(){


            letters.off();

            switch($(this).data("option")) {

                case "rotate":
                    rotateLetter();
                    break;
                case "color":
                    colorLetter();
                    break;
                case "turn":
                    turnLetter();
                    break;
                case "scale":
                    scaleLetter();
                    break;
                case "three-d":
                    threeDLetter();
                    break;
                case "know-me":
                    knowMe();
                    break;
                default:
                    console.log("Something didn't work just right.");
            }



            optionButton.removeClass("active");
            $(this).addClass("active");
        });
    }









    return {
        mainContainerHeight:mainContainerHeight,
        chooseOption:chooseOption,

    };

};


$(function() {

    var app = new Application();
    app.mainContainerHeight();
    app.chooseOption();



});

