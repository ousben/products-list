import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable(props) {
  const rows = [];
  let lastCatagory = null;

  for(let product of props.products) {
    if(product.category !== lastCatagory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />);
    }
    lastCatagory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default ProductTable;