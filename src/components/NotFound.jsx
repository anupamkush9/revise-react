import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-3 fw-bold">404</h1>
        <p className="lead mb-4">Page not found.</p>
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Go to Home
          </button>
          <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
