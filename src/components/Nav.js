import React from 'react';
import { Link } from 'react-router-dom';
import api from '../util/api.js';
import Search from './Search.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    }
  }
  
  handleSubmit = (event, location) => {
    event.preventDefault()
    let value = location;

    let city = value.split(',')[0];
    let state = value.split(' ')[1];

    console.log(city, state)

    api.fetchWeather(city, state)
      .then(function(weather) {
        console.log(weather);
      })
  }

  render() {
    return (
      <div className='nav' >
        <Link className='link' to='/' ><h1>Best Weather App</h1></Link>
        <Search formType='nav-form' onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Nav;