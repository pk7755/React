import { useState } from 'react';
import {X} from 'lucide-react'
const App = () => {

  const formHandler = (e) => {
  e.preventDefault()
  console.log('Form Submitted')
  console.log(title, details)

  const copyTask = [...task];

  copyTask.push({title, details})
  setTask(copyTask)

  setTitle('')
  setDetails('')
  }

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)

  }

  return (
    <div className='lg:flex bg-black h-screen text-white overflow-auto'>
      <form action="" onSubmit={(e)=> {
        formHandler(e)
      }}  className='flex flex-col lg:w-1/2 p-10 gap-4 '>
          <h1 className='font-bold text-4xl'>Add Notes</h1>

          <input  
          type="text" 
          placeholder='Enter Notes Heading'
          className='text-white border-2 px-5 py-2 w-full font-medium rounded-xl'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />

          <textarea 
          className='text-white border-2 px-5 py-2 w-full h-42 font-medium rounded-xl' 
          name="" id="" 
          placeholder='Write Details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          ></textarea>


          <button className='bg-white active:scale-95 text-black  border-2 px-5 py-2 w-full font-medium rounded-xl'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='font-bold text-4xl'>Recents Notes</h1>
        <div className='flex gap-10 py-5 items-start justify-start flex-wrap overflow-auto'>

        {task.map((elem, idx) => {
          return <div className='flex flex-col justify-between h-69 w-50 rounded-2xl bg-cover text-black p-6 py-6 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
            <div>
              <h3 className='leading-tight text-2xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx);
            }} className='bg-red-600 cursor-pointer active:scale-95 text-xs p-1 px-2 rounded fond-bold text-white w-full'>Delete</button>
          </div>
        })}
         

        </div>
      </div>
    </div>
  )
}

export default App
