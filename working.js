//url http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7

//key = b9400442b324464fbfe95744201612
window.addEventListener('load', () => {
    let long; // longitude
    let lat; //latitude
    var location = document.querySelector(".location-name")
    var region = document.querySelector(".region") //  //data.location.region
    var country // data.loaction.country
    var presentTemp
    var presentDate
    var howIsWeather
    var temp_c = document.querySelector(".temp_c") //data.current.temp_c
    var temp_f = document.querySelector(".temp_f") //data.current.temp_f
    var feels_c = document.querySelector(".feels_c") //data.current.feelslike_c
    var feels_f = document.querySelector(".feels_f") //data.current.feelslike_f
    var humidity = document.querySelector(".humidity") // data.current.humidity
    var sunrise = document.querySelector(".sunrise")
    var sunset = document.querySelector(".sunset")
    var moonrise = document.querySelector(".moonrise")
    var moonset = document.querySelector(".moonset")
    var moon_phase = document.querySelector(".moon_phase")




    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.weatherapi.com/v1/forecast.json?key=b9400442b324464fbfe95744201612&q=${lat},${long}`

            fetch(api)
                .then(response => {
                    return response.json();
                }).then(data => {

                    console.log(data.forecast.forecastday[0].astro.sunrise)
                    console.log(data.current.feelslike_c)
                    console.log(data.forecast.forecastday[0].astro.sunset)



                    //data.forecast.forecastday[0].date
                    //howIsWeather=data.current.constion.text
                    location.innerHTML = data.location.name
                    region.innerHTML = data.location.region
                    temp_c.innerHTML = data.current.temp_c
                    temp_f.innerHTML = data.current.temp_f
                    humidity.innerHTML = data.current.humidity
                    sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise
                    sunset.innerHTML = data.forecast.forecastday[0].astro.sunset
                    moonrise.innerHTML = data.forecast.forecastday[0].astro.moonrise
                    moonset.innerHTML = data.forecast.forecastday[0].astro.moonset
                    moon_phase.innerHTML = data.forecast.forecastday[0].astro.moon_phase
                     /*feels_f.innerHTML = data.current.feelslike_f
                     humidity.innerHTML = data.current.humidity
                     sunrise.innerHTML = data.forecast.forecastday[0].sunrise
                     sunset.innerHTML = data.forecast.forecastday[0].sunset
                     moonrise.innerHTML = data.forecast.forecastday[0].moonrise
                     moonset.innerHTML = data.forecast.forecastday[0].moonset */
                })


        })
    }
})