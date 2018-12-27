import React from 'react';
import dateFormat from 'dateformat';
let images = require.context('../images/weather-icons', true);

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      fontSize: this.calculateFontSize()
    }
  }
  
  calculateDetailedFontSize = () => {
    let width = document.documentElement.clientWidth * 0.3;
    let fontSize = width/12;

    return fontSize
  }

  calculateFontSize = () => {
    let width = document.documentElement.clientWidth * 0.85 * 0.2;
    let fontSize = width/6;

    return fontSize
  }

  componentDidMount = () => {
    window.addEventListener("resize", function() {
      let updatedSize = this.calculateFontSize();
      if (this.props.detailed) {
        updatedSize = this.calculateDetailedFontSize()
      }
      this.setState({
        fontSize: updatedSize
      })
    }.bind(this));
  }

  render() {
    let iconFile = `./${this.props.day.weather[0].icon}.svg`;
    let icon = images(iconFile);

    let date = new Date(this.props.day.dt * 1000);
    let dateStr = '';

    let iconClass = '';
    let subheaderClass = '';
    if (this.props.detailed) {
      dateStr = dateFormat(date, "dddd, mmm dS");
      iconClass = 'icon-detail';
      subheaderClass = 'subheader-detail';
    }
    else {
      dateStr = dateFormat(date, 'ddd d');
      iconClass = 'icon';
      subheaderClass = 'subheader';
    }
    
    return (
      <div className='icon-container' onClick={this.props.onClick} >    
        <p className={subheaderClass} style={{ fontSize: this.state.fontSize }} >{dateStr}</p>
        <img className={iconClass} src={icon} alt='weather icon' />
      </div>
    )
  }
}

export default Icon;