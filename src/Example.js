// import { useState } from 'react';
import React, {useState} from 'react';

const Example = () => {
  //  first variable is a getter
  //  second varialbe is a setter
const [count, setCount] = useState(0);

return (
  <div>
    <p> You clicked {count} times </p>
    <button onClick={() => setCount(count + 1)}>
    Click me
    </button>
  </div>
  )
}
export default Example