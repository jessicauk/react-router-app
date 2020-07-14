import React from 'react';
import Place from './Place';
import '../../Places.css';


export default (props) => {
  return(
  <div className="Places">
    <Place name="México"/>
    <Place name="Francia"/>
    <Place name="USA"/>
    <Place name="Reino Unido"/>
    <Place name="Alemania"/>
    <Place name="Suiza"/>
    <Place name="Portugal"/>
  </div>
  )
}