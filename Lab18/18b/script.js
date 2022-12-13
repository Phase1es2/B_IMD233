$(document).ready(function () {
  $('li').css('margin', '10px');
  $('li').attr('id', 'uw');

  $('#p1 li').click(function () {
    console.log("$(this):" + $(this));
    $(this).fadeOut(2000, function () {
      console.log("fadeout complete!")
    });
  });
});




  $("#p2 li").click(function () {
    $(this).fadeOut(100, function () {
      console.log("fadeout complete!");
    });
    $(this).fadeIn(4000, function () {
      console.log("fadein complete!");
    });
  });

  $("ul#p3 li").click(function () {
    $(this).fadeTo(5000, 0.5, function () {
      console.log("fadein complete!");
    });
  });

  $("ul#p4 li").click(function () {
    $(this).fadeToggle(4000, "swing", function () {
      console.log("fade Toggle complete!");
    });
    $(this).fadeToggle(2000, "swing", function () {
      console.log("fade Toggle complete!");
    });
  });
