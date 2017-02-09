import React, { Component } from 'react';
import Router from 'react-router';
import {browserHistory} from 'react-router';
import {getBridgeData} from './getBridgeData.jsx';

class Register extends Component {

  linkBridge(e){
    e.preventDefault();
    //ajax Calls
    getBridgeData();

    //if Blah Then Blah
    //Error Return Link Error Page
    console.log("somethingPushedUs!");
    let path = `/home`;
    //this.context.router.push(path);
  }

  render() {
    return (
        <div className="registerFlex">
          <h3 className="registerFlexItem">Link Bridge</h3>
          <div className="bridgeLinkSVG registerFlexItem"></div>
          <p className="registerFlexItem">Press the push-link button on the Hue Bridge you wish to connect to, then press the 'Link' button bellow.</p>
          <input type="button" value="Link" className="registerFlexItem" onClick={this.linkBridge.bind(this)}/>
        </div>
    );
  }
}

export default Register;

Register.contextTypes = {
  router: React.PropTypes.object.isRequired
};

//var newState = this.state; newState.tickets.push(whatever); this.setState(newState);
/* <Router history={browserHistory}>
    <Route path="protectedRoute" component={Protected} onEnter={requireAuth} />
    <Route path="signin" component={SignIn} />
  </Route>
</Router>
); */
