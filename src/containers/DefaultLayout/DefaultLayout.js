import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions'

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
import navHR from '../../navHR';
import navEmp from '../../navEmp';

// routes config
import routes from '../../routes';
import hrroutes from '../../hrroutes';
import emproutes from '../../emproutes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userAccess: '',
      routes: ''
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut = (e) => {
    e.preventDefault()
    this.props.history.push('/login')
    this.props.logout();
  }

  componentDidMount() {
    //  this.setState({ userAccess: this.props.data.userData.role })

    if (this.props.data.userData.role == 'Admin') {
      this.setState({ routes: routes })
    }
    if (this.props.data.userData.role == 'Hr') {
      this.setState({ routes: hrroutes })
    }
    if (this.props.data.userData.role == 'Employee') {
      this.setState({ routes: emproutes })
    }
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          {this.props.data.token && this.props.data.token.length &&
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <Suspense>
                {this.props.data.userData.role === 'Admin' &&
                  <AppSidebarNav navConfig={navigation} {...this.props} router={router} />
                }
                {this.props.data.userData.role === 'Hr' &&
                  <AppSidebarNav navConfig={navHR} {...this.props} router={router} />
                }
                {this.props.data.userData.role === 'Employee' &&
                  <AppSidebarNav navConfig={navEmp} {...this.props} router={router} />
                }
              </Suspense>
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
          }
          <main className="main" style={{ backgroundColor: "white" }}>
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {this.state.routes.length > 0 && this.state.routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                      <route.component {...props} />
                    )} />)
                      : (null);
                  },
                  )}
                  <Route
                    path="/"
                    render={() => (
                      this.props.data.token && this.props.data.token.length ? (
                        <Redirect to="/dashboard" />
                      ) : (
                          <Redirect to="/login" />
                        )
                    )}
                  />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>

            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  const data = reduxState.auth;
  return { data };
};

export default connect(mapStateToProps, { logout })(DefaultLayout);
