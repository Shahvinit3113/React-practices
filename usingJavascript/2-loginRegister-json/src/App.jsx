import { BrowserRouter,Route, Routes } from 'react-router-dom'
// import './App.css' 
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Crud from './crud/Crud'


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Registration' element={<Register />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path={'/crud'} element={<Crud />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
