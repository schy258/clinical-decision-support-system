import React from 'react'
import Data from './components/Data';
import Data2 from './components/Data2';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';




export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Main/>}/> 
      {/* here i make a path which redirect to our mainpage */}
        
        <Route path='/data1' element={<Data/>}/>
      {/* here i created a path to our first form page */}

        <Route path='/data2' element={<Data2/>}/>
      {/* here i created a path to our second form page */}

    </Routes>
      
      </BrowserRouter>
    </div>
  )
}
