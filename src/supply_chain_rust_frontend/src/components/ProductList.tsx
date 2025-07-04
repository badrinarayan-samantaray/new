import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    console.log("Fetching product list...");
    // TODO: Replace with backend call
    setProducts([
      { id: "P001", name: "Item A", manufacturer: "Company A" },
      { id: "P002", name: "Item B", manufacturer: "Company B" },
    ]);
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} by {p.manufacturer} (ID: {p.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
