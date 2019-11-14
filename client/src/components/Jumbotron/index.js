import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 150,
        clear: "both",
        paddingTop: 50,
        textAlign: "center",
        backgroundColor: "black",
        opacity: "0.5"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
