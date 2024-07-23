import { useState, useEffect } from 'react'
import { BrowserRouter ,Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register';
import Onboarding from './pages/Authentication/Onbarding';
import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  

  return (
    <>
     <BrowserRouter>
     <ScrollToTop />
     <Routes>
       <Route path="/" element={<Landing/>} />
       <Route path="*" element={<Landing/>} />
       <Route path="/auth/login" element={<Login/>} />
       <Route path="/auth/register" element={<Register/>} />
       <Route path="/auth/onboarding" element={<Onboarding/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/discover" element={<Discover/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
