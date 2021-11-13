import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./Hooks/AuthProvider";
import Dashbord from "./Pages/Dashbord/Dashbord/Dashbord";
import HomePage from './Pages/Home/Home/HomePage';
import LoginPage from "./Pages/Login/LoginPage/LoginPage";
import SinginPage from "./Pages/Login/SinginPage/SinginPage";
import Products from "./Pages/Products/Products/Products";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/allcars">
            <Products />
          </Route>
          <Route path="/dashbord">
            <Dashbord />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route path="/singup">
            <SinginPage />
          </Route>
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
