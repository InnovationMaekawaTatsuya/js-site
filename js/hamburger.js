$(document).ready(function() {
    $(function () {
        $(".sp-header-menu").on("click", function () {
            $("#before-header").addClass("none");
            $(".sp-header").css('background-color', 'transparent');
            $("#hamburger-place").addClass("hamburger-menu");
            $("#sp-header").addClass("checked-sp-header-menu");
            $(".hamburger-none").css('top', '0');
        });
    });
    $(function () {
        $(".checked-sp-header-menu").on("click", function () {
            $("#before-header").removeClass("none");
            $(".sp-header").css('background-color', 'white');
            $(".hamburger-none").css('top', '-100%');
        });
    });
});