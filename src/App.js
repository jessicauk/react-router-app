import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';



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
    console.log('writters', this.state.writters)
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
          <Route exact path="/" render={() => <div>Home</div>}/>
          <Route path="/writters" render={() => <div>Witters</div>}/>
        </Fragment>
      </BrowserRouter>
    );
  }
}
