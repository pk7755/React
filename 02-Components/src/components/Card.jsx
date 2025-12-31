import React from 'react'

const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p>Hey, I am {props.age} year old.</p>
      <button className='button'>View Profile</button>
      </div>
    </div>
  )
}

export default Card
