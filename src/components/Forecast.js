import React from 'react';
import queryString from  'query-string';
import api from '../util/api.js';
import Loading from './Loading.js';
import Day from './Day.js';

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      isLoading: true,
      loadingStr: 'loading.',
      data: null
    }
  }

  componentDidMount = () => {
    let location = queryString.parse(this.props.location.search).city;
    let city = location.split(',')[0]
    city = city[0].toUpperCase() + city.slice(1, city.length);

    api.fetchWeather(city)
      .then(function(data) {
        console.log(data);
        this.setState({ 
          isLoading: false,
          city,
          data
        })
      }.bind(this));
  }

  render() {
    let data = this.state.data;
    console.log(data)
    
    return (
      <div>
        {this.state.isLoading && <Loading />}

        {data &&
          <Day data={data} city={this.state.city} />
        }
      </div>
    )
  }
}

export default Forecast;