
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Courses from './pages/Courses'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:courseId' element={<CourseDetails />}/>
        <Route path='/products' element={<Products />} >
            <Route path='mens' element={<Mens />}/>
            <Route path='womens' element={<Womens />}/>
            <Route path='kids' element={<Kids />}/>
        </Route> 
        {/* <Route path='/products/mens' element={<Mens />}/>
        <Route path='/products/womens' element={<Womens />}/>
        <Route path='/products/kids' element={<Kids />}/> */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>

  )
}

export default App