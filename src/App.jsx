import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen bg-black m-0 p-0 flex justify-center items-center">

      <div className='border-amber-500 bg-blue-600 border-2 rounded-2xl md:h-fit w-4xl h-screen'>

        <nav className='bg-blue-800 w-full h-8 rounded-2xl md:flex justify-between items-center hidden'>
          <div className='flex w-1/3'>
            <div className='h-6 ml-1  w-35 p-1 text-white bg-blue-500 rounded-xl flex items-center justify-center'>Mines</div>
            <div className='h-6 ml-4  w-35 p-1 bg-orange-400 rounded-xl flex items-center justify-center'>How To Play ?</div>
          </div>
          <div className='font-bold  w-1/3 mb-2 flex justify-center items-center '>
            <span className='bg-orange-400 px-3 text-white  rounded-b-xl'>Fun Mode</span>
          </div>
          <div className='flex w-1/3 justify-center items-center'>
            <div className='text-white mr-1'>3,000.00 USD</div>

          </div>
        </nav>
        <main className='flex flex-col justify-between items-center h-8/10 '>
          <div className='flex flex-col w-1/2 mt-2'>

            <div className=' bg-blue-900 h-6 rounded-2xl flex justify-between items-center'>
              <div className='flex items-center h-5 mx-px'>
                <select name="Mines" className='bg-blue-700  rounded-xl  m-px text-white' >
                  <option selected value="1">Mines 1</option>
                  <option value="2">Mines 2</option>
                  <option value="3">Mines 3</option>
                  <option value="4">Mines 4</option>
                  <option value="5">Mines 5</option>
                </select>
              </div>
              <div className='bg-orange-400 rounded-xl px-1 mx-px text-sm text-white'>Next: 1.10X</div>
            </div>
            <div className=' bg-blue-900 h-1 my-2 rounded-2xl flex justify-between items-center'></div>
          </div>
          <div className='w-1/2 bg-blue-600 h-85  rounded-2xl flex flex-col justify-between items-center'>
            <div className='flex justify-between space-x-5 mb-2'>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
            </div>

            <div className='flex justify-between space-x-5 mb-2'>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
            </div>

            <div className='flex justify-between space-x-5 mb-2'>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
            </div>


            <div className='flex justify-between space-x-5 mb-2'>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
            </div>


            <div className='flex justify-between space-x-5 mb-2'>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
              <div className='h-15 w-22 grad rounded-xl border-4 shadow-3xl border-[#025496] flex justify-center items-center'>
                <div className='h-5 w-5 rounded-full gradcircle'></div>
              </div>
            </div>
          </div>
          <div className='flex w-1/2 h-8 justify-between items-center mt-3 mb-2 space-x-1'>
            <div className='w-1/2 bg-sky-700 border border-gray-800 rounded-xl flex justify-center items-center text-white font-semibold font-sans '>RANDOM</div>
            <div className='w-1/2 bg-blue-900 border border-gray-800 rounded-xl flex justify-center items-center text-white font-semibold font-sans '>
             
             AUTOGAME
            </div>

          </div>
        </main>
        <footer className='bg-blue-800 w-full md:h-20 h-2/10 rounded-2xl flex justify-between items-center'>
          <div></div>
          <div></div>
          <div></div>
        </footer>
      </div>

    </div>
  )
}

export default App
