import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name:{loggedInUser.name}</p> */}
  <Container>
    <Router>
      <Header />
      <Switch>
        <PrivateRoute path="/product/:id">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  </Container>
  </UserContext.Provider>
  );
}

export default App;
