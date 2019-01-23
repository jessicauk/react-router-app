import React, { Fragment } from 'react';

export default (props, { match, name, description, born, image}) =>
  console.log(props) ||
  <Fragment>
    <div> 
      Name: {name}
      Description: {description}
      Born: {born}
      Image: {image}
    </div>
  </Fragment>