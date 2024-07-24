import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAlowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str+= "~!@#$%^&*()_+{}`=-"

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed ,setPassword])


    useEffect(()=>{
      passwordGenerator()
    },[length, numberAllowed, characterAllowed, passwordGenerator])



  return (
    <>
    <div>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div>
        <input 
        type='text'
        value={password}
        className=' w-full py-1 px-3 bg-black text-white '
        placeholder='password'
        readOnly
        />
        <button
        className='bg-blue-700 text-white'
        >copy</button>
      </div>
      <div className='flex'>
        <div className='flex'>
          <input 
          type='range' 
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <lable>Length : {length}</lable>
        </div>
        <div className='flex mx-2'>
          <input 
          type='checkbox'
          defaultChecked ={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAlowed((prev)=> !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex mx-2'>
          <input 
          type='checkbox'
          defaultChecked ={characterAllowed}
          id='characterInput'
          onChange={()=>{
            setCharacterAllowed((prev)=> !prev);
          }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
