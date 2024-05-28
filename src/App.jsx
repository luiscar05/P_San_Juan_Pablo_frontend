import React, {useState,lazy,Suspense} from 'react'


import Login from './pages/login';
import Index from './pages/index';
import Loader from './components/Loader';
import { Routes,Route } from 'react-router-dom';
function App() {
  

  return (
    <>
  <Routes>
    
      <Route path='/' element={<Index/>}/>
    
      <Route path='/Login' element={<Login/>}/>
    
    
    
  </Routes>
      {/* <Suspense fallback={<Loader/>}>
        <Index/>
      </Suspense> */}
    </>
  )
}

export default App
