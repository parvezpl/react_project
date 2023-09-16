import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [Password, setpassword] = useState('')
  const passwordReg =useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str+= '0123456789'
    if (characterAllowed) str+='!@#$%^&*(){}|'

    for (let i = 1; i <=length; i++) {
      let char =  Math.floor(Math.random() *str.length+1);
      pass += str.charAt(char);
      setpassword(pass);
    }

  },[length,numberAllowed,characterAllowed, setpassword ])

  const passwordCopy= useCallback(()=>{
    passwordReg.current.select();
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed, setpassword])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
     rounded-md px-4 my-8 text-orange-50 bg-gray-700'>
      <h1 className='text-center my-3'>Password Generetor</h1>
      <div className='flex shadow rounded-lg overflow-hidden md-4 text-black'>
        <input
        className='outline-none w-full py-1 px-3'
         type="text"
         value={Password}
         placeholder='password'
         readOnly
         ref={passwordReg}
         />

         <button 
         className='bg-lime-500 outline-none px-3 py-1 shrink-0'
         onClick={passwordCopy}
         >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(e.target.value)}
            />
            <label >Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            className='cursor-pointer'
            id='numinpurt'
            onChange={() => {setnumberAllowed((prev)=>!prev)}}
            />
            <label htmlFor='numinpurt' >Number Allowed</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={characterAllowed}
            className='cursor-pointer'
            id='charinput'
            onChange={() => {setcharacterAllowed((prev)=>!prev)}}
            />
            <label htmlFor='charinput' >Char Allowed</label>
          </div>


      </div>
    </div>
    </>
  )
}

export default App
