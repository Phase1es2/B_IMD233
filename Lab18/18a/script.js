$(document).ready(function () {
  $("li").css("id", "uw");

  $("ul").on("mouseover", "li", function () {
    console.log("x:" + $(this).text());
    $(this).attr("id", "uw");
  });

  $("ul").on("mouseleave", "li", function () {
    $(this).attr("id", "uw-gold");
  });

  // reset button click
  $("button").on("click", function (e) {
    $("ul#todo-list").empty();
  });

  // keypress
  $("input").on("keypress", function (e) {
    var code = e.which;
    var char = String.fromCharCode(code);
    console.log("key:" + code + " Char: " + char);

    if (code === 13) {
      let todo_item = $("input").val();
      addTodoItem(todo_item);
      $("input").val("");
    }
  });


  function addTodoItem(todo_item) {
    let str = '<li id = "uw" >' + "  "+ todo_item + "</li>";

    console.log(todo_item);
    $("ul#todo-list").append(str);
  }
});