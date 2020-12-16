import React from "react";
import "./styles.css";
import MyComponent from './MyComponent';
import Name from './Name';
import FunFacts from "./FunFacts";
import ThingILike from './ThingsILike';
import Example from './Example';

function App() {

  // const x = 4;
// export default function App() {
  return (
    <div className="App">
      <h1>Hello  World, my name is Big Scottie</h1>
      <h2>I like to code</h2>
<div className="myListItems">
      <MyComponent />
      <Name />
      <FunFacts />
      <ThingILike />
      <Example />
</div>
    </div>
  );
}
export default App;