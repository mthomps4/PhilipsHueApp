import axios from 'axios';

  export function getBridgeData() {
    axios.get("https://www.meethue.com/api/nupnp")
    .then(function(data, response){
      console.log(data);
      var bridgeIP = data.data[0].internalipaddress;
      console.log(bridgeIP);
    });

  }
