import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {

  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <>
      <h1>Use Ref</h1>

      <video width="500" height="250"  ref={videoRef}>
        <source src='/Videos/digique.mp4'/>
      </video>
      <br />
      <button onClick={handlePlay} >
        Play
      </button>
      <button onClick={handlePause}>
        Pause
      </button>


    </>
  )
}

export default App
