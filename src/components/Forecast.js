import React from 'react';
import queryString from  'query-string';

import api from '../util/api.js';
import Loading from './Loading.js';
import Week from './Week.js';

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
  
  apiRequest = city => {
    api.fiveDayWeather(city)
      .then(function(data) {
        // console.log(data);
        this.setState({ 
          isLoading: false,
          city,
          data
        })
      }.bind(this));
  } 
  getCity = URI => {
    let location = queryString.parse(URI).city;
    let city = location.split(',')[0]
    return city[0].toUpperCase() + city.slice(1, city.length);

  }
  componentDidMount = () => {
    let city = this.getCity(this.props.location.search);
    this.apiRequest(city);
  }
  componentWillReceiveProps = nextProps => {
    let city = this.getCity(nextProps.location.search);
    this.apiRequest(city);
  }

  render() {
    let data = this.state.data;
    
    return (
      <div>
        {this.state.isLoading && <Loading />}

        {data &&
          <Week data={data} city={this.state.city} history={this.props.history} />
        }
      </div>
    )
  }
}

export default Forecast;