let width = $(window).width();
let height = $(window).height();

function init(width, height) {
    let detect1 = `.index-page section, .option-page section`
    let detect2 = `.result-page section`
    let detect3 = `.result-page section, .success-page section`

    $('section').css('min-height', height);
    let imgWidth;
    if ( width >= 1440 ) {
        $(detect1).children('.bg-img.bg-img-desktop').width(width * 1.5);
        $(detect3).children('.bg-img.bg-img-desktop').width(width * 1.3);
        imgWidth = $('section > .bg-img.bg-img-desktop').width();
    } else if ( width >= 1024 ) {
        $(detect1).children('.bg-img.bg-img-desktop').width(width * 1.65);
        $(detect3).children('.bg-img.bg-img-desktop').width(width * 1.4);
        imgWidth = $('section > .bg-img.bg-img-desktop').width();
    } else if ( width >= 768 ) {
        $(detect1).children('.bg-img.bg-img-mobile').width(width * 1.4);
        $(detect3).children('.bg-img.bg-img-mobile').width(width * 1.3);
        imgWidth = $('section > .bg-img.bg-img-mobile').width();
    } else {
        $(detect1).children('.bg-img.bg-img-mobile').width(width * 1.5);
        $(detect3).children('.bg-img.bg-img-mobile').width(width * 1.8);
        imgWidth = $('section > .bg-img.bg-img-mobile').width();
    }

    let imgHeight;

    if ( width >= 992 ) {
        imgHeight = width * 1.5 * 1.335558252427184;
    } else if ( width >= 768 ) {
        imgHeight = width * 1.4 * 1.335558252427184;
    } else {
        imgHeight = width * 1.5 * 1.335558252427184;
    }

    if ( width >= 1440 ) {
        $(detect1).css('padding-top', imgHeight * 0.065);
        $(detect1).css('padding-bottom', imgHeight * 0.065);
        $(detect2).css('padding-top', imgHeight * 0.065);
        $(detect3).css('padding-bottom', imgHeight * 0.065);
        $('section .container').css('min-height', (height - (imgHeight * 0.065 * 2)));
    } else if ( width >= 1024 ) {
        console.log('a');
        $(detect1).css('padding-top', imgHeight * 0.035);
        $(detect1).css('padding-bottom', imgHeight * 0.035);
        $(detect2).css('padding-top', imgHeight * 0.035);
        $(detect3).css('padding-bottom', imgHeight * 0.035);
        $('section .container').css('min-height', (height - (imgHeight * 0.035 * 2)));
    } else if ( width >= 768 ) {
        $(detect1).css('padding-top', imgHeight * 0.07);
        $(detect1).css('padding-bottom', imgHeight * 0.07);
        $(detect3).css('padding-top', imgHeight * 0.07);
        $(detect3).css('padding-bottom', imgHeight * 0.07);
        $('section .container').css('min-height', (height - (imgHeight * 0.07 * 2)));
    } else {
        $(detect1).css('padding-top', imgHeight * 0.085);
        $(detect1).css('padding-bottom', imgHeight * 0.085);
        $(detect3).css('padding-top', imgHeight * 0.085);
        $(detect3).css('padding-bottom', imgHeight * 0.085);
        $('section .container').css('min-height', (height - (imgHeight * 0.1 * 2)));
    }

    if ( width <= 1024 && width > 768 ) {
        $('section > .bg-img.bg-img-mobile').css('margin-top', imgHeight * 0.025);
    } else if ( width < 768 ) {
        $(detect1).children('.bg-img.bg-img-mobile').css('margin-top', -imgHeight * 0.05);
        $(detect3).children('.bg-img.bg-img-mobile').css('margin-top', imgHeight * 0.0025);
    }
}

init(width, height);

$(window).on('resize', function() {
    let width = $(window).width();
    let height = $(window).height();
    init(width, height);
});