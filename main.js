document.getElementById('addForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var ip = document.getElementById('item').value;

  if(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip)){
        axios.get('http://ip-api.com/json/' + ip)
        .then(function (response) {
        var details = response.data;
        console.log(response);
        
        
        document.getElementById('apiDetails').innerHTML = '<p>City: ' + details.city + '</p><p>Country: ' + details.country + '</p><p>ISP: ' + details.isp + '</p><p>Latitute: ' + details.lat + '</p><p>Longitude: ' + details.lon + '</p>';
        })
        .catch(function (error) {
        console.log(error);
        });
    } else{
        alert('Invalid Ip address');
    }
});
