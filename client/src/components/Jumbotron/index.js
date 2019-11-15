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
        opacity: "0.8",
        border: "1px #2A878C solid",
        marginTop: "3%"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
