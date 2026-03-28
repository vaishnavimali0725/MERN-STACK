import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [Counter, setCounter] = useState(10);
  
   //let Counter = 10;
  
  const addValue = () => {
   // console.log("Value Incremented"),Math;
    // Counter ++;
   // Counter = Counter + 1;
   setCounter(Counter + 1);
   console.log("Value Incremented",Counter);
  }

  const subtractValue = () => {
    setCounter(Counter - 1);
    console.log("Value Decremented",Counter);
  }
   return (
    <>
      <h1>hey everyone, we are here to understand hooks in react</h1>
      <h3>Counter:{Counter}</h3>

      <button onClick={addValue}>Increment by 1</button>
      <button onClick={subtractValue}>Decrement by 1</button>
    </>
  )
}

export default App
