import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Signin }  from './pages';

// GIT HUB Personal access token // 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
// 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


 function App() {
  return (
    <Router>
        <Switch>
            <Route path={Routes.signIn}>
                <Signin />
            </Route>
            <Route path={Routes.signUp}>
                <p>I will be the sign up page</p>
            </Route>
            <Route path={Routes.browse}>
                <p>I will be the browse page</p>
            </Route>
            <Route path={Routes.home}>
                <Home />
            </Route>
        </Switch>
    </Router>
  )
}

export default App