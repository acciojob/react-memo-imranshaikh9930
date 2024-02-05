import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [memoInput, setMemoInput] = useState("");

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const addItem = () => {
    if (memoInput.length > 5) {
      setTodos((t) => [...t, memoInput]);
      setMemoInput("");
    } else {
      alert("Please enter a text with more than 5 characters.");
    }
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
       <span id="incr-cnt">Count: {count}</span> 
        <button id="add-todo-btn" onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <div>
        <input
        id="skill-input"
          type="text"
          value={memoInput}
          onChange={(e) => setMemoInput(e.target.value)}
          placeholder="Type here..."
        />
        <button onClick={addItem}>Submit</button>
      </div>
    </div>
  );
}

export default App;
