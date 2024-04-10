import { useState } from 'react'
import Home from './home/Home'
import {Routes , Route} from 'react-router-dom'
import Courses from './course/Courses'
import SignUp from './components/SignUp'
function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<SignUp/>}/>

    </Routes>
  )
}

export default App
