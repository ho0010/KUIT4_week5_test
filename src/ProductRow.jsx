import React from "react";

const ProductRow = ({ product }) => {
  // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
