import React, { useState } from "react";

const CertificationManager = () => {
  const [productId, setProductId] = useState("");
  const [certification, setCertification] = useState("");

  const handleAddCertification = () => {
    console.log("Adding certification:", certification, "to", productId);
    // TODO: Call backend add_certification
  };

  return (
    <div>
      <h2>Add Certification</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Certification Info"
        value={certification}
        onChange={(e) => setCertification(e.target.value)}
      />
      <button onClick={handleAddCertification}>Add</button>
    </div>
  );
};

export default CertificationManager;
