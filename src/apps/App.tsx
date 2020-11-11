import { ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client/core/ApolloClient";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import DashBoard from "./dash-board";
import FrontPage from "./front-page";
import LoginPage from "./login-page";
import RegisterPage from "./register-page";
import { setContext } from '@apollo/client/link/context';
import Cookies from "js-cookie";
import {createUploadLink} from 'apollo-upload-client'
import FilePage from "./file-page";

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
const httpLink = createUploadLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    mutate: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },

});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/file/:id">
            <FilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
