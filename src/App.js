import React from "react";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import './App.css';

const products = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
  {category: "Grocery", price: "$7", stocked: true, name: "Detergent"},
  {category: "Grocery", price: "$4", stocked: false, name: "Sweeper"}
];

function App() {
  return (
    <div className="container">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default App;