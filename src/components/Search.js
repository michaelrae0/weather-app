import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  handleChange = event => {
    var value = event.target.value;

    this.setState({
      location: value
    })
  }
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(
      event,
      this.state.location
    );
  }
  
  render() {
    return (
      <form className={this.props.formType} onSubmit={this.handleSubmit} >
          <input 
            className='search'
            placeholder='Mobile, Alabama'
            type='text'
            value={this.state.location}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <button 
            className='btn btn-success'
            type='submit'
            disabled={!this.state.location} 
          >
            Get Weather
          </button>
        </form>
    )
  }
}

export default Search;