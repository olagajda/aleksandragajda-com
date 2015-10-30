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

            var oldOne = $(this);
            var clone = oldOne.clone();

            $(this).toggleClass("rotate");

            setTimeout(function(){
                $(this).removeClass("rotate");
                //$(this).before(clone);
                //$("." + oldOne.attr("class") + ":last").remove();
            }, 3000);





        });
    }


    function turnLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).toggleClass("turn");

            setTimeout(function(){
                $(this).removeClass("turn");
            }, 2000);
        });



    }

    function scaleLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).toggleClass("scale");
            setTimeout(function(){
                $(this).removeClass("scale");
            }, 2000);
        });



    }

    function threeDLetter() {

        var letter = $(".letter");

        letter.on("mouseenter", function(){

            $(this).toggleClass("three-d");

            setTimeout(function(){
                $(this).removeClass("three-d");
            }, 2000);
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
        var allLettersCode = "<div class='letter letter-1'>A</div><div class='letter letter-2'>l</div><div class='letter letter-3'>e</div><div class='letter letter-4'>k</div><div class='letter letter-5'>s</div><div class='letter letter-6'>a</div><div class='letter letter-7'>n</div><div class='letter letter-8'>d</div><div class='letter letter-9'>r</div><div class='letter letter-10'>a</div> <div class='letter letter-11'>G</div><div class='letter letter-12'>a</div><div class='letter letter-13'>j</div><div class='letter letter-14'>d</div><div class='letter letter-15'>a</div>";


        optionButton.on("click", function(){


            //letters.off();

            //setTimeout(function(){
            //    letters.remove();
            //    $(".letters-all").html(allLettersCode);
            //    console.log("yellow!")
            //}, 3000);

            letters.remove();
            $(".letters-all").html(allLettersCode);




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

