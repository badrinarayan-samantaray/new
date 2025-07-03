import { useState } from "react";
import { backend } from "../agent";

function RegisterSupplier() {
  const [form, setForm] = useState({ name: "", location: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await backend.register_supplier(form.name, form.location);
      alert("✅ Supplier Registered Successfully!");
      setForm({ name: "", location: "" });
    } catch (err) {
      console.error("Error registering supplier:", err);
      alert("❌ Failed to register supplier.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Register Supplier</h4>
      <input
        className="form-control mb-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />
      <button className="btn btn-success" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default RegisterSupplier;
