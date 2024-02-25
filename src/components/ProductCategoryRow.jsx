import React from "react";

function ProductCategoryRow(props) {
  return (
    <tr>
      <td colSpan={2}><strong>{props.name}</strong></td>
    </tr>
  );
}

export default ProductCategoryRow;