// import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import PuppiesList from './pages/PuppiesList'
import PuppyDetails from './pages/PuppyDetails'
import './App.css'

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'

function App() {

  return (
    <>
      <NavBar />
      <h1>Welcome to Puppy Bowl</h1>
      <Routes>
        <Route path='/' element={ <PuppiesList API={API_URL} /> } />
        <Route path='/PuppyDetails/:puppyId' element={<PuppyDetails API={API_URL} />}/>
      </Routes>
    </>
  )
}

export default App
