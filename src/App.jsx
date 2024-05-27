import React, {useState,lazy,Suspense} from 'react'
const Index = lazy(() => import('./pages'));
import Loader from './components/Loader';
function App() {
  

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Index/>
      </Suspense>
    </>
  )
}

export default App
