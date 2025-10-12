import { useState } from "react";
import { useNavigate, Link } from "react-router"; // ✅ corrected import
import api from "./api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/token/", { email, password });
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">My Blog</h2>
          <p className="text-muted mb-0">Sign in to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
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
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
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
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="/forgot-password" className="text-decoration-none small">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 shadow-sm"
          >
            Login
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
  );
}

export default Login;
