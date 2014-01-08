// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require twitter/bootstrap

$(function(){
  var button = $('#button');
  var breakpanel = $('#breakpanel')
  var $document = $(document);

$document.scroll(function() {
  if ($document.scrollTop() >= 500) {
    alert("this is working")
  } else {
    alert("this is great")
  }
});
    button.click(function() {
     $.scrollTo(breakpanel, 800)});


});