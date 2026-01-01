import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>

        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 font-semibold flex justify-center items-center text-xl font'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed text-white'>{props.intro}</p>
                <div className='flex justify-between mt-18'>
                    <button style={{backgroundColor:props.color}} className='p-2 rounded-full px-10 pr-20 font-medium text-white tracking-widest'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='p-2 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
