/**
 * jQuery Funktionen für "Das Ding" MCIT '14
 */

/* Höhe des Headers bestimmen - Immer Fullscreen*/
$(function() {
    var hoehe = $(window).height();
    $('#fk-header').height(hoehe-100);
    $('#knowing-mission').height(hoehe);
});