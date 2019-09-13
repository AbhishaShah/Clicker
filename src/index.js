import React, { useState } from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

import "./styles.css";

function ReactCounter() {
  const [count, setCount] = useState(0);

  const Click = name => {
    if (name.indexOf("Plus") !== -1) {
      return setCount(count + 1);
    } else if (name.indexOf("Minus") !== -1) {
      return setCount(count - 1);
    }
    return setCount(0);
  };

  return (
    <div>
      <header>
        <h2 className="title">React Counter</h2>
      </header>
      <Counter count={count} OnClickHandle={Click} />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ReactCounter />, rootElement);
