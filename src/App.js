import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch,Redirect,BrowserRouter } from 'react-router-dom';
import './scss/style.scss';

import { isLogin } from './libs/utils.js';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
/*const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));*/

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            {isLogin() ? (
            <Fragment>
                  <Redirect from="*" to="/login" />
                  <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                {}
                </Fragment>
                ) : (
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              )}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
