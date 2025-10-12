import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import api from "./api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/api/token/", { email, password });
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg rounded-4 overflow-hidden" style={{ maxWidth: 980, width: "94%" }}>
        <div className="row g-0">
          <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center" style={{ background: "linear-gradient(135deg,#6f42c1,#20c997)", color: "#fff" }}>
            <div className="text-center p-4">
              <h2 className="fw-bold">Welcome Back</h2>
              <p className="mb-0">Sign in to manage your blogs and create new posts.</p>
            </div>
          </div>

          <div className="col-md-7">
            <div className="p-5">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "#eef2ff",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                    }}
                  >
                    <span style={{ color: "#0d6efd", fontWeight: 700 }}>MB</span>
                  </div>
                  <div>
                    <h3 className="fw-bold text-primary mb-0">My Blog</h3>
                    <small className="text-muted">Sign in to continue</small>
                  </div>
                </div>
              </div>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold text-start d-block">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold text-start d-block">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <Link to="/forgot-password" className="text-decoration-none small">Forgot password?</Link>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm" disabled={loading}>
                  {loading ? "Signing in..." : "Login"}
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted mb-0">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-primary fw-semibold text-decoration-none">
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;
