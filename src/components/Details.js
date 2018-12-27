import React from 'react';
import changeCase from 'change-case';
import Icon from './Icon.js';
import funcs from '../util/funcs.js';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      fontSize: this.calculateFontSize()
    }
  }
  
  calculateFontSize = () => {
    let width = document.documentElement.clientWidth * 0.3;
    let fontSize = width/15;
    console.log('hello')

    return fontSize
  }

  componentDidMount = () => {
    window.addEventListener("resize", function() {
      let updatedSize = this.calculateFontSize();

      this.setState({
        fontSize: updatedSize
      })
    }.bind(this));
  }
  
  render() {
    let day = this.props.location.state;
    let description = changeCase.titleCase(day.weather[0].description)

    return(
      <div className='day-detail-container'>
        <Icon day={day} detailed={true} />
        
        <div className='description-container' style={{ fontSize: this.state.fontSize }}>
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