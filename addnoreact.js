import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  let v=1;
  // do not use return () in the render method
     
   
   // <div className="root">
   ReactDOM.render(
   <div>
      
      <h1 className="heading">HELLO ANGELA</h1>
      <h3>my lucky my number {v}</h3>
      
    </div>,
     document.getElementById("root")
   );
  
   //document.getElementById("root"));
  //)


 
 }
