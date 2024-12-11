import { useState } from 'react'
import BimCalculator from './Components/BimCalculator'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BimCalculator />
    </>
  )
}

export default App
