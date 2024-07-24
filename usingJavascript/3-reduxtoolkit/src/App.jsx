import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h3 className='text-white text-xl'>Learn Redux Toolkit</h3>
   <AddTodo />
   <Todos />
    </>
  )
}

export default App
