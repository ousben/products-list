import React from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";

function SearchBar() {
  return (
    <div>
      <div className="input-field">
        <Input value="" onChange={() => null} placeholder="Serach..."/>
        <CheckBox checked={false} id="stocked" onChange={() => null} label="Show available products"/>
      </div>
    </div>
  );
}

export default SearchBar;