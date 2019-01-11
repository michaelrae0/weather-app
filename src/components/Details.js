import React from 'react';
import changeCase from 'change-case';
import Icon from './Icon.js';
import funcs from '../util/funcs.js';
import mobile from 'is-mobile';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      fontSize: funcs.calcFontSize(0.4, 1/15)
    };
  }

  componentDidMount = () => {
    // Resizing event listener: changes font size when window size changes
    window.addEventListener("resize", function() {
      let maxWidth = 0.3;

      if (mobile()) {
        maxWidth = 0.4
      }

      let updatedSize = funcs.calcFontSize(maxWidth, 1/15);

      this.setState({
        fontSize: updatedSize
      });
    }.bind(this));
  }
  
  render() {
    let day = this.props.location.state;
    let description = changeCase.titleCase(day.weather[0].description);

    let radius,
        maxWidth;
    // Change appearance if on mobile
    if (mobile()) {
      radius = 15;
      maxWidth = 40;
    } else {
      radius = 0;
      maxWidth = 30;
    }

    return(
      <div 
        className='day-detail-container' 
        style={{
          borderRadius: radius,
          maxWidth: maxWidth + '%'
        }}
      >
        <Icon day={day} detailed={true} />
        
        <div className='description-container' style={{ fontSize: this.state.fontSize }}>
          <p>{this.props.city}</p> 
          <p>{description}</p> 
          <p>Min Temp: {funcs.toFahrenheit(day.temp.min)}&#176;F</p> 
          <p>Max Temp: {funcs.toFahrenheit(day.temp.max)}&#176;F</p> 
          <p>Humidity: {day.humidity}%</p>
        </div>       
      </div>
    );
  }
}

export default Details;