import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch, withRouter } from 'react-router-dom';
import Wirtters from './Writters';
import NotFound from './Errors/404';

import model from '../TensorFlow'

export default class App extends Component {
  state = {
    writters: [],
  }
  componentDidMount = async () => {

    console.log('model', model);
    
    const writters = await (await fetch('http://localhost:3004/writters?_embed=texts')).json()
    this.setState({
      writters,
    })
  }
  onRouteChanged(e) {
    console.log("ROUTE CHANGED", e);
  }

  render() {
    const { writters } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/writters">
                Witters
              </Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>}/>
            <Route path="/writters" render={props => <Wirtters {...props} writters={writters}/>} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
