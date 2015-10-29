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

        letter.one("mouseenter", function(){

            $(this).toggleClass("three-d");
        });
    }


    function chooseOption() {

        var optionButton = $(".game");

        optionButton.on("click", function(){

            optionButton.removeClass("active");
            $(this).addClass("active");
        });
    }









    return {
        mainContainerHeight:mainContainerHeight,
        rotateLetter:rotateLetter,
        colorLetter:colorLetter,
        turnLetter:turnLetter,
        scaleLetter:scaleLetter,
        threeDLetter:threeDLetter,
        chooseOption:chooseOption

    };

};





$(function() {

    var app = new Application();
    app.mainContainerHeight();
    //app.rotateLetter();
    //app.colorLetter();
    //app.turnLetter();
    //app.scaleLetter();
    //app.threeDLetter();
    app.chooseOption();



});

