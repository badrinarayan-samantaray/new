import React, { useState } from "react";

const ProductRegistration = () => {
  const [productName, setProductName] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const handleRegister = () => {
    console.log("Registering:", { productName, manufacturer });
    // TODO: Call backend method to register product
  };

  return (
    <div>
      <h2>Register Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Manufacturer"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default ProductRegistration;
