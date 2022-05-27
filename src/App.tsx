import { useState } from 'react'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import List from './List'
import View from './View'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Routes>
       <Route path="/view/:id" element={<View />} />
	   <Route path="/" element={<List />}/>
    </Routes>
	</>
  )
}

export default App
