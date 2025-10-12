// src/Profile.js
import React, { useEffect, useState } from "react";
import api from "./api";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/api/blogs/"); // example protected endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h3>Welcome</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {data.map((blog) => (
          <div
            key={blog.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              width: "300px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "#fff"
            }}
          >
            <img
              src={`http://localhost:8000${blog.image}`}
              alt={blog.title}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "4px" }}
            />
            <h2>{blog.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.Description }} />
            <p style={{ color: "#888", fontSize: "0.9em" }}>
              {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
