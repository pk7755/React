import { useNavigate } from "react-router-dom"


const Navbar2 = () => {

    const navigate =  useNavigate()
    const btnClicked = () => {
        navigate('/')
    }

  return (
    <div>
        <button onClick={btnClicked} className='bg-green-400 text-white rounded cursor-pointer active:scale-95 font-semibold px-5 py-2 m-5'>Return to Home Page</button>
        <button onClick={() =>
            navigate(-1)
        } className='bg-green-400 text-white rounded cursor-pointer active:scale-95 font-semibold px-5 py-2 m-5'>Back</button>
        <button onClick={() =>{
            navigate(+1)
        }} className='bg-green-400 text-white rounded cursor-pointer active:scale-95 font-semibold px-5 py-2 m-5'>Next</button>
    </div>
  )
}

export default Navbar2