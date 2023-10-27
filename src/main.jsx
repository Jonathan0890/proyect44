import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1068914160942-lhjop7p20nk7dio0lomov7dkfn4gk451.apps.googleusercontent.com">
      <React.StrictMode>
        <App />
      </React.StrictMode>


      <RouterProvider router={routes} />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
