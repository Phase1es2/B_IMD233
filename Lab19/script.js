$(document).ready(function() {
    const base_url = "https://api.weather.gov/stations/";
    const endpoint = "/observations/latest";

    // weather update button click
    $('#getwx').on('click', function(e) {
        var mystation = $('input#station-id').val();
        var myurl = base_url + mystation + endpoint;
        $('input#my-url').val(myurl);

        // clear out any previous data
        $('ul li').each(function() {
            // enter code to clear each li
            clearInterval(li);
        });

        console.log("Cleared Elements of UL");

        // execute AJAX call to get and render data
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(data) {
                var tempC_data = data.properties.temperature.value;
                var tempF = (tempC_data * 9 / 5 + 32).toFixed(1);
                let tempC = tempC_data.toFixed(1);

                // get wind info and convert m/s to kts
                var windDirection = data.properties.windDirection.value;
               // var windSpeed = data.properties.wind.value;
               // let windSpeed_kts = windSpeed * 1.94384;

                // uncomment this if you want to dump full JSON to textarea
                 var myJSON = JSON.stringify(data);
                 $('textarea').val(myJSON);

                var str = "<li>Current temperature: " + tempC + "C " + tempF + "F" + "</li>";
                $('ul').append(str);
                $('ul li:last').attr('class', 'list-group-item');

                // add additional code here for the Wind direction, speed, weather contitions and icon image
               // var str = "<li>Humidity: " + tempC + "%RH " +"</li>";
               // $('ul').append(str);
                //$('ul li:last').attr('class', 'list-group-item');

                var str = "<li>Current Wind: " + windDirection + " degrees at " + tempC + "kts" + "</li>";
                $('ul').append(str);
                $('ul li:last').attr('class', 'list-group-item');
            }
        });
    });
});