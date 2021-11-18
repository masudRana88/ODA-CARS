import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./Hooks/AuthProvider";
import PrivateRouter from "./Hooks/PrivateRoute";
import Dashbord from "./Pages/Dashbord/Dashbord/Dashbord";
import HomePage from './Pages/Home/Home/HomePage';
import LoginPage from "./Pages/Login/LoginPage/LoginPage";
import SinginPage from "./Pages/Login/SinginPage/SinginPage";
import NotFount from "./Pages/NotFount/NotFount";
import Products from "./Pages/Products/Products/Products";
import Purchase from "./Pages/Purchase/Purchase";

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
          <PrivateRouter path="/dashbord">
            <Dashbord />
          </PrivateRouter>
          <Route exact path="/Login">
            <LoginPage />
          </Route>
          <Route exact path="/singup">
            <SinginPage />
          </Route>
          <PrivateRouter path="/purchase/:idName">
            <Purchase/>
          </PrivateRouter>
          <Route exact path="*">
            <NotFount />
          </Route>
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
