import React from "react";
import "./style.scss";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{
        float: "right",
        margin: 10,
        borderRadius: "5px",
        border: "1px #2a878c solid",
        backgroundColor: "black",
        opacity: "0.8",
        color: "#2a878c"
      }}
      // className="btn btn-success"
      outline
      color="secondary"
    >
      {props.children}
    </button>
  );
}
