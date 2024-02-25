import React from "react";

function Input(props) {
  return (
    <div>
      <input type="text" className="form-control" value={props.value} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
}

export default Input;