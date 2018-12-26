import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from './Search.js';

class Nav extends React.Component {
  handleSubmit = (event, location) => {
    event.preventDefault();

    let value = window.encodeURI(location);
    let redirectURI = '/forecast?city=' + value;
    
    this.props.history.push(redirectURI);
  }

  render() {
    return (
      <div className='nav' >
        <Link className='link' to='/' ><h1>Weather</h1></Link>
        <Search formType='nav-form' onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default withRouter(Nav);