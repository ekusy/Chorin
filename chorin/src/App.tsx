import { useState } from 'react'

import './App.css'
import './componets/table/PaymentsTable'
import PaymentsTable from './componets/table/PaymentsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <PaymentsTable id={"test" } />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
