import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("access_token")));

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "access_token" || e.key === "refresh_token") {
        setIsAuth(Boolean(localStorage.getItem("access_token")));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My Blog</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            {isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to="/blogs/add">Add Blog</Link>
              </li>
            )}
            {!isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
          {isAuth && (
            <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
