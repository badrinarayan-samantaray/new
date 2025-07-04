import React, { useState } from "react";

const ProductSearch = () => {
  const [productId, setProductId] = useState("");

  const handleSearch = () => {
    console.log("Searching for Product ID:", productId);
    // TODO: Call backend method to fetch product
  };

  return (
    <div>
      <h2>Search Product</h2>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ProductSearch;
