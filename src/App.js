import Navigation from './components/Navigation/Navigation'
import StartInstance from './components/StartInstance/StartInstance'
import StopInstance from './components/StopInstance/StopInstance'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
          <Navigation />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/StartInstance" component={StartInstance} />
          <Route exact path="/StopInstance" component={StopInstance} />
          </Switch>
      </div>
    </Router>
  )
};

export default App;
