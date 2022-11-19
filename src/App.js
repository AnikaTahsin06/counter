import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
