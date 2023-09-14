import { useState } from 'react'

let cg=0;
function App() {
  const col=["red", "green", "blue", ];
  const [color, setColor] = useState("gray");

    function colorChg() {
      if (cg==3) {
        cg=0;
      }
      setTimeout(()=>setColor("yellow"),3000)
      cg=cg+1;
      return  setColor(`${col[cg-1]}`);
      }

  return (
    <>
      <div className="h-screen "
      style={{backgroundColor: color}}>
        <table>
          <td>
            <div className="fixed flex flex-worp justify-center bottom-12 inset-x-0 px-2">
              <tr>
                <button className='bg-white rounded-3xl border-l-2 text-lg '
                onClick={()=>setColor("red")}
                >Red</button>
              </tr>
              <tr>
                <button className='bg-white rounded-3xl border-l-2 text-lg '
                onClick={()=>setColor("yellow")}
                >yellow</button>
              </tr>
              <tr>
                <button className='bg-white rounded-3xl border-l-2 text-lg '
                onClick={colorChg}
                >orange</button>
              </tr>
            </div>
          </td>
      </table>
      </div>
    </>
  )
}

export default App
