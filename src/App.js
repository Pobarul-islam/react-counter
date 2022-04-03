import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
    </div>
    
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count +1);
  const decreaseCount = () => setCount(count -1);
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);

    
  // }
  
  return (
    <div>
      <h1 className="text-4xl mt-4">Counter:{count}</h1>
      <button onClick={increaseCount} className="bg-green-500 text-white p-2 rounded mt-5">
        Increase {setCount}
      </button>
      <button onClick={decreaseCount} className="bg-red-500 text-white p-2 rounded mt-5">
        Increase {setCount}
      </button>
    </div>
  );
}

export default App;
