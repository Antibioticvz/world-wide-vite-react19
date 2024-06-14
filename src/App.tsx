import { useState, version } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans p-4">
      <h1 className="text-4xl">Welcome to Remix</h1>
      <h1 className="text-2xl underline">
        Vite + React Version!
        {version}
      </h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
