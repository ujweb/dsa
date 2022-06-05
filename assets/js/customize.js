let width = $(window).width();
let height = $(window).height();

console.log(height);

let detect = `
                .index-page section, .index-page section .container,
                .option-page section, .option-page section .container,
                .result-page section, .result-page section .container
            `;

$(detect).css('min-height', height);

if ( width > height ) {
    $('.index-page img.background, .option-page img.background').css('height', height * 1.35);
    if ( width >= 1200 ) {
        $('.result-page img.background').css('height', height * 1.14);
        $('.success-page img.background').css('height', height * 0.97);
        $('.success-page .container').css('padding-bottom', height * 0.97 * .225);
    } else {
        $('.result-page img.background').css('height', height * 1.22);
        $('.success-page img.background').css('height', height * 1.1);
        $('.success-page .container').css('padding-bottom', height * 1.1 * .225);
    }
} else {
    $('.index-page img.background, .option-page img.background').css('height', height * 1.17);
    $('.result-page img.background').css('height', height * 1.02);
    $('.success-page img.background').css('height', height * 1.02 * 0.82);
    $('.success-page .container').css('padding-bottom', height * 1.02 * .2);
}
