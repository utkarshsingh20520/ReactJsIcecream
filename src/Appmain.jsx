import React from 'react';
import {Route, Switch } from 'react-router-dom';
import App from './App';
import Userlog from './components/Auth/Userlog';
import Register from './components/Auth/Register';
import Contact from './components/Contact/Contact';
import Error from './Error';

const Appmain = () => {
    return(
       <Switch>
          <Route exact path = "/" component={App}/>
          <Route exact path = "/login" component={Userlog}/>
          <Route exact path = "/register" component={Register}/>
          <Route exact path = "/contact" component={Contact}/>
          <Route component={Error}/>
        </Switch>
    );
}

export default Appmain;