import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentWeather from './component/ CurrentWeather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CurrentWeather></CurrentWeather>
      
    </>
  )
}

export default App
