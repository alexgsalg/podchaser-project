import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <div>
          <button aria-label='decrement' onClick={decrement}>
            -
          </button>
          <span data-cy='counter'>{count}</span>
          <button aria-label='increment' onClick={increment}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
