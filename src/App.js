import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

import Login from "./screens/Login/Login";
import "./App.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

const ProtectedRoute = props =>
  props.isAllowed ? <Route {...props} /> : <Redirect to="/login" />;
const LoginRoute = props =>
  !localStorage.getItem("token") ? (
    <Route {...props} />
  ) : (
    <Redirect to="/index" />
  );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Switch>
              <LoginRoute path="/login" component={Login} />
              {/* <ProtectedRoute
                isAllowed={localStorage.getItem("token")}
                path="/"
                component={IndexPage}
              /> */}
              <Redirect from="/" exact to="/index" />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
