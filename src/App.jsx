import React, {useState,lazy,Suspense} from 'react'


import Login from './pages/login';
import Index from './pages/index';
import Loader from './components/Loader';
import { Routes,Route } from 'react-router-dom';
import { Calendario } from './components/Calendario';
import { Agenda } from './pages/Agenda';
import { UserContextProvider } from './components/contex/UserContextProvider';
/* import { ProtectedRoute } from './components/ProtectedRoute';
import { useSelector } from 'react-redux'; */
export function App({}) {
  
  return (
    <>
    <UserContextProvider>
      <Routes>
      
        <Route index element={<Index/>}/>
      
        <Route path='/Login' element={<Login />}/>
        <Route path='/Agenda' element={<Agenda/>}/>
    
    
      </Routes>
    </UserContextProvider>
 
      {/* <Suspense fallback={<Loader/>}>
        <Index/>
      </Suspense> */}
    </>
  )
}

export default App
