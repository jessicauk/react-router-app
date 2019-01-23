import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Wirtters from './writters';


export default class App extends Component {
  state = {
    writters: [],
  }
  componentDidMount = async () => {
    const writters = await (await fetch('http://localhost:3004/writters')).json()
    this.setState({
      writters,
    })
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
          <Route exact path="/" render={() => <div>Home</div>}/>
          <Route path="/writters" render={props => <Wirtters {...props} writters={writters}/>} />
        </Fragment>
      </BrowserRouter>
    );
  }
}
