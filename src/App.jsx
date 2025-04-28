import { useState, useEffect } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { Routes, Route, NavLink } from "react-router";  // <== small correction here also

function App() {
  return (

      <div>        
        <nav className=" navbar navbar-expand-lg bg-body-tertiary bg-primary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">List Users</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/add">Add Users</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </div>
  );
}

export default App;
