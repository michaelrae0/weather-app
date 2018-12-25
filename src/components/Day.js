import React from 'react';
import dateFormat from 'dateformat';

function Icon(props) {
  let data = props.data
  let imgPath = '../../weather-icons/' + data.weather[0].icon + '.svg'
  
  let dateStr = dateFormat(data.dt, "dddd, mmmm dS")

  return (
    <div className="day-container" >
      <img className='icon' src={imgPath} alt='weather icon' />
      <h2 className='subheader' >{dateStr}</h2>
    </div>
  )
}

class Day extends React.Component {
  toFahrenheit = kelvin => {
    return Math.round(kelvin * 9 / 5 - 459.67)
  }
  
  render() {
    let data = this.props.data;

    return(
      <div>
        <Icon data={data} />
        
        <div className='description-container'>
          <p>{this.props.city}</p> 
          <p>{data.weather[0].description}</p> 
          <p>Min Temp: {this.toFahrenheit(data.main.temp_min)}&#176;F</p> 
          <p>Max Temp: {this.toFahrenheit(data.main.temp_max)}&#176;F</p> 
          <p>Humidity: {data.main.humidity}%</p>
        </div>       
      </div>
    )
  }
}

export default Day;