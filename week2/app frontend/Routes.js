import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import SignInPage from './Components/SignInPage';
import SignUpPage from './Components/SignUpPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/homepage' exact component={Homepage} />
        <Route path='/signin' exact component={SignInPage} />
        <Route path='/signup' exact component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
