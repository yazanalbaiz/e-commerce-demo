import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from '../containers/Home';
import Cart from '../containers/Cart';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Link to="/cart">
          <ToastContainer hideProgressBar />
        </Link>
      </div>
    );
  }
}

export default App;
