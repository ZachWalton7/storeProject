$(document).ready(function() {
        $(document).on('click', '#circle', function() {
            $('.menu-wrap').toggleClass('menu-show');
        });
});

$(document).ready(function() {
    $(document).on('click', '.closebtn', function() {
        $('.menu-wrap').toggleClass('menu-hide');
    });
});