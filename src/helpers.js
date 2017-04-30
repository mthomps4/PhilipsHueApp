import React from 'react';
import axios from 'axios';
import BadIP from './components/BadIP';
import HomeScreen from './components/HomeScreen';

export function getBridgeData(e) {
  router.get('', function(req, res){

  });

  //  e.preventDefault();
  // let bridgeIP = '0.0.0.0';
  //
  // axios.get("https://www.meethue.com/api/nupnp")
  // .then(function(data){
  //   console.log(data);
  //   bridgeIP = data.data[0].internalipaddress;
  //   console.log(bridgeIP);
  //   return bridgeIP;
  // })
  // .then(function(bridgeIP){
  //   if(bridgeIP === '0.0.0.0'){
  //     console.log('Bad IP ', bridgeIP);
  //     this.setState({bridgeIP: '{bridgeIP}'});
  //     }
  //   }
  //   console.log('Good IP: ', bridgeIP);
  //   this.setState({bridgeIP: '{bridgeIP}'});
  //     }
  // });
}
