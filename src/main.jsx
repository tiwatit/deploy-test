import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './index.css'
import About from './pages/About/About.jsx'
import KonchaZaspa from './pages/KonchaZaspa/KonchaZaspa.jsx'
import Tarasivka from './pages/Tarasivka/Tarasivka.jsx'
import Gatne from './pages/Gatne/Gatne.jsx'
import Gatne2 from './pages/Gatne2/Gatne2.jsx'
import Hotyanivka from './pages/Hotyanivka/Hotyanivka.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index={true} path='/' element={<App/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects/1' element={<KonchaZaspa/>} />
    <Route path='/projects/2' element={<Tarasivka/>} />
    <Route path='/projects/3' element={<Gatne/>} />
    <Route path='/projects/4' element={<Gatne2/>} />
    <Route path='/projects/5' element={<Hotyanivka/>} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
