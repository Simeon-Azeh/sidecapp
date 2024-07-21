import { useState } from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Authentication/Login'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Landing/>} />
       <Route path="*" element={<Landing/>} />
       <Route path="/auth/login" element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
