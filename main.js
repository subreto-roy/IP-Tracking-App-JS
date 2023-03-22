document.getElementById('addForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var ip = document.getElementById('item').value;
  
  if(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ip)){
    
        axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=fd4948d6e3b84208ab3b3e038966ca70&ip=' + ip)
        .then(function (response) {
            var details = response.data;
            // console.log(response);
        
              document.getElementById('apiDetails').innerHTML = '<p>City: ' + details.city + '</p><p>Country: ' + details.country_name + '</p><p>ISP: ' + details.isp + '</p><p>Latitude: ' + details.latitude + '</p><p>Longitude: ' + details.longitude + '</p><p>Continent_name: '+ details.continent_name +'</p><p>District: '+details.district+'</p><p>Zip Code: ' + details.zipcode +'</p><p>Calling code : ' + details.calling_code +'</p><p>Time : ' + details.time_zone.current_time +'</p> ';

              document.getElementById('item').value = ''
            //   document.getElementById('addForm').reset();
              
              
        })
        .catch(function (error) {
            console.log(error);
            if (error.response.status === 423) {
                document.getElementById('apiDetails').innerHTML = 'Your Given IP is undefined';
            }
            
        });
    } else{
        alert('Invalid Ip address');
    }

    // document.getElementById('clear').reset(); 
        
      
});

document.getElementById('clear').addEventListener('click', () => {
    // document.getElementById('addForm').reset()
    document.getElementById('apiDetails').innerHTML = ''
}); 

