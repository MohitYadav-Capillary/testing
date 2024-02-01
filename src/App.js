import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        <button onClick={() => setCount((val) => val + 1)}>Increment</button>
        <button
          onClick={() => setCount((val) => (val - 1 >= 0 ? val - 1 : val))}
        >
          Decrement
        </button>
      </div>
      <h2 style={{ marginTop: "20px", alignItems: "center" }}>
        Counter Value is {count}
      </h2>
    </div>
  );
}

export default App;
