import React from 'react';
import dateFormat from 'dateformat';
let images = require.context('../weather-icons', true);

function Icon(props) {
  let iconName = `./${props.day.weather[0].icon}.svg`;
  let icon = images(iconName);

  let date = new Date(props.day.dt * 1000);
  let dateStr = dateFormat(date, "dddd, mmm dS")
  return (
    <div className="day-container" onClick={props.onClick} >
      <img className='icon' src={icon} alt='weather icon' />
      <h2 className='subheader' >{dateStr}</h2>
    </div>
  )
}

export default Icon;