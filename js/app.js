var Application = function() {


    function mainContainerHeight() {

        var windowHeight = $(window).height();
        var mainContainer = $(".main-container");

        mainContainer.css("height", windowHeight);
    }

    function rotateLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).toggleClass("rotate");
        });


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

            $(this).toggleClass("three-d");
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
                default:
                    console.log("Something didn't work.");
            }



            optionButton.removeClass("active");
            $(this).addClass("active");
        });
    }









    return {
        mainContainerHeight:mainContainerHeight,
        chooseOption:chooseOption

    };

};





$(function() {

    var app = new Application();
    app.mainContainerHeight();
    app.chooseOption();



});

