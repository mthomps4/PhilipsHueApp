import React, { Component } from 'react';
import {Link} from 'react-router';

class Main extends Component {
  render() {
    return (
<div>
      <div className="brandContainer">
        <Link className="brandLink" to="/">Brand</Link>
      </div>

      <div className="appContainer">
        {this.props.children}
      </div>

      <nav className="navbar navbar-inverse navbar-fixed-bottom">
            <ul className="bottomFlexNav">
              <Link to="/" activeClassName="active">Home</Link>
              <Link to="about" activeClassName="active">Rooms</Link>
              <Link to="about" activeClassName="active">Lights</Link>
              <Link to="about" activeClassName="active">Bridge Info</Link>
              <Link to="about" activeClassName="active">About</Link>
            </ul>
      </nav>
</div>
    );
  }
}

export default Main;
