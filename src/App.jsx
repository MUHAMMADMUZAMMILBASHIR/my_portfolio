import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SkillsPage from './pages/SkillsPage'
import ExperiencePage from './pages/ExperiencePage'

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/education' element ={<EducationPage/>}/>
          <Route path='skills' element={<SkillsPage/>}/>
          <Route path='experience' element={<ExperiencePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
         </Routes>
      </BrowserRouter>
    </React.StrictMode>
      
  )
}

export default App
