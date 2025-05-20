import{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>

        <a href="https://vite.dev" target="_black">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_black">

          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <button type="button" onClick={handleClick}>Click me</button>
          count is {count}
          
        <p>

          Edit <code>src/App.jsx</code> and save to test HMR

        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    
  )
}
export default App;