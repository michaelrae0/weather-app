import React from 'react';
import Icon from './Icon.js';

class Details extends React.Component {
  toFahrenheit = kelvin => {
    return Math.round(kelvin * 9 / 5 - 459.67)
  }
  
  render() {
    let day = this.props.location.state;
    return(
      <div>
        <Icon day={day} />
        
        <div className='description-container'>
          <p>{this.props.city}</p> 
          <p>{day.weather[0].description}</p> 
          <p>Min Temp: {this.toFahrenheit(day.temp.min)}&#176;F</p> 
          <p>Max Temp: {this.toFahrenheit(day.temp.max)}&#176;F</p> 
          <p>Humidity: {day.humidity}%</p>
        </div>       
      </div>
    )
  }
}

export default Details;