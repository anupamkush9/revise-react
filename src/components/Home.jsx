// src/Profile.js
import React, { useEffect, useState } from "react";
import api from "./api";

function Home() {
  const [items, setItems] = useState([]); // hold results array
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const [pageInfo, setPageInfo] = useState({ page: 1, total_pages: 1, count: 0 });

  const PLACEHOLDER =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='360'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial' font-size='20'%3ENo image%3C/text%3E%3C/svg%3E";

  const fetchPage = async (url = "/api/blogs/") => {
    setLoading(true);
    try {
      const response = await api.get(url);
      const payload = response.data || {};
      const results = Array.isArray(payload.results) ? payload.results : [];
      // append new results
      setItems((prev) => [...prev, ...results]);
      setNextUrl(payload.next || null);
      setPageInfo({
        page: payload.page || 1,
        total_pages: payload.total_pages || 1,
        count: payload.count || results.length,
      });
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // initial load
    fetchPage();
  }, []);

  if (!items.length && loading) return <p>Loading...</p>;
  if (!items.length && !loading) return <p>No blogs found.</p>;

  return (
    <div>
      <h3>Welcome</h3>

      {/* helper CSS to get 5 equal columns on wide screens; falls back responsively */}
      <style>{`
        .col-5th { flex: 0 0 20%; max-width: 20%; padding-left: 0.5rem; padding-right: 0.5rem; }
        @media (max-width: 1199.98px) { .col-5th { flex: 0 0 25%; max-width: 25%; } } /* 4 cols */
        @media (max-width: 991.98px)  { .col-5th { flex: 0 0 33.333%; max-width: 33.333%; } } /* 3 cols */
        @media (max-width: 767.98px)  { .col-5th { flex: 0 0 50%; max-width: 50%; } } /* 2 cols */
        @media (max-width: 575.98px)  { .col-5th { flex: 0 0 100%; max-width: 100%; } } /* 1 col */
      `}</style>

      <div className="row g-3" style={{ marginLeft: "-0.5rem", marginRight: "-0.5rem" }}>
        {items.map((blog) => (
          <div key={blog.id} className="col-5th">
            <div className="card h-100">
              <img
                src={blog.image || PLACEHOLDER}
                className="card-img-top"
                alt={blog.title || "blog image"}
                style={{ height: 180, objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ marginBottom: 8 }}>{blog.title}</h5>
                <p className="text-muted mt-auto mb-0" style={{ fontSize: 14 }}>
                  {blog.date ? new Date(blog.date).toLocaleDateString() : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: "center" }}>
        {nextUrl ? (
          <button className="btn btn-outline-primary" onClick={() => fetchPage(nextUrl)} disabled={loading}>
            {loading ? "Loading..." : "Load more"}
          </button>
        ) : (
          <small className="text-muted">
            Page {pageInfo.page} of {pageInfo.total_pages} — {pageInfo.count} results on this page
          </small>
        )}
      </div>
    </div>
  );
}

export default Home;
