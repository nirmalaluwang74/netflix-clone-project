import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Signin, Signup, Browse }  from './pages';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectdRoute } from './helper/routes';


 function App() {
    const { user } = useAuthListener();

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