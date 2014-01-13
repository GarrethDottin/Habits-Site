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

var userStories = {
    "users": [{name: "Allison J", habit: 'Go Running three times a week', id: 1, storyid: "a", storyid2: "b"},{name: "James H", habit: 'Eat Salads everyday', id: 2, storyid: "a", storyid2: "b"}, {name: "Kevin M", habit:'Do more Public Speaking', id: 3, storyid: "a", storyid2: "b"}, {name:"Kevin M", habit: 'Do more Public Speaking', id: 4, storyid: "a", storyid2: "b"}, {name:"Regina T", habit:'Get into work earlier every day', id: 5, storyid: "a", storyid2: "b"}, {name: "Peter R", habit: 'Apply to 2 jobs a week', id: 6, storyid: "a", storyid2: "b"}, {name: "Molly M", habit: "Lose 5 pounds", id: 7, storyid: "a", storyid2: "b"}, {
      name: "Jessie L", habit: "Spend more time with my kids", id: 8, storyid: "a", storyid2: "b" }, { name: "Vince M", habit: "Start eating in more often", id: 9, storyid: "a", storyid2: "b"}
    ],
    source1: $('#attempt').html()
    }

$(function(){
//################ User Clicks Story ########################
  var button = $('#button');
  var breakpanel = $('#panel2')
  button.click(function() {
    $.scrollTo(breakpanel, 800)
  });

//########## Handlebars Template for User Stories ###############
  var source = $('#attempt').html();
  var template = Handlebars.compile(source);
  var html = template(userStories);
  $('#panel7').html(html);
});
$(window).scroll(function() {
  num = $(document).scrollTop()
  if (num >= 560 && num <= 1200) {
    $('.sidebaritems:nth-child(1)').css('color', 'red');
  }
  else {
    $('.sidebaritems:nth-child(1)').css('color', 'initial');

  }
  if (num >= 1112 && num <= 2072) {
    $('.sidebaritems:nth-child(2)').css('color', 'red');
  }
  if (num >= 2072 && num <= 8527) {
    $('.sidebaritems:nth-child(3)').css('color', 'red');
  }
  if (num >= 2730 && num <= 10000) {
    $('.sidebaritems:nth-child(4)').css('color', 'red');
  }
  if (num >= 3510) {
    $('.sidebaritems:last-child').css('color', 'red')
    var storyNumber = 1
    var Showitems =  setInterval(function() {
      function divDisplay(storyNumber) {
        $('#story'+ storyNumber).fadeIn('slow', function() {})
      }
      divDisplay(storyNumber)
      if (storyNumber <= 11) {
        storyNumber++
      }
      else {
        clearInterval(Showitems)
      }
    }, 1000)
  }
});