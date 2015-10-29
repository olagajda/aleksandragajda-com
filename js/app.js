var Application = function() {


    function mainContainerHeight() {

        var windowHeight = $(window).height();
        var mainContainer = $(".main-container");

        mainContainer.css("height", windowHeight);
    }









    return {
        mainContainerHeight:mainContainerHeight

    };

};





$(function() {

    var app = new Application();
    app.mainContainerHeight();


});

