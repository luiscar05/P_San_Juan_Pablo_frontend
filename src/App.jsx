import React, {useState,lazy,Suspense} from 'react'


import Login from './pages/login';
import Index from './pages/index';
import Loader from './components/Loader';
import { Routes,Route } from 'react-router-dom';
import { Calendario } from './components/Calendario';
function App() {
  

  return (
    <>
  <Routes>
    
      <Route path='/' element={<Index/>}/>
    
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Agenda' element={<Calendario/>}/>
    
    
  </Routes>
      {/* <Suspense fallback={<Loader/>}>
        <Index/>
      </Suspense> */}
    </>
  )
}

export default App
