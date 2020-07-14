import React from 'react';
import '../../../Place.css';

export default (props) => {
  const { name } = props;
  return (
    
  <div className="Place">
    <span>{name}</span>
  </div>
  )
}