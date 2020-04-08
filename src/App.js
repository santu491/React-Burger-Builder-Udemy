import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <BurgerBuilder />
        <Checkout/> */}
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path ='/' exact component={BurgerBuilder} />
          <Route path="/auth" exact component={Auth} />
          {/* <R */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
