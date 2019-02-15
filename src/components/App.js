import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import Forecast from './Forecast.js';
import Details from './Details.js';

let Router = BrowserRouter;

class App extends React.Component {
  // Routing component
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='container' >
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;