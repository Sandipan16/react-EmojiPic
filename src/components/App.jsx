import React from "react";
import Entry from "./Entry";
import List from "../emoji";
import "../styles.css";
var i = 1;
export default function App() {
  return (
    <div className="App">
      <h1>emojipedia</h1>
      <h2>Beautiful fantastic picture of emojis</h2>
      {List.map(function(img) {
        return <Entry key={i++} img={img} />;
      })}
    </div>
  );
}
