import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '../src/redux/store/store'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
                <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
                <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
              </Switch>
            </React.Suspense>
          </HashRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
