import React, { Component } from 'react';
// import { getBridgeData } from '../helpers';
import axios from 'axios';

class linkBridge extends Component {
  constructor(props) {
    super(props);
    this.state = {bridgeIP: '', boom: '',};
  }

  getBridgeData(props) {
    axios.get("https://www.meethue.com/api/nupnp")
    .then(function(response){
      //setState with Response
      linkBridge.props.bridgeIP = "BOOM";
        console.log(response);
        let bridgeIP = response.data[0].internalipaddress;
        linkBridge.setState({boom: "HI!", bridgeIP: bridgeIP});
    }).catch(function(error){
      //Tell User Bridge Not Found
    });
  }

  render() {
      return (
        <div className="registerFlex">
          <h3 className="registerFlexItem">Link Bridge</h3>
          <div className="bridgeLinkSVG registerFlexItem"></div>
          <p className="registerFlexItem">Press the push-link button on the Hue Bridge you wish to connect to, then press the 'Link' button bellow.</p>
          <input type="button" value="link" className="getBridgeDataBtn" onClick={() => {this.getBridgeData()}} />
        </div>
      );
    }
}

export default linkBridge;
