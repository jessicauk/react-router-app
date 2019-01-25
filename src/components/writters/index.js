import React, { Fragment }from 'react';
import { Route, Link } from 'react-router-dom';
import Writter from './writter';

export default ({ match: { url }, writters }) => 
  <Fragment>
    <ul>
      {
        writters.map(({id, name}) => 
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        )
      }
    </ul>
    <Route exact path={`${url}`} render={() => (<div><h2>Select a writter from de list</h2></div>)}/>
    <Route path={`${url}/:writterId`} render={
      ({match}) => <Writter {...writters.find(writer => writer.id === match.params.writterId)} />
    } />
  </Fragment>