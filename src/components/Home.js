import React from 'react';
import Search from './Search.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
  }
  
  handleSubmit = (event, location) => {
    event.preventDefault()

    let value = window.encodeURI(location);
    let redirectURI = '/forecast?city=' + value
    
    this.props.history.push(redirectURI)
  }

  render() {
    return (
      <div className='home-container' >
        <h1 className='header' >Enter a City and State</h1>
        <Search 
          formType='home-form'
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Home;