import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import api from "./api";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // edit state
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({ title: "", Description: "", image: "" });
  const [editFile, setEditFile] = useState(null); // new: selected File object
  const [previewUrl, setPreviewUrl] = useState(""); // new: local preview URL
  const [saving, setSaving] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const startEdit = () => {
    setFormErrors({});
    setEditForm({
      title: blog.title || "",
      Description: blog.Description || "",
      image: blog.image || "",
    });
    setEditFile(null);
    setPreviewUrl("");
    setEditMode(true);
  };

  const cancelEdit = () => {
    setFormErrors({});
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl("");
    }
    setEditMode(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((s) => ({ ...s, [name]: value }));
  };

  // handle file selection
  const handleFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    // revoke previous preview if any
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    const url = URL.createObjectURL(f);
    setEditFile(f);
    setPreviewUrl(url);
    // set editForm.image to preview so preview area shows immediately; actual upload happens on Save
    setEditForm((s) => ({ ...s, image: url }));
  };

  const validateForm = () => {
    const err = {};
    if (!editForm.title || !editForm.title.trim()) err.title = "Title is required.";
    // optional: validate image URL format if provided
    // if a user entered an image string (not using file), validate it
    if (!editFile && editForm.image && !/^https?:\/\//.test(editForm.image) && !editForm.image.startsWith("/")) {
      err.image = "Image should be a valid URL or path.";
    }
    return err;
  };

  const handleSave = async () => {
    const errs = validateForm();
    if (Object.keys(errs).length) {
      setFormErrors(errs);
      return;
    }
    setSaving(true);
    try {
      let resp;
      if (editFile) {
        const fd = new FormData();
        fd.append("title", editForm.title);
        fd.append("Description", editForm.Description);
        // append file under expected field name e.g. "image"
        fd.append("image", editFile);
        resp = await api.patch(`/api/blogs/${id}/`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        const payload = {
          title: editForm.title,
          Description: editForm.Description,
          image: editForm.image || null,
        };
        resp = await api.patch(`/api/blogs/${id}/`, payload);
      }
      setBlog(resp.data);
      // cleanup preview URL (if we used one)
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl("");
      }
      setEditFile(null);
      setEditMode(false);
    } catch (err) {
      console.error("Save failed:", err);
      setError("Failed to save changes.");
    } finally {
      setSaving(false);
    }
  };

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

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    setDeleting(true);
    try {
      await api.delete(`/api/blogs/${id}/`);
      // optionally show a toast here
      navigate("/");
    } catch (err) {
      console.error("Delete failed:", err);
      setError("Failed to delete blog.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!blog) return <p>No blog found.</p>;

  return (
    <div className="container mt-4">
      <button className="btn btn-link mb-3" onClick={() => navigate(-1)}>← Back</button>

      <div className="card">
        {blog.image && !editMode && (
          <img
            src={blog.image}
            className="card-img-top"
            alt={blog.title}
            style={{ maxHeight: 420, objectFit: "cover" }}
          />
        )}

        <div className="card-body">
          {!editMode ? (
            <>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h2 className="card-title mb-0">{blog.title}</h2>
                <div>
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={startEdit}>
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    {deleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>

              <p className="text-muted">
                {blog.date ? new Date(blog.date).toLocaleString() : ""}
              </p>
              <div dangerouslySetInnerHTML={{ __html: blog.Description || "" }} />
            </>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">Edit Blog</h4>
                <div>
                  <button className="btn btn-secondary btn-sm me-2" onClick={cancelEdit} disabled={saving}>
                    Cancel
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={handleSave} disabled={saving}>
                    {saving ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>

              {/* Image preview when present */}
              {editForm.image ? (
                <img
                  src={editForm.image}
                  alt="preview"
                  className="mb-3"
                  style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 6 }}
                />
              ) : blog.image ? (
                <img
                  src={blog.image}
                  alt="preview"
                  className="mb-3"
                  style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 6 }}
                />
              ) : null}

              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  name="title"
                  className={`form-control ${formErrors.title ? "is-invalid" : ""}`}
                  value={editForm.title}
                  onChange={handleEditChange}
                />
                {formErrors.title && <div className="invalid-feedback">{formErrors.title}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Image URL / Path</label>
                <input
                  name="image"
                  className={`form-control ${formErrors.image ? "is-invalid" : ""}`}
                  value={editForm.image}
                  onChange={handleEditChange}
                  placeholder="http://... or /media/..."
                />
                {formErrors.image && <div className="invalid-feedback">{formErrors.image}</div>}
                <div className="form-text mt-2">Or upload a file:</div>
                <input type="file" accept="image/*" className="form-control mt-2" onChange={handleFileChange} />
                {previewUrl && (
                  <div className="mt-3">
                    <img src={previewUrl} alt="preview" style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 6 }} />
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Description (HTML allowed)</label>
                <textarea
                  name="Description"
                  className="form-control"
                  rows={8}
                  value={editForm.Description}
                  onChange={handleEditChange}
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
