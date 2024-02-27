import React, { useState } from "react";
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
  const [showStock, setShowStock] = useState(false);
  const [search, setSearch] = useState("");
  const visibleProducts = products.filter((item) => {
    if(showStock && !item.stocked) {
      return false;
    }
    if(search && !item.name.includes(search)) {
      return false;
    }
    return true;
  })

  return (
    <div className="container">
      <SearchBar showStock={showStock} onStockChange={setShowStock} search={search} onSearchChange={setSearch} />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

export default App;