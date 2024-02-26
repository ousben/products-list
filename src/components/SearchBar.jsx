import React from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";

function SearchBar(props) {
  return (
    <div>
      <div className="input-field">
        <Input value={props.search} onChange={props.onSearchChange} placeholder="Serach..."/>
        <CheckBox checked={props.showStock} id="stocked" onChange={props.onStockChange} label="Show available products"/>
      </div>
    </div>
  );
}

export default SearchBar;