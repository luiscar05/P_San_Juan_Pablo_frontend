import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/contex/UserContextProvider.jsx';
/* import { Provider } from 'react-redux'; */
/* import { store,persistor } from './redux/store.jsx';
import { PersistGate } from 'redux-persist/integration/react'; */

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
         
    </BrowserRouter>
)
