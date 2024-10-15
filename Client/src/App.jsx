import { useState } from 'react'
import './App.css'
import  FileUpload from "./components/FileUpload"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card/> */}
      <FileUpload />
    </>
  )
}

export default App
