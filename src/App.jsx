import { useState } from 'react'
import Signup from './signup'
import SignIn from './login'
import Homepage from './homepage'
import AuthDetails from './authentification'
import {  Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes >
    
      <Route path="/" element={<SignIn/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/AuthDetails" element={<AuthDetails/>}></Route>
      
      <Route path="/Homepage" element={<Homepage/>}></Route>
    </Routes>
    
    
    </>
  )
}

export default App
