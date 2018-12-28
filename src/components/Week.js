import React from 'react';
import Icon from './Icon.js';
import funcs from '../util/funcs.js'

class Week extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxFontSize: funcs.calcFontSize(0.85 * 0.2, 1/6),
      minFontSize: funcs.calcFontSize(0.85 * 0.2, 1/10),
      headerFontSize: funcs.calcFontSize(.85, 1/16)
    }
  }

  componentDidMount = () => {
    // Resizing event listener: changes font size when window size changes
    window.addEventListener("resize", function() {
      let maxFontSize = funcs.calcFontSize(0.85 * 0.2, 1/6);
      let minFontSize = funcs.calcFontSize(0.85 * 0.2, 1/10);
      let headerFontSize = funcs.calcFontSize(.85, 1/16);

      this.setState({
        maxFontSize,
        minFontSize,
        headerFontSize
      });
    }.bind(this));
  }

  // Sends user to Details.js when a day is clicked
  handleClick = dataItem => {
    let value = window.encodeURI(this.props.city);
    let redirectURI = '/details/' + value;
    
    this.props.history.push({
      pathname: redirectURI,
      state: dataItem
    })
  }

  render() {
    // Lines up the high and low temps
    let margin = this.state.maxFontSize - this.state.minFontSize;

    return (
      <div className='week' >
        <h1 className='week-header' style={{ fontSize: this.state.headerFontSize }} >{this.props.city}</h1>
        <div className='week-container' >
          {this.props.data.list.map(function(day) {          
            return (
              <div className='day-container' key={day.pressure} onClick={this.handleClick.bind(this, day)} >
                <Icon day={day} />
                <div className='temp-container' >
                  <div 
                    className='max-temp' 
                    style={{ fontSize: this.state.maxFontSize }} 
                  >
                    {funcs.toFahrenheit(day.temp.max)}&#176;
                  </div>
                  <div 
                    className='min-temp' 
                    style={{ fontSize: this.state.minFontSize, marginTop: margin }} 
                  >
                    {funcs.toFahrenheit(day.temp.min)}&#176;
                  </div>
                </div>
              </div>
            )
          }, this)}
        </div>
      </div>
    );
  }
}

export default Week;