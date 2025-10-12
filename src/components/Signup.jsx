import { useState } from "react";
import { useNavigate, Link } from "react-router";
import api from "./api";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  // uniform input style used across the form for consistent look
  const uniformInputStyle = {
    borderRadius: 12,
    height: 52,
    padding: "0.625rem 1rem",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
  };

  const validateClient = () => {
    const err = {};
    if (!form.email.trim()) err.email = "Email is required.";
    if (!form.password1) err.password1 = "Password is required.";
    if (form.password1 && form.password2 && form.password1 !== form.password2) {
      err.password2 = "Passwords do not match.";
    }
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const clientErr = validateClient();
    if (Object.keys(clientErr).length) {
      setErrors(clientErr);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        email: form.email,
        password1: form.password1,
        password2: form.password2,
        first_name: form.first_name,
        last_name: form.last_name,
      };
      const resp = await api.post("/api/signup/", payload);
      if (resp.status === 201) {
        navigate("/login");
      } else {
        setErrors({ non_field_errors: "Unexpected response" });
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      } else {
        setErrors({ non_field_errors: "Network or server error" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg rounded-4 overflow-hidden" style={{ maxWidth: 980, width: "94%" }}>
        <div className="row g-0">
          <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center" style={{ background: "linear-gradient(135deg,#0d6efd,#6610f2)", color: "#fff" }}>
            <div className="text-center p-4">
              <h2 className="fw-bold">Create Account</h2>
              <p className="mb-0">Join to publish and manage your blogs.</p>
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
                    <span style={{ color: "#0d6efd", fontWeight: 700 }}>SB</span>
                  </div>
                  <div>
                    <h3 className="fw-bold text-primary mb-0">Sign Up</h3>
                    <small className="text-muted">Create your account</small>
                  </div>
                </div>
              </div>

              {errors.non_field_errors && <div className="alert alert-danger">{errors.non_field_errors}</div>}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-start d-block">Email</label>
                  <input
                    name="email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={form.email}
                    onChange={handleChange}
                    style={uniformInputStyle}
                    placeholder="name@example.com"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold text-start d-block">First Name</label>
                    <input name="first_name" className="form-control" value={form.first_name} onChange={handleChange} style={uniformInputStyle} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold text-start d-block">Last Name</label>
                    <input name="last_name" className="form-control" value={form.last_name} onChange={handleChange} style={uniformInputStyle} />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-start d-block">Password</label>
                  <input
                    name="password1"
                    type="password"
                    className={`form-control ${errors.password1 ? "is-invalid" : ""}`}
                    value={form.password1}
                    onChange={handleChange}
                    style={uniformInputStyle}
                    placeholder="Enter a strong password"
                  />
                  {errors.password1 && <div className="invalid-feedback">{errors.password1}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-start d-block">Confirm Password</label>
                  <input
                    name="password2"
                    type="password"
                    className={`form-control ${errors.password2 ? "is-invalid" : ""}`}
                    value={form.password2}
                    onChange={handleChange}
                    style={uniformInputStyle}
                    placeholder="Repeat your password"
                  />
                  {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
                </div>

                <button className="btn btn-primary w-100 mb-3" type="submit" disabled={submitting}>
                  {submitting ? "Signing up..." : "Create account"}
                </button>

                <div className="text-center">
                  <p className="text-muted mb-0">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary fw-semibold text-decoration-none">Sign in</Link>
                  </p>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
