window.onload = function () {

    let mem = $('#bullet-one');
    $('.bullet').on('click', function () {
        console.log($(this).attr('id'));
        console.log($(this).width());

        mem.css('background-color', '#818181');
        $(this).css('background-color', '#bf3676');
        mem = $(this);

        switch ($(this).attr('id')){
            case "bullet-one":
                $('#scroll').animate({scrollLeft: "0"}, 500);
                break;
            
            case "bullet-two":
                $('#scroll').animate({scrollLeft: $('.vignette').width()+45}, 500);
                break;
            
            case "bullet-three":
                $('#scroll').animate({scrollLeft: $('.vignette').width()*2+45*2}, 500);
                break;                              
        }
    });
}