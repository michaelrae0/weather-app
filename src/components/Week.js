import React from 'react';
import dateFormat from 'dateformat';
let images = require.context('../weather-icons', true);

class Week extends React.Component {
  render() {
    return (
      <div>
        <h1 className='week-header' >{this.props.city}</h1>
        <div className='week-container' >
          {this.props.data.list.map(function(value, i) {          
            let iconName = `./${value.weather[0].icon}.svg`;
            let icon = images(iconName);
            
            let date = new Date(value.dt * 1000); // returns time in seconds (unix)
            let dateStr = dateFormat(date, "yyyy, mmm dS")
            console.log(dateStr);

            return (
              <div key={value.pressure + i} className="day-container"  >
                <img className='icon' src={icon} alt='weather icon' />
                <h2 className='day-subheader' >{dateStr}</h2>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Week;