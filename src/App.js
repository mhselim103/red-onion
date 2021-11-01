import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Components/Home/Home/Home";
import LogIn from "./Components/Login/Login";
import Header from "./Components/Shared/Header/Header";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
