var Application = function() {



    function whichLanding() {

        var landingDesktop = $(".landing-desktop");
        var landingMobile = $(".landing-mobile");

        if (window.matchMedia("(max-width:740px)").matches) {
            landingDesktop.hide();
            landingMobile.show();
        }
        else {
            landingDesktop.show();
            landingMobile.hide();
        }
    }


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
        var partName = $(".part-name");

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

    function knowMeMobile(letterNo, myClass) {

        var letter = $(".letter-" + letterNo);
        var letters = $(".letters-all");
        var letter15 = $(".letter-15");
        var isVisible = 0;



        $("." + myClass).on("click", function(){
            if (isVisible === 1) {
                $("." + myClass).hide();
                letters.removeClass("transparent");
                isVisible = 0;
                return false;
            }
        });

        letter.on("click", function(){

            $(".hide-me").hide();
            letters.addClass("transparent");
            $("." + myClass).show().addClass("visible");
            isVisible = 1;
            return false;
        });

        $(document).on("click", function(event){

                $("." + myClass).hide();
                letters.removeClass("transparent");
                isVisible = 0;
                return false;
        });

        $(window).on("orientationchange",function(){

            $(".know-me").trigger("click");
        });
    }



    function goToGithub() {
        $(".letter-11").on("click", function(){
            window.open("https://github.com/olagajda", "_blank");
            preventDefault();
        });
    }

    function goToLinkedin() {
        $(".letter-9").on("click", function(){
            window.open("https://www.linkedin.com/in/aleksandragajda", "_blank");
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
                    if (window.matchMedia("(max-width:740px)").matches) {
                        animateLetter(("shine-mobile"), 1500);
                    }
                    else {
                        animateLetter('shine-mobile shine',3000);
                    }
                    break;
                case "three-d":
                    if (window.matchMedia("(max-width:740px)").matches) {
                        animateLetter(("three-d-mobile"), 500);
                    }
                    else {
                        animateLetter('three-d-mobile three-d', 1000);
                    }
                    break;
                case "pop":
                    popAll();
                    setTimeout(function(){$(".know-me").trigger("click")}, 1975);
                    break;
                case "know-me":

                    instruction.show();
                    setTimeout(function(){
                        instruction.hide();
                    }, 5000);

                    if ($(".letters-desktop").css("display") === "none") {

                        knowMeMobile("1", "portrait");
                        knowMeMobile("3", "edu");
                        knowMeMobile("5", "skills");
                        knowMeMobile("7", "experience");
                        knowMeMobile("9", "linkedin-mobile");
                        knowMeMobile("11", "git-mobile");
                        knowMeMobile("12", "sit-on-chair");
                        knowMeMobile("13", "bhagaskara");
                        knowMeMobile("15", "contact-mobile");

                    }
                    else {


                        if (window.matchMedia("(max-width:740px)").matches) {
                            knowMeMobile("1", "portrait");
                            knowMeMobile("3", "edu");
                            knowMeMobile("5", "skills");
                            knowMeMobile("7", "experience");
                            knowMeMobile("9", "linkedin-mobile");
                            knowMeMobile("11", "git-mobile");
                            knowMeMobile("12", "sit-on-chair");
                            knowMeMobile("13", "bhagaskara");
                            knowMeMobile("15", "contact-mobile");


                        }
                        else {
                            knowMe("1", "portrait", 1000);
                            knowMe("3", "edu", 1000);
                            knowMe("5", "skills", 1000);
                            knowMe("7", "experience", 1000);
                            knowMe("9", "linkedin", 1000);
                            knowMe("11", "git", 1000);
                            knowMe("12", "sit-on-chair", 500);
                            knowMe("13", "bhagaskara", 500);
                            knowMe();
                            goToLinkedin();
                            goToGithub();
                            mailMe();

                        }
                    }

                    break;
                default:
                    console.log("Something didn't work just right.");
            }
        });
    }

    return {
        chooseOption:chooseOption,
        slideUpLanding:slideUpLanding,
        whichLanding:whichLanding

    };

};


$(function() {

    var app = new Application();
    app.chooseOption();
    app.slideUpLanding();
    app.whichLanding();



});