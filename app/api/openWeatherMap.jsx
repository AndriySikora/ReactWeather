const openWeatherMapUrl = 'http://samples.openweathermap.org/data/2.5/weather?appid=6625ad41d0c3118ae7327e9906d223a8&units=imperial';

module.exports = {
    getTemp: function(location) {
        const encodedLocation = encodeURIComponent(location);
        const requestUrl = `${openWeatherMapUrl}&q=${encodedLocation}`;

        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            crossDomain: true,
            mode: 'cors',
            cache: 'default'
        };

        var myRequest = new Request(requestUrl, myInit);

        return fetch(myRequest).then(function(response) {
            if (response.ok) {
                return response.data.main.temp;
            }
            throw new Error('Network response was not ok.');
        }).then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }
}