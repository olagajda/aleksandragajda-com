var Application = function() {


    function slideUpLanding() {
        var windowHeight = $(window).height();
        var landing = $(".landing");
        var landingTextHeight = landing.find('.text').height();
        var buttons = $(".buttons");
        var name = $(".letters-all");
        var firstOption = $(".move");

        landing.css('padding', (windowHeight - landingTextHeight)/2 + 'px 0');

        $(document).one('scroll', function() {
            $('html, body').animate({

                scrollTop: $(".main-container").offset().top
            }, 1000);

            setTimeout(function(){
                landing.hide();
            }, 1000);

            $(document).off("scroll");

            buttons.show();
            name.show();

            setTimeout(function(){
               firstOption.trigger("click")
            }, 1000)
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

            $(this).css("color", "");
        });
    }


    function animateLetter(style, time) {
        var letter = $(".letter");
        letter.on("mouseenter", function(){
            $(this).addClass(style).delay(time).queue(function(){
                $(this).removeClass(style).dequeue();
            });
        });
    }

    function popAll() {
        var letters = $(".letter");
        letters.addClass("pop").delay(2000).queue(function(){
            letters.removeClass("pop").dequeue();
        });
    }


    function knowMe(letterNo, myClass, fadeTime) {

        var letter = $(".letter-" + letterNo);
        var letter15 = $(".letter-15");

        letter.on("mouseenter", function(){
            $("." + myClass).fadeIn(fadeTime);
        });
        letter.on("mouseleave", function(){
            $("." + myClass).fadeOut(fadeTime);
        });

        letter15.on("mouseenter", function(){
            $(".contact").fadeIn(500);
        });
        letter15.on("mouseleave", function(){
            $(".contact").fadeOut(10000);
        });

    }

    function goToGithub() {
        $(".letter-11").on("click", function(){
            window.open("https://github.com/olagajda", "_blank");
            preventDefault();
        });
    }

    function mailMe() {
        $(".letter-15").on("click", function(){
            window.location.href = "mailto:hello@aleksandragajda.com";
        });
    }

    function chooseOption() {

        var optionButton = $(".option-button");
        var letters = $(".letter");
        var instruction = $(".instruction");


        optionButton.on("click", function(){

            optionButton.removeClass("active");
            $(this).addClass("active");
            instruction.hide();


            letters.off();

            switch($(this).data("option")) {

                case "rotate":
                    animateLetter('rotate', 3000);
                    break;
                case "color":
                    colorLetter();
                    break;
                case "turn":
                    animateLetter('turn', 2000);
                    break;
                case "scale":
                    animateLetter('scale', 2000);
                    break;
                case "shine":
                    animateLetter('shine',3000);
                    break;
                case "three-d":
                    animateLetter('three-d', 1500);
                    break;
                case "pop":
                    popAll();
                   setTimeout(function(){$(".know-me").trigger("click")}, 2000);
                    break;
                case "know-me":
                    instruction.show();
                    setTimeout(function(){
                        instruction.hide();
                    }, 5000);
                    knowMe("1", "portrait", 1000);
                    knowMe("3", "edu", 1000);
                    knowMe("5", "skills", 1000);
                    knowMe("7", "experience", 1000);
                    knowMe("11", "git", 1000);
                    knowMe("12", "sit-on-chair", 500);
                    knowMe("13", "bhagaskara", 500);
                    knowMe();
                    goToGithub();
                    mailMe();

                    break;
                default:
                    console.log("Something didn't work just right.");
            }
        });
    }

    return {
        chooseOption:chooseOption,
        slideUpLanding:slideUpLanding,

    };

};


$(function() {

    var app = new Application();
    app.chooseOption();
    app.slideUpLanding();



});