import { useState } from "react";
import { backend } from "../agent";

function RegisterProduct() {
  const [form, setForm] = useState({ name: "", origin: "", destination: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await backend.register_product(
        form.name,
        form.origin,
        form.destination,
        BigInt(Date.now())
      );
      alert("✅ Product Registered Successfully!");
      setForm({ name: "", origin: "", destination: "" }); // reset
    } catch (err) {
      console.error("Error registering product:", err);
      alert("❌ Failed to register product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Register Product</h4>
      <input
        className="form-control mb-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Origin"
        value={form.origin}
        onChange={(e) => setForm({ ...form, origin: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Destination"
        value={form.destination}
        onChange={(e) => setForm({ ...form, destination: e.target.value })}
      />
      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default RegisterProduct;
