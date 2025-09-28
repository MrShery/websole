
import Index from './prpos/Index'
import Index_2 from './prpos/Index_2'
import Index_3 from './prpos/Index_3'
import Index_4 from './prpos/Index_4'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes, NavLink, Navigate, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/home2" element={<Index_2 />} />
          <Route path="/home3" element={<Index_3 />} />
          <Route path="/home4" element={<Index_4 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 