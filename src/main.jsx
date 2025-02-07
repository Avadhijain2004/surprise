import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import One from './components/One.jsx'
import Two from './components/Two.jsx'
import Three from './components/Three.jsx'
import Four from './components/Four.jsx'
import Five from './components/Five.jsx'
import Six from './components/Six.jsx'
import Seven from './components/Seven.jsx'
import Eight from './components/Eight.jsx'
import Surprise from './components/Surprise.jsx'
import Final from './components/Final.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/one',
    element: <One />
  },
  {
    path:'/two',
    element: <Two />
  },
  {
    path:'/three',
    element: <Three />
  },
  {
    path:'/four',
    element: <Four />
  },
  {
    path:'/five',
    element: <Five />
  },
  {
    path:'/six',
    element: <Six />
  },
  {
    path:'/seven',
    element: <Seven />
  },
  {
    path:'/eight',
    element: <Eight />
  },
  {
    path:'/surprise',
    element: <Surprise />
  },
  {
    path:'/final',
    element: <Final />
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
