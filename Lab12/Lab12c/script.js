
var count = 0;
var counterElement = document.getElementById("counter");
counterElement.innerHTML = count;

var interval = setInterval(function(){
    count++;
    counterElement.innerHTML = "My counter value: " + count;
    while(count === Number.MAX_SAFE_INTEGER){
        clearTimeout(interval);
        console.log("my counter value: " + count);
    }
},3000);



