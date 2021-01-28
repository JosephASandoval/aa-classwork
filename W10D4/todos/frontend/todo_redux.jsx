import React from "react";
import ReactDOM from "react-dom";

function Root() {
  return (
    <h1>Todo's App</h1>
    
  )
}


document.addEventListener ("DOMContentLoaded", () => {
  const root = document.getElementById("container")
  ReactDOM.render (<Root />, root)
});