import React,{useState} from "react";


function App(){
    const [todos, setTodos] = useState(['New todo']);
    const [count, setCount] = useState(0);
    const [memoInput, setMemoInput] = useState('');
  
    const addTodo = () => {
      setTodos([...todos, 'New todo']);
    };
  
    const incrementCount = () => {
      setCount(count + 1);
    };
  
    const addItem = () => {
      if (memoInput.length > 5) {
        setTodos([...todos, memoInput]);
        setMemoInput('');
      } else {
        alert('Please enter a text with more than 5 characters.');
      }
    };

    return (

        <div className="app">
             <button onClick={addTodo}>Add Todo</button>

{/* Increment Button */}
<button onClick={incrementCount}>Increment Count</button>
<span>{count}</span>

{/* Memo Input and Submit Button */}
<div>
  <input
    type="text"
    value={memoInput}
    onChange={(e) => setMemoInput(e.target.value)}
    placeholder="Type here..."
  />
  <button onClick={addItem}>Submit</button>
</div>

{/* Todo List */}
<ul>
  {todos.map((todo, index) => (
    <li key={index}>{todo}</li>
  ))}
</ul>
        </div>
    )
}

export default App;

