var name;
var password;

function myFunction() {
  document.getElementById("demo").innerHTML =
    "First JavaScript program that is interactive.";

  name = prompt("Please enter your username");
  password = prompt("Please enter your password");

  console.log("Username is: " + name);
  console.log("Password is: " + password);

  var el = document.getElementById("username");
  el.textContent = name;

  var el = document.getElementById("password");
  el.textContent = password;
}