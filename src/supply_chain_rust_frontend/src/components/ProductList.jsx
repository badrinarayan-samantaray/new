import { useEffect, useState } from "react";
import { backend } from "../agent";

function ProductList() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const result = await backend.get_products();
      setProducts(result);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h4>Product List</h4>
      <table className="table table-striped">
        <thead><tr><th>Name</th><th>Origin</th><th>Destination</th><th>Timestamp</th></tr></thead>
        <tbody>
          {products.map(([name, origin, destination, timestamp], idx) => (
            <tr key={idx}>
              <td>{name}</td>
              <td>{origin}</td>
              <td>{destination}</td>
              <td>{new Date(Number(timestamp)).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
