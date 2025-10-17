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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {items.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "300px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={blog.image || PLACEHOLDER}
              alt={blog.title || "blog image"}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px", marginBottom: 12 }}
            />
            <h4 style={{ margin: "0 0 8px 0" }}>{blog.title}</h4>
            {/* <div style={{ flex: 1, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: blog.Description || "" }} /> */}
            <p style={{ color: "#888", fontSize: "0.9em", margin: 0 }}>
              {blog.date ? new Date(blog.date).toLocaleDateString() : ""}
            </p>
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
