import React from 'react'
import Homepage from './pages/Homepage'
import {Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element= {<Homepage />}> </Route>
        <Route exact path='/signup' element= {<Signup />}> </Route>
        <Route exact path='/login' element= {<Login />}> </Route>
        <Route exact path='/dashboard' element= {<Dashboard />}> </Route>
    </Routes>
    </>
  )
}

export default App