import React, { Children } from 'react'

export const citylayout = ({children, info}) => {
  return (
    <div className='flex h-screen w-screen p-15 m-10'>
        {children}
        {info}
    </div>
  )
}

export default citylayout