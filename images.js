
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
let v = 1;
export default function App() {
  // <div className="root">
  const img="https://picsum.photos/200/300";

  ReactDOM.render(
    <div>
      <h1 className="heading" spellcheck="false" contentEditable="true">
        my name is kunal{" "}
      </h1>
      <p>my lucky my number {v}</p>

      <div>
        <img
          className="set"
          src="https://cdn.wallpapersafari.com/35/17/Fv4R8B.jpg"
        />

        <img
          className="set"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSlC5NEH60CTgwgBpXYJTI37o3jNNQImqhw&usqp=CAU"
        />
        <img
          className="set"
          src="https://www.diamondparks.com/assets/images/events/image-2b3.jpg"
        />
        <img src={img + "?grayscale"}/>
      </div>
    </div>,
    document.getElementById("root")
  );
}
