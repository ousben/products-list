import React from "react";

function CheckBox(props) {
  return (
    <div>
      <input type="checkbox" className="form-check-input" checked={props.checked} onChange={(e) => props.onChange(e.target.checked)} />
      <label className="form-check-label">{props.label}</label>
    </div>
  );
}

export default CheckBox;