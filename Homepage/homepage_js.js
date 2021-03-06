
$(document).ready(function(){

    $(".bars_fixed").click(function(){
        $('.demo.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    });

    $('.ui.accordion').accordion();

    $(document).scroll(function () {
        var $nav = $(".fixed_menu");
        $nav.toggleClass('fixed_menu_scrolled', $(this).scrollTop() > $nav.height());
        $('.selected_fixed').toggleClass('selected_fixed_ease_50', $(this).scrollTop() > $nav.height());
    });

    $(".introduction_div .column_introduce .button").click(function(){
        $('#introduce_modal').modal('show');
    });

    $(".introduction_div .column_goals .button").click(function(){
        $('#goals_modal').modal('show');
    });

    $(".introduction_div .column_catalog .button").click(function(){
        $('#catalog_modal').modal('show');
    });

});