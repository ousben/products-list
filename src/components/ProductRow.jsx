import React from "react";

function ProductRow(props) {
  const productStyle = props.product.stocked ? undefined : {color: "red"}

  return (
    <tr>
      <td style={productStyle}>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
}

export default ProductRow;