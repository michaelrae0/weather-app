import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      str: 'Loading.'
    };
  }

  updateStr = () => {
    let str = this.state.str;

    if (str === 'Loading...') {
      this.setState({ str: 'Loading.' });
    } 
    else {
      this.setState({ str: str + '.' });
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(this.updateStr, 300);
  }
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='week-header' >{this.state.str}</div>
    );
  }
}

export default Loading;