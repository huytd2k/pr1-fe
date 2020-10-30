import { Container } from "@material-ui/core";
import React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DashBoard from "./dash-board";
import FrontPage from "./front-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";

export const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: FrontPage,
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/dashboard",
    exact: true,
    component: DashBoard,
  },
  {
    path: "/register",
    exact: true,
    component: RegisterPage,
  },
];

function App() {
  return (
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  );
}

export default App;
