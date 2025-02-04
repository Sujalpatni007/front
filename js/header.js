$('document').ready(function () {
    var a = window.location.pathname;
    switch (a) {
        case "/":
            $("li").removeClass('currrent');
            $(".home").addClass('current');
            break;
        case "/about-us":
            $("li").removeClass('currrent');
            $(".about").addClass('current');
            break;
        case "/OurClient":
            $("li").removeClass('currrent');
            $(".client").addClass('current');
            break;
        case "/corporate-catering-services":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/corporate-catering-services-in-bangalore":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-in-whitefield":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-in-koramangala":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-in-electronic-city":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-in-ballandur":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-in-hsr-layout":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-in-marathahalli":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-in-brookfield":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/catering-services-near-kr-puram":
            $("li").removeClass('currrent');
            $(".corporate").addClass('current');
            break;
        case "/event-catering-service-in-bangalore":
            $("li").removeClass('currrent');
            $(".event").addClass('current');
            break;
    }
});