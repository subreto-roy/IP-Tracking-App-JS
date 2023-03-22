document.getElementById('addForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var ip = document.getElementById('item').value;

  if(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip)){
        axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=fd4948d6e3b84208ab3b3e038966ca70&ip=' + ip)
        .then(function (response) {
            var details = response.data;
            console.log(response);
        
        
            // document.getElementById('apiDetails').innerHTML = '<p>City: ' + details.city + '</p><p>Country: ' + details.country + '</p><p>ISP: ' + details.isp + '</p><p>Latitute: ' + details.lat + '</p><p>Longitude: ' + details.lon + '</p>';
        })
        .catch(function (error) {
            console.log(error);
        });
    } else{
        alert('Invalid Ip address');
    }
});
