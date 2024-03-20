import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Skills from './components/Skills.jsx'
import Quote from './components/Quote.jsx'
import Header from './components/header.jsx'
import Navbar from './components/Navbar.jsx'
import GithubRepo from './components/GithubRepo.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Test from './components/test.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import  Root  from './components/Root.jsx'
import Project from './components/Project.jsx'
import Resume from './components/Resume.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Skeltongithubrepo from './components/SkeletonLoader/Skeltongithubrepo.jsx'
import CarryingOut from './components/CarryingOut.jsx'
import SpeSkills from './components/SpeSkills.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Root/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='Projects' element = {<Project/>}/>
      <Route path='Resume' element = {<Resume/>}/>
      <Route path='About' element = {<About/>}/>
      <Route path='Contact' element = {<Contact/>}/>
      <Route path='Carrying-Out' element = {<CarryingOut/>}/>
      <Route path='Skills' element = {<SpeSkills/>}/>
      <Route path='test' element = {<Test/>}/>
      <Route path='github-jatinjaglan347' element = {<GithubRepo/>}/>
      <Route path='skel' element = {<Skeltongithubrepo/>}/>
      
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <Home /> */}
    {/* <GithubRepo /> */}
    {/* <Header /> */}
    {/* <Skills/> */}
    {/* <Quote /> */}
  </React.StrictMode>,
)
