import React from 'react';
import changeCase from 'change-case';
import Icon from './Icon.js';
import funcs from '../util/funcs.js';

class Details extends React.Component {
  render() {
    let day = this.props.location.state;
    let description = changeCase.titleCase(day.weather[0].description)

    return(
      <div className='day-detail-container'>
        <Icon day={day} detailed={true} />
        
        <div className='description-container'>
          <p>{this.props.city}</p> 
          <p>{description}</p> 
          <p>Min Temp: {funcs.toFahrenheit(day.temp.min)}&#176;F</p> 
          <p>Max Temp: {funcs.toFahrenheit(day.temp.max)}&#176;F</p> 
          <p>Humidity: {day.humidity}%</p>
        </div>       
      </div>
    )
  }
}

export default Details;