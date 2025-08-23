import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoForm from './components/AddToDoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodoForm/>
    </>
  )
}

export default App
