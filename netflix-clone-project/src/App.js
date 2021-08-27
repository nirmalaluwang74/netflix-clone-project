import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home';

// GIT HUB Personal access token // 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

 function App() {
  return (
    <Router>
        <Switch>
            <Route path="/signin">
                <p>I will be the sign in page</p>
            </Route>
            <Route path="/signup">
                <p>I will be the sign up page</p>
            </Route>
            <Route path="/browse">
                <p>I will be the browse page</p>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  )
}

export default App