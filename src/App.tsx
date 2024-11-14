import { useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>(['장보기', '강연하기']);
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Todo list</h1>
      <input value={input} onChange={e => setInput(e.currentTarget.value)} />
      <button
        onClick={() => {
          setTodos(todos => [...todos, input]);
          setInput('');
        }}
      >
        추가!
      </button>
      {todos.map((todo, i) => {
        return (
          <p
            onClick={() => {
              const next = [...todos];
              next.splice(i, 1);
              setTodos(next);
            }}
          >
            {todo} {i}
          </p>
        );
      })}
    </div>
  );
}

export default App;
