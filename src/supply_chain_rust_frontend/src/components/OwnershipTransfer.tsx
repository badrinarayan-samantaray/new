import React, { useState } from "react";

const OwnershipTransfer = () => {
  const [productId, setProductId] = useState("");
  const [newOwner, setNewOwner] = useState("");

  const handleTransfer = () => {
    console.log("Transferring ownership of", productId, "to", newOwner);
    // TODO: Call backend transfer function
  };

  return (
    <div>
      <h2>Transfer Product Ownership</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Owner"
        value={newOwner}
        onChange={(e) => setNewOwner(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default OwnershipTransfer;
