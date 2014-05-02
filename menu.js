$(function () {

    var func = function () {

        var desp = menu.find("ul");
        var size = desp.height();

        desp.css("height", 0);

        menu.mouseenter(function () {
            desp.css("display", 'block');
            desp.stop(true, false).animate({
                height: size,
                opacity: 1
            }, 'normal');

            //$(this).find("ul").stop(true, true).fadeIn().slideDown();

        });

        menu.mouseleave(function () {
            desp.stop(true, false).animate({
                height: 0,
                opacity: 0
            }, 'normal', function () {
                desp.css("display", 'none');
            });

            /*slideUp().fadeOut();
            $(this).find("ul").fadeOut();*/
        });
    };

    var menu = $('#menu1');
    func();

    menu = $('#menu2');
    func();

    menu = $('#menu3');
    func();

    menu = $('#menu4');
    func();
});
