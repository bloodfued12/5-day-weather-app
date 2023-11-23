var apiKey = $("94610524bb47d39675eac55f70a7b750");
var countryCode = "GB";
var cityName = $("search-input").value;

var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=$("cityName"),$("countryCode")&limit=1&appid=$("apiKey")";

fetch(queryURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
});