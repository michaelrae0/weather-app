import React from 'react';
import Icon from './Icon.js';
import funcs from '../util/funcs.js'

class Week extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxFontSize: this.calcMaxTempFont(),
      minFontSize: this.calcMinTempFont()
    }
  }
  
  handleClick = dataItem => {
    let value = window.encodeURI(this.props.city);
    let redirectURI = '/details/' + value;
    
    this.props.history.push({
      pathname: redirectURI,
      state: dataItem
    })
  }
  
  calcMaxTempFont = () => {
    let width = document.documentElement.clientWidth * 0.85 * 0.2;
    let fontSize = width/6;
    console.log('hello')

    return fontSize
  }
  calcMinTempFont = () => {
    let width = document.documentElement.clientWidth * 0.85 * 0.2;
    let fontSize = width/6;
    console.log('hello')

    return fontSize
  }

  componentDidMount = () => {
    window.addEventListener("resize", function() {
      let maxSize = this.calcMaxTempFont();
      let minSize = this.calcMinTempFont();

      this.setState({
        maxFontSize: maxSize,
        minFontSize: minSize
      })
    }.bind(this));
  }

  render() {
    let width = document.documentElement.clientWidth * 0.8 * 0.2;
    console.log(width);
    let maxFontSize = width/6;
    let minFontSize = width/10;
    let margin = maxFontSize - minFontSize;
    console.log('max: ' + maxFontSize, ', min: ' + minFontSize)

    return (
      <div className='week' >
        <h1 className='week-header' >{this.props.city}</h1>
        <div className='week-container' >
          {this.props.data.list.map(function(day) {          
            return (
              <div className='day-container' key={day.pressure}>
                <Icon day={day} onClick={this.handleClick.bind(this, day)} />
                <div className='temp-container' >
                  <div 
                    className='max-temp' 
                    style={{ fontSize: maxFontSize }} 
                  >
                    {funcs.toFahrenheit(day.temp.max)}&#176;
                  </div>
                  <div 
                    className='min-temp' 
                    style={{ fontSize: minFontSize, marginTop: margin }} 
                  >
                    {funcs.toFahrenheit(day.temp.min)}&#176;
                  </div>
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