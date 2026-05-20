import React from 'react'
import Home from "./pages/Home/Home.jsx"
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import './App.css'
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
} 

export default App;
