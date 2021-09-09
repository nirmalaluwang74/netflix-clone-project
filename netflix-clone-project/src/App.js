import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Signin, Signup, Browse }  from './pages';
import { seedDatabase } from './seed';


// GIT HUB Personal access token // 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
// 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
// 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
// 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
// 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


// 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


 function App() {
  return (
    <Router>
        <Switch>
            <Route path={Routes.signIn}>
                <Signin />
            </Route>
            <Route path={Routes.signUp}>
                <Signup />
            </Route>
            <Route path={Routes.browse}>
                <Browse />
            </Route>
            <Route path={Routes.home}>
                <Home />
            </Route>
        </Switch>
    </Router>
  )
}

export default App