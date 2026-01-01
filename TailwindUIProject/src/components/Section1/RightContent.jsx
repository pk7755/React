import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto w-3/4 p-6 flex flex-nowrap gap-11 rounded-b-4xl'>
        {props.users.map(function(elem, idx) {
             return <RightCard key={idx} id={idx} color={elem.color} intro={elem.intro} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent
