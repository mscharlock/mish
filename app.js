'use strict';

$(document).ready(function() {
  $('.toggle').hide();
  $('div.sparkles> h1').hover(function(){
    $('.toggle').slideToggle('slow');
  });
  $('nav ol li').hide();
  $('nav ol li').hover(function() {
    $('nav').slideToggle('slow');
  });
});
