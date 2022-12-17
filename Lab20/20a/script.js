var myUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";

var code = "USD";
$("#hit-me").click(function(){

  $.ajax({
    url: myUrl,
    success: function(data){
      var bc = JSON.parse(data);
      price = bc.bpi[code].rate;
      console.log(price);
      $('#price').text(price);
    }
  });
});