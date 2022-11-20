import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  //let v=1;
  const n="kunal";
  const r="vaishnav"
  
  let cd=new Date();
  let  num=cd.getFullYear();

  // do not use return () in the render method
     
   
   // <div className="root">
   ReactDOM.render(
   <div>
      
      <h1>{n}  {r}</h1>
      <h3>my lucky my number {Math.floor(Math.random() *10)}</h3>
      <p>the current year {num} </p>
      


      
    </div>,
     document.getElementById("root")
   );
  
  


 
 }
