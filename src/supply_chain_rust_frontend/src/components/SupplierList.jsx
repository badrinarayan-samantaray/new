import { useEffect, useState } from "react";
import { backend } from "../agent";

function SupplierList() {
  const [suppliers, setSuppliers] = useState([]);

  const loadSuppliers = async () => {
    try {
      const result = await backend.get_suppliers();
      setSuppliers(result);
    } catch (err) {
      console.error("Error loading suppliers:", err);
    }
  };

  useEffect(() => {
    loadSuppliers();
  }, []);

  return (
    <div>
      <h4>Supplier List</h4>
      <table className="table table-bordered">
        <thead><tr><th>Name</th><th>Location</th></tr></thead>
        <tbody>
          {suppliers.map(([name, location], i) => (
            <tr key={i}><td>{name}</td><td>{location}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SupplierList;
