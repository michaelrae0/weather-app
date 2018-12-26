import React from 'react';
import Icon from './Icon.js';

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
      <div>
        <h1 className='week-header' >{this.props.city}</h1>
        <div className='week-container' >
          {this.props.data.list.map(function(dataItem) {          
            return <Icon day={dataItem} onClick={this.handleClick.bind(this, dataItem)} key={dataItem.pressure} />;
          }, this)}
        </div>
      </div>
    )
  }
}

export default Week;