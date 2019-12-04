jQuery(document).ready(function($){
    $('#block-mainnavigation-menu li a').hover(function(){
        $(this).parent().find('.sub-menu').toggle();
        console.log('hello world');
    });
});