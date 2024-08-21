import {useState} from 'react'

function App() {
  let [color, setColor] = useState("white")

  return (
    <>

    <div className="w-full h-screen duration-150" style={{backgroundColor: color}}>
      
      <div className="fixed flex flex-wrap justify-center  bottom-20  inset-x-0 px-3">

      <div className="flex flex-wrap justify-center shadow-md  gap-4 bg-orange-200  px-2 py-4  rounded-l-lg">
      <button className='outline-none px-3 py-5 shadow-sm'  onClick={ () =>{
        return setColor("orange")
      }}> 1st Button</button>
      </div>

      
      <div className="flex flex-wrap justify-center shadow-md  gap-4 bg-lime-400  px-2 py-4  rounded-l-lg">
      <button className='outline-none px-3 py-5 shadow-sm' onClick={ () =>{
        return setColor("lime")
      }}> 2nd Button</button>
      </div>

      </div>

    </div>

    </>

  )
}

export default App
