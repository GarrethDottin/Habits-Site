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
//################ User Clicks Story ########################
  var button = $('#button');
  var breakpanel = $('#panel2')
  button.click(function() {
    $.scrollTo(breakpanel, 800)
  });


//################## Displaying User Stories ############

  $('#panel6').mouseover(function () {
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
    }, 1000) })

  var userStories = {
    "users": [{name: "Allison J", habit: 'Go Running three times a week', id: 1, storyid: "a", storyid2: "b"},{name: "James H", habit: 'Eat Salads everyday', id: 2, storyid: "a", storyid2: "b"}, {name: "Kevin M", habit:'Do more Public Speaking', id: 3, storyid: "a", storyid2: "b"}, {name:"Kevin M", habit: 'Do more Public Speaking', id: 4, storyid: "a", storyid2: "b"}, {name:"Regina T", habit:'Get into work earlier every day', id: 5, storyid: "a", storyid2: "b"}, {name: "Peter R", habit: 'Apply to 2 jobs a week', id: 6, storyid: "a", storyid2: "b"}, {name: "Molly M", habit: "Lose 5 pounds", id: 7, storyid: "a", storyid2: "b"}, {
      name: "Jessie L", habit: "Spend more time with my kids", id: 8, storyid: "a", storyid2: "b" }, { name: "Vince M", habit: "Start eating in more often", id: 9, storyid: "a", storyid2: "b"}
    ]
    }
  var source = $('#attempt').html();
  var template = Handlebars.compile(source);
  var html = template(userStories);
  $('#panel7').html(html);


  data = {tests: [{name: "Allison", lastname: false}, {name: "Jake", lastname: false}] }
  Handlebars.registerHelper("testfunction", function(block) {
      if (this.lastname == true) {
        return block(this)
      }

      else {
        return block.inverse(this)
      }

  })


  var source1 = $("#attempt2").html();
  var template = Handlebars.compile(source1)
  var html1 = template(data);
  $('#panel8').html(html1)

});
$(window).scroll(function() {
  if ($(document).scrollTop() >= 2000) {
    $('.sidebaritems:nth-child(1)').css('color', 'red');
  }
  if ($(document).scrollTop() >= 4200) {
    // $('.sidebaritems:nth-child(1)').css('color', 'initial');
    $('.sidebaritems:nth-child(2)').css('color', 'red');
  }
  if ($(document).scrollTop() >= 6367) {
    // $('.sidebaritems:nth-child(2)').css('color', 'initial');
    $('.sidebaritems:nth-child(3)').css('color', 'red');
  }
  if ($(document).scrollTop() >= 8527) {
    // $('.sidebaritems:nth-child(3)').css('color', 'initial');
    $('.sidebaritems:nth-child(4)').css('color', 'red');

  }
  if ($(document).scrollTop() >= 10400) {
    // $('.sidebaritems:nth-child(4)').css('color', 'initial')
    $('.sidebaritems:last-child').css('color', 'red')
    }
    });