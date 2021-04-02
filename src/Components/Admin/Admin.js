import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import Manege from "../Manege/Manege";
import './Admin.css'

const Admin = () => {
  const routes = [
    {
      path: "/addBook",
      sidebar: () =>  <div>Add Book!</div>,
      main: () =>  <AddBook></AddBook>
    },
    {
      path: "/manageBooks",
      sidebar: () => <div>Manage books!</div>,
      main: () => <Manege></Manege>
    },
    {
      path: "/editBook",
      sidebar: () => <div>sdf</div>,
      main: () => <h1>See You Again</h1>
    }
  ];


  return (
    <>
        <h2>Admin</h2>
    <div>
        <Router>
          <div  className="row">
            <div  className=" col-sm-4">
            <aside className="sidebar"
              style={{
                padding: "100px 100px",
                // width: "40%",
                background: "#f0f0f0"
                
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li className="list">
                  <Link to="/addBook">Add Book</Link>
                </li>
                <li className="list">
                  <Link to="/manageBooks">Manage Books</Link>
                </li>
                <li className="list">
                  <Link to="/editBook">Edit Book</Link>
                </li>
              </ul>

              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                  />
                ))}
              </Switch>
            </aside>
            </div>
            <div className="col-sm-6 half" style={{ padding: "10px" }}>
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </Router>

    </div>





    </>
  );

};

export default Admin;