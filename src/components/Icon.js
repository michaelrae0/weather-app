import React from 'react';
import dateFormat from 'dateformat';
let images = require.context('../images/weather-icons', true);

function Icon(props) {
  console.log(props.day)
  console.log(props.day.weather[0].icon)
  let iconFile = `./${props.day.weather[0].icon}.svg`;
  let icon = images(iconFile);

  let date = new Date(props.day.dt * 1000);
  let dateStr = '';
  let iconClass = '';
  let subheaderClass = '';

  if (props.detailed) {
    dateStr = dateFormat(date, "dddd, mmm dS");
    iconClass = 'icon-detail';
    subheaderClass = 'subheader-detail';
  }
  else {
    dateStr = dateFormat(date, 'ddd d');
    iconClass = 'icon';
    subheaderClass = 'subheader';
  }
  

  // let size = this.props.size
  return (
    <div className='icon-container' onClick={props.onClick} >    
      <h2 className={subheaderClass} >{dateStr}</h2>
      <img className={iconClass} src={icon} alt='weather icon' />
    </div>
  )
}

export default Icon;