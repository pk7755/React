import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const users = [
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'red', 
    intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore molestiae officia suscipit numquam tempora?', 
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1667514668571-644051207a9b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'green',  
    intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore molestiae officia suscipit numquam tempora?', 
    tag:'Underserved'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661315419872-b5ab369985cd?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
     color:'royalBlue', 
    intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore molestiae officia suscipit numquam tempora?', 
    tag:'Underbanked'
  },
  {
    img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    color:'red',
    intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore molestiae officia suscipit numquam tempora?', 
    tag:'Profesional'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661378470712-98550fb28d15?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'green',
    intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore molestiae officia suscipit numquam tempora',
    tag:'Resource'
  },
  {
    img:'https://images.unsplash.com/photo-1758874573562-5bf0c1a7fc72?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'royalBlue', 
    intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore molestiae officia suscipit numquam tempora',
    tag:'Developer'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1664474970286-2c05f8adf9fb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'red', 
    intro:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore molestiae officia suscipit numquam tempora',
    tag:'Quality'
  }
]

const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />

    </div>
  )
}

export default App
   