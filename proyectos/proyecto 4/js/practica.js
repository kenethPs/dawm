(
    function(){
        let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.14&longitude=-79.97&hourly=temperature_2m,rain';
        fetch( URL )
        .then(response => response.json())
        .then(data => {
            let time_zone = data["timezone"]
            let latitude = data["latitude"]
            let longitude = data["longitude"]
            let elevation = data["elevation"]
            let latitudeHTML = document.getElementById("latitude")
            let timezoneHTML = document.getElementById("timezone")
            let longitudeHTML = document.getElementById("longitude")
            let elevationHTML = document.getElementById("elevation")
            timezoneHTML.textContent = time_zone
            latitudeHTML.textContent = latitude
            longitudeHTML.textContent = longitude
            elevationHTML.textContent = elevation
        })
        .catch(console.error);
    }
)();