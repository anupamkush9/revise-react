import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import api from "./api";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const resp = await api.get(`/api/blogs/${id}/`);
        setBlog(resp.data);
      } catch (err) {
        setError("Failed to load blog.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <div className="container mt-4">
      <button className="btn btn-link mb-3" onClick={() => navigate(-1)}>← Back</button>

      <div className="card">
        {blog.image && (
          <img
            src={blog.image}
            className="card-img-top"
            alt={blog.title}
            style={{ maxHeight: 420, objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="text-muted">
            {blog.date ? new Date(blog.date).toLocaleString() : ""}
          </p>
          <div dangerouslySetInnerHTML={{ __html: blog.Description || "" }} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
