import "./lib/main.scss";
import "./example.scss";
import React, { Fragment } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import IconDemo from "./lib/icon/icon-demo";
import ButtonDemo from "./lib/button/button-demo";
import DialogDemo from "./lib/dialog/dialog-demo";
const routes = [
  {
    path: "/icon",
    component: IconDemo
  },
  {
    path: "/button",
    component: ButtonDemo
  }
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App(): React.ReactElement {
  return (
    <Fragment>
      <header>PangUI</header>
      <Router>
        <article>
          <aside>
            <ul>
              <li>
                <Link to="/icon">icon</Link>
              </li>
              <li>
                <Link to="/button">button</Link>
              </li>
            </ul>
          </aside>
          <main>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              {/* <Icon name="loading" />
          <DialogDemo></DialogDemo> */}
            </Switch>
          </main>
        </article>
      </Router>
      <footer>developed by nanpangyou</footer>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
