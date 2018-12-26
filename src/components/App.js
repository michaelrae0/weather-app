import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import Forecast from './Forecast.js';

let Router = BrowserRouter;

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='container' >
          <Nav />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/forecast' component={Forecast} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;