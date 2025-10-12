import { useState } from "react";
import { useNavigate } from "react-router"; // ✅ corrected import
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
        // registration success -> go to login
        navigate("/login");
      } else {
        setErrors({ non_field_errors: "Unexpected response" });
      }
    } catch (err) {
      if (err.response && err.response.data) {
        // API validation errors expected as an object
        setErrors(err.response.data);
      } else {
        setErrors({ non_field_errors: "Network or server error" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 600, marginTop: 24 }}>
      <h2>Sign Up</h2>
      {errors.non_field_errors && (
        <div className="alert alert-danger">{errors.non_field_errors}</div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password1"
            type="password"
            className={`form-control ${errors.password1 ? "is-invalid" : ""}`}
            value={form.password1}
            onChange={handleChange}
          />
          {errors.password1 && <div className="invalid-feedback">{errors.password1}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            name="password2"
            type="password"
            className={`form-control ${errors.password2 ? "is-invalid" : ""}`}
            value={form.password2}
            onChange={handleChange}
          />
          {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input name="first_name" className="form-control" value={form.first_name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input name="last_name" className="form-control" value={form.last_name} onChange={handleChange} />
        </div>

        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
