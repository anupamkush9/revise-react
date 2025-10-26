import styles from "./About.module.css";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #007bff, #6610f2)",
          color: "#fff",
        }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to <span className="text-warning">My Blog</span>
        </h1>
        <p className="lead">
          Discover, share, and connect through the power of blogging.
        </p>
      </div>

      {/* Why Blog Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h3 className="fw-bold text-secondary">Why Blog?</h3>
            <p className="text-muted">
              Blogging is a powerful way to connect with others, share knowledge, and inspire creativity. 
              Our platform is designed to make blogging easy and accessible for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="fw-bold text-secondary text-center mb-4">Features</h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className={`card shadow-sm h-100 ${styles.featureCard}`}>
                <div className="card-body d-flex align-items-center">
                  <i className="bi bi-pencil-square text-primary fs-1 me-3"></i>
                  <div>
                    <h5 className="card-title">Write and Publish</h5>
                    <p className="card-text text-muted">
                      Create and share your own blogs with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`card shadow-sm h-100 ${styles.featureCard}`}>
                <div className="card-body d-flex align-items-center">
                  <i className="bi bi-chat-left-text text-primary fs-1 me-3"></i>
                  <div>
                    <h5 className="card-title">Engage with Others</h5>
                    <p className="card-text text-muted">
                      Read and interact with blogs from other users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`card shadow-sm h-100 ${styles.featureCard}`}>
                <div className="card-body d-flex align-items-center">
                  <i className="bi bi-gear text-primary fs-1 me-3"></i>
                  <div>
                    <h5 className="card-title">Edit and Manage</h5>
                    <p className="card-text text-muted">
                      Update or delete your blogs anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`card shadow-sm h-100 ${styles.featureCard}`}>
                <div className="card-body d-flex align-items-center">
                  <i className="bi bi-shield-lock text-primary fs-1 me-3"></i>
                  <div>
                    <h5 className="card-title">Secure Platform</h5>
                    <p className="card-text text-muted">
                      Enjoy a secure and user-friendly blogging experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #6610f2, #007bff)",
          color: "#fff",
        }}
      >
        <h3 className="fw-bold">Get Started Today</h3>
        <p className="lead">
          Sign up now and start your blogging journey. Share your thoughts, connect with others, and make your voice heard.
        </p>
        <a href="/signup" className="btn btn-warning btn-lg mt-3">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default About;
