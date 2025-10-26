import { useState } from "react";
import { useNavigate } from "react-router";
import api from "./api";

function AddBlog() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", Description: "" });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    if (preview) URL.revokeObjectURL(preview);
    const url = URL.createObjectURL(f);
    setFile(f);
    setPreview(url);
  };

  const validate = () => {
    const err = {};
    if (!form.title || !form.title.trim()) err.title = "Title is required.";
    if (!form.Description || !form.Description.trim()) err.Description = "Description is required.";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("Description", form.Description);
      if (file) fd.append("image", file);
      const resp = await api.post("/api/blogs/", fd);
      // success -> go home
      navigate("/");
    } catch (err) {
      if (err.response && err.response.data) {
        // API returns field-wise errors or list; normalize to display
        setErrors(err.response.data);
      } else {
        setErrors({ non_field_errors: "Network or server error" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 800, marginTop: 24 }}>
      <h3>Add Blog</h3>
      {errors.non_field_errors && <div className="alert alert-danger">{errors.non_field_errors}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Description (HTML allowed)</label>
          <textarea
            name="Description"
            className={`form-control ${errors.Description ? "is-invalid" : ""}`}
            rows={6}
            value={form.Description}
            onChange={handleChange}
          />
          {errors.Description && <div className="invalid-feedback">{errors.Description}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Image (optional)</label>
          <input type="file" accept="image/*" className="form-control" onChange={handleFile} />
          {preview && <img src={preview} alt="preview" className="mt-3" style={{ width: "100%", maxHeight: 320, objectFit: "cover", borderRadius: 6 }} />}
          {errors.image && <div className="text-danger mt-2">{Array.isArray(errors.image) ? errors.image.join(", ") : errors.image}</div>}
        </div>

        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
