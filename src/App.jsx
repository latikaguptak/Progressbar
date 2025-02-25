import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState(40)

  return (
   <>

   <ProgressBar data={data}/>
   </>
   )
}

export default App
