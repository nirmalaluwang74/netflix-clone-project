import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as Routes from './constants/routes';
import { Home, Signin, Signup, Browse }  from './pages';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

 function App() {
    const { user } = useAuthListener();

  return (
    <Router>
        <Switch>
            <IsUserRedirect user={user} loggedInPath={Routes.browse} path={Routes.signIn}>
                <Signin />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={Routes.browse} path={Routes.signUp}>
                <Signup />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={Routes.browse}>
                <Browse />
            </ProtectedRoute>
            <IsUserRedirect user={user} loggedInPath={Routes.browse} path={Routes.home}>
                <Home />
            </IsUserRedirect>
        </Switch>
    </Router>
  )
}

export default App