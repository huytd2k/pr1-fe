import React from "react";
import { RouteConfig } from "react-router-config";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import DashBoard from "./dash-board";
import FrontPage from "./front-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";

// export const routes: RouteConfig[] = [
//   {
//     path: "/",
//     exact: true,
//     component: FrontPage,
//   },
//   {
//     path: "/login",
//     exact: true,
//     component: LoginPage,
//   },
//   {
//     path: "/dashboard",
//     component: DashBoard,
//   },
//   {
//     path: "/register",
//     exact: true,
//     component: RegisterPage,
//   },
// ];

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route  path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
