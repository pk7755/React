import React from 'react'
import Card from './components/Card'
import "./App.css"
import Navbar from './components/Navbar'

const users = [
  { userImage: "https://picsum.photos/200?random=1", userName: "Alex", age: 15 },
  { userImage: "https://picsum.photos/200?random=2", userName: "Sam", age: 16 },
  { userImage: "https://picsum.photos/200?random=3", userName: "Jordan", age: 14 },
  { userImage: "https://picsum.photos/200?random=3", userName: "Jordan", age: 14 },
  { userImage: "https://picsum.photos/200?random=3", userName: "Jordan", age: 14 },
  { userImage: "https://picsum.photos/200?random=3", userName: "Jordan", age: 14 },
  { userImage: "https://picsum.photos/200?random=3", userName: "Jordan", age: 14 },
  { userImage: "https://picsum.photos/200?random=4", userName: "Taylor", age: 17 },
  { userImage: "https://picsum.photos/200?random=5", userName: "Morgan", age: 15 },
  { userImage: "https://picsum.photos/200?random=6", userName: "Riley", age: 16 },
  { userImage: "https://picsum.photos/200?random=6", userName: "Riley", age: 16 },
  { userImage: "https://picsum.photos/200?random=6", userName: "Riley", age: 16 },
  { userImage: "https://picsum.photos/200?random=7", userName: "Casey", age: 14 },
  { userImage: "https://picsum.photos/200?random=8", userName: "Jamie", age: 17 },
  { userImage: "https://picsum.photos/200?random=9", userName: "Avery", age: 15 },
  { userImage: "https://picsum.photos/200?random=10", userName: "Quinn", age: 16 }
];



const App = () => {
  return (
    <div className="parent">
      {users.map((elem, idx) =>{
      return (
        <div key={idx}>
          <Card name={elem.userName} img={elem.userImage} age={elem.age}/>
        </div>
      )
    })}
    </div>)
}

export default App
