import { useState } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [Password, setpassword] = useState('')
  const passwordGenerator = ()=>{
    
  }

  return (
    <>
    <h1 className='text-center text-3xl '>Password Generator</h1>
    </>
  )
}

export default App
