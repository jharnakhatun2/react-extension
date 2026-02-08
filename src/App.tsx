import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("")
  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target : {tabId : tab.id!},
      args: [color],
      func : (color)=>{
        document.body.style.backgroundColor = color;
      }
    })
  }
  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" /> 
      </div>

      <h1>React Extension</h1>
      <div className="card">
        <input type="color" onChange={(e)=>setColor(e.currentTarget.value)} value={color}/>
        <button onClick={onclick}>
          Change Color
        </button>
      </div>
    </>
  )
}

export default App
