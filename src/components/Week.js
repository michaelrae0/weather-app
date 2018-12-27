import React from 'react';
import Icon from './Icon.js';
import funcs from '../util/funcs.js'

class Week extends React.Component {
  handleClick = dataItem => {
    console.log('yes')
    let value = window.encodeURI(this.props.city);
    let redirectURI = '/details/' + value;
    
    this.props.history.push({
      pathname: redirectURI,
      state: dataItem
    })
  }
  
  render() {
    return (
      <div className='week' >
        <h1 className='week-header' >{this.props.city}</h1>
        <div className='week-container' >
          {this.props.data.list.map(function(day) {          
            return (
              <div className='day-container' key={day.pressure}>
                <Icon day={day} onClick={this.handleClick.bind(this, day)} />
                <div className='temp-container' >
                  <div className='max-temp' >{funcs.toFahrenheit(day.temp.max)}&#176;</div>
                  <div className='min-temp' >{funcs.toFahrenheit(day.temp.min)}&#176;</div>
                </div>
              </div>
            )
          }, this)}
        </div>
      </div>
    )
  }
}

export default Week;