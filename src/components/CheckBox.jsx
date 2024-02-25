import React from "react";

function CheckBox(props) {
  return (
    <div className="form-check">
      <input type="checkbox" id={props.id} className="form-check-input" checked={props.checked} onChange={(e) => props.onChange(e.target.checked)} />
      <label className="form-check-label">{props.label}</label>
    </div>
  );
}

export default CheckBox;