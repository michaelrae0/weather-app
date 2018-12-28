import React from 'react';
import dateFormat from 'dateformat';
import funcs from '../util/funcs.js';
let images = require.context('../images/weather-icons', true);

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: this.updateFont()
    };
  }
  
  // Checks if its for Details.js, then calculates size
  updateFont = () => {
    let updatedSize = '';
    
    if (this.props.detailed) {
      updatedSize = funcs.calcFontSize(0.4, 1/10);
    }
    else {
      updatedSize = funcs.calcFontSize(0.85 * 0.2, 1/6);
    }

    return updatedSize;
  }

  componentDidMount = () => {
    // Resizing event listener: changes font size when window size changes
    window.addEventListener("resize", function () {
      let updatedSize = this.updateFont();

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
    );
  }
}

export default Icon;